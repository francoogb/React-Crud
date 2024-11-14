import React, { useState } from "react";
import { Link, useLoaderData, useNavigate, useActionData, Form, redirect, useParams } from "react-router-dom";

import {
    getProductosFotos,getProductosFotosPorId, addFotosPorProducto, deleteFotos

} from "../../servicios/ApiFetch";
import Swal from "sweetalert2";

    
export async function loader({ params }) {
    const fotos = await getProductosFotos(params.id);
    const datos = await getProductosFotosPorId(params.id);
    return [datos, fotos];
}

export async function action({ request, params }) {
    const formData = await request.formData();
    const archivo = formData.get('foto');
    const errores = [];

    // Validación del archivo
    if (!archivo) {
        errores.push("No se ha seleccionado ningún archivo.");
        return { errores };
    } else {
        switch (archivo.type) {
            case 'image/jpeg':
            case 'image/png':
            case 'image/gif':
                break; // Tipo válido
            default:
                errores.push("El archivo debe ser una imagen (jpeg, png, gif)");
                return { errores };
        }
    }

    // Intentar subir la foto si no hay errores
    try {
        const resultado = await addFotosPorProducto(params.id);
        console.log("Resultado de la subida:", resultado);

        // Verificar si la respuesta fue exitosa
        if (resultado && resultado.status === 201) {
            Swal.fire({
                icon: "success",
                title: "Foto subida con éxito",
            });

            // Redirigir después del éxito
            return redirect(`/fetch/productos/fotos/${params.id}`);
        } else {
            Swal.fire({
                icon: "error",
                title: "Ocurrió un error inesperado, por favor intenta nuevamente",
            });
        }
    } catch (error) {
        console.error("Error en el bloque catch de action:", error);
        Swal.fire({
            icon: "error",
            title: "Ocurrió un error al subir la foto",
            text: error.message || "Por favor, intenta nuevamente",
        });
    }

    return null; // Asegurarse de retornar algo siempre
}


// Componente principal para mostrar el formulario de fotos
const FetchProductosFotos = () => {
    
    const [datos, fotos] = useLoaderData();
    const errores = useActionData();
    const navigate = useNavigate();

    const dentroEliminar = async (id) => {
        const respuesta = await deleteFotos(id);
      
        // Verificar si el código de respuesta está en el rango de 200 a 299 (éxito)
        if (respuesta >= 200 && respuesta < 300) {
          Swal.fire({
            icon: "success",
            title: "Ok",
            text: "Se eliminó el registro exitosamente",
          });
          navigate(0); // Recargar la página
        } else {
          Swal.fire({
            icon: "error",
            title: "Ops",
            text: "No es posible eliminar esta categoría",
          });
        }
      };

    const handleEliminar = (id) => {
        Swal.fire({
          title: "Realmente quiere borrar esta categoría",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "No",
          confirmButtonText: "SI",
        }).then((result) => {
          if (result.isConfirmed) {  // <--- Corrección aquí
            dentroEliminar(id);
          }
        });
      }


    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/fetch">Fetch</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Productos Fotos Fetch
                    </li>
                </ul>
            </nav>

            {errores?.length > 0 && (
                <div className="alert alert-danger">
                    {errores.map((error, index) => (
                        <p key={index}>{error}</p>
                    ))}
                </div>
            )}

            <div className="row">
                <h4>Subir Foto</h4>
                <Form method="post" encType="multipart/form-data" noValidate>
                    <div className="form-group">
                        <label htmlFor="foto">Seleccionar Foto:</label>
                        <input
                            type="file"
                            className="form-control"
                            id="foto"
                            name="foto"
                            accept="image/*"
                            required
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mt-3">
                        Subir
                    </button>
                </Form>
            </div>

            <hr />

            <div className="row">
                <h4>
                    Fotos de: <strong>{datos.nombre}</strong>
                </h4>
                <table className="table">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Foto</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {fotos.map((foto, index) => (
                            <tr key={index}>
                                <td>{foto.id}</td>
                                <td>
                                    <img
                                        src={foto.foto}
                                        alt={`Foto de ${datos.nombre}`}
                                        width="100"
                                    />
                                </td>
                                <td>
                                    <button
                                        className="btn btn-danger"
                                        onClick={() => handleEliminar(foto.id)}
                                    >
                                        Eliminar
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
};

export default FetchProductosFotos;
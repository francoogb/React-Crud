import { Link, useLoaderData, useNavigate, useActionData, Form, redirect } from "react-router-dom";
import { getProductosFotos, deleteFotoPorId, getProductosPorId, addFotosPorProducto } from "./../../servicios/ApiAxios";
import Swal from "sweetalert2";

// Loader para cargar las fotos y datos del producto
export async function loader({ params }) {
    const fotos = await getProductosFotos(params.id);
    const datos = await getProductosPorId(params.id);
    return [datos, fotos];
}

// Acción para manejar la subida de fotos
export async function action({ request, params }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const errores = [];
    let bandera = 0;

    // Validación de tipo de archivo
    switch (formData.get('foto').type) {
        case 'image/jpeg':
        case 'image/png':
        case 'image/gif':
            bandera = 0;  // Tipo de archivo válido
            break;
        default:
            errores.push('El archivo debe ser una imagen (jpeg, png, gif)');
            bandera = 1;  // Bandera indica que hay un error
    }

    // Retornar errores si se encontraron
    if (bandera === 1) {
        return { errores };  // Devolver errores para mostrarlos en la vista
    }

    // Si no hay errores, proceder con el procesamiento del archivo
    try {
        const resultado = await addFotosPorProducto(formData.get('foto'), params.id);

        // Verificar si la respuesta es exitosa
        if (resultado === 201) {
            Swal.fire({
                icon: "success",
                title: "Foto subida con éxito",
            });

            // Redirigir a la misma página después de subir la foto
            return redirect(`/axios/productos/fotos/${params.id}`);  // Redirigir después del éxito
        } else {
            Swal.fire({
                icon: "error",
                title: "Ocurrió un error inesperado, por favor intenta nuevamente",
            });
        }
    } catch (error) {
        // Manejar errores de forma general
        Swal.fire({
            icon: "error",
            title: "Ocurrió un error al subir la foto",
            text: error.message || "Por favor, intenta nuevamente",
        });
    }

    return null;  // Asegurarse de devolver algo siempre (null en este caso)

    
}

// Componente principal
const AxiosProductosFotos = () => {
    const [datos, fotos] = useLoaderData();
    const errores = useActionData();
    const navigate = useNavigate();

    const dentroEliminar = async (id) => {
        const respuesta = await deleteFotoPorId(id);
    
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
            text: "No es posible eliminar esta producto",
          });
        }
      };
    
      const handleEliminar = (id) => {
        Swal.fire({
          title: "Realmente quiere borrar este producto",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          cancelButtonText: "No",
          confirmButtonText: "SI",
        }).then((result) => {
          if (result.isConfirmed) {
            // <--- Corrección aquí
            dentroEliminar(id);
          }
        });
      };
    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/axios">Axios</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to={`/axios/productos/${datos.id}`}>Axios Productos</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        <Link to="#">Axios Productos Fotos</Link>
                    </li>
                </ol>
            </nav>

            <h1>Productos Fotos {datos.nombre}</h1>

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
                        <input type="file" className="form-control" id="foto" name="foto" accept="image/*" required />
                    </div>
                 
                    <button type="submit" className="btn btn-primary mt-3">
                        Subir
                    </button>
                </Form>
            </div>

            <hr />

            <div className="row">
                <h4>Fotos de: <strong>{datos.nombre}</strong></h4>
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
                                    <img src={foto.foto} alt={`Foto de ${datos.nombre}`} width="100" />
                                </td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handleEliminar(foto.id)}>
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

  
}

export default AxiosProductosFotos;

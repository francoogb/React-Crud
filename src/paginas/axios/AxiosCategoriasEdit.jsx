import React from 'react';
import { Link, Form, redirect, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { editProductos, getProductosPorId } from "../../servicios/ApiAxios";

// Loader para obtener los datos del producto
export async function loader({ params }) {
    const datos = await getProductosPorId(params.id);
    
    // Verifica si no hay datos y redirige a la página de error
    if (!datos || Object.keys(datos).length === 0) {
        throw redirect("/error");
    }
    
    return datos;
}

// Action para manejar la edición del producto
export async function action({ request, params }) {
    try {
        // Obtener los datos del formulario
        const formData = await request.formData();
        const datos = Object.fromEntries(formData.entries()); // Convierte FormData a un objeto

        // Verifica si hay campos vacíos
        if (Object.values(datos).some(field => field === "")) {
            return { errores: ["Todos los campos son obligatorios."] };
        }

        // Editar el producto
        const respuesta = await editProductos(datos, params.id);

        // Verifica el código de respuesta (200 o 201)
        if (respuesta === 200 || respuesta === 201) {
            Swal.fire({
                icon: "success",
                title: "Éxito",
                text: "Producto actualizado correctamente",
            }).then(() => {
                return redirect('/axios/productos'); // Redirecciona después de la alerta
            });
        } else if (respuesta === 409) { // Producto ya existe
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "El producto ya existe",
            });
            return { errores: ["El producto ya existe"] };
        } else if (respuesta === -1) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Error al conectar con el servidor.",
            });
            return { errores: ["Ocurrió un problema al conectar con el servidor."] };
        } else {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Ocurrió un error inesperado.",
            });
            return { errores: ["Ocurrió un error inesperado."] };
        }
    } catch (error) {
        console.error("Error al editar producto:", error);
        Swal.fire({
            icon: "error",
            title: "Error",
            text: "Ocurrió un problema al editar el producto.",
        });
        return { errores: ["Ocurrió un problema al editar el producto."] };
    }

    return null;
}

// Componente de la interfaz de edición de productos
const AxiosProductosEdit = () => {
    const producto = useLoaderData(); // Cargar datos del producto

    return (
        <>
            <nav aria-label="breadcrumb">
                <ul className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/axios/productos">Productos</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">Editar Producto</li>
                </ul>
            </nav>

            <h1>Editar Producto</h1>

            {/* Formulario de edición */}
            <Form method="post" noValidate>
                <div className="form-group mb-3">
                    <label htmlFor="nombre" className="form-label">
                        Nombre
                    </label>
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        className="form-control"
                        placeholder="Nombre del producto"
                        defaultValue={producto.nombre} // Previo valor
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="descripcion" className="form-label">
                        Descripción
                    </label>
                    <textarea
                        id="descripcion"
                        name="descripcion"
                        className="form-control"
                        placeholder="Descripción del producto"
                        defaultValue={producto.descripcion}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="precio" className="form-label">
                        Precio
                    </label>
                    <input
                        type="number"
                        id="precio"
                        name="precio"
                        className="form-control"
                        placeholder="Precio del producto"
                        defaultValue={producto.precio}
                    />
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="stock" className="form-label">
                        Stock
                    </label>
                    <select
                        id="stock"
                        name="stock"
                        className="form-control"
                        defaultValue={producto.stock}
                    >
                        {[...Array(101).keys()].map((i) => (
                            <option key={i} value={i}>
                                {i}
                            </option>
                        ))}
                    </select>
                </div>
                <div className="form-group mb-3">
                    <label htmlFor="categorias_id" className="form-label">
                        Categoría
                    </label>
                    <select
                        id="categorias_id"
                        name="categorias_id"
                        className="form-control"
                        defaultValue={producto.categorias_id}
                    >
                        {/* Aquí podrías agregar dinámicamente las categorías si las tienes disponibles */}
                    </select>
                </div>

                <button className="btn btn-primary">Guardar Cambios</button>
            </Form>
        </>
    );
}

export default AxiosProductosEdit;

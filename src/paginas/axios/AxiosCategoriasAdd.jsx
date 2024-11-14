import React from "react";
import { Link, Form, redirect } from "react-router-dom";
import Swal from "sweetalert2";
import { addCategorias } from "./../../servicios/ApiAxios";

// Action para manejar la creación de categorías
export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  let errores = [];

  // Verifica si hay campos vacíos
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios.");
  }

  // Si hay errores, retorna un objeto que los incluya
  if (errores.length > 0) {
    return { errores };
  }

  try {
    const respuesta = await addCategorias({ nombre: datos.nombre });

    // Verifica el código de respuesta
    if (respuesta === 201) {
      Swal.fire({
        icon: "success",
        title: "Ok",
        text: "Se creó el registro exitosamente",
      });
      // Redirecciona a la lista de categorías
      return redirect('/axios/categorias');
    } else {
      // Manejo de error si la categoría ya existe
      Swal.fire({
        icon: "error",
        title: "Ops",
        text: "La categoría ya existe",
      });
      return { errores: ["La categoría ya existe"] }; // Retorna un error
    }
  } catch (error) {
    console.error("Error al agregar categoría:", error);
    Swal.fire({
      icon: "error",
      title: "Error",
      text: "Ocurrió un problema al crear la categoría.",
    });
    return { errores: ["Ocurrió un problema al crear la categoría."] }; // Retorna un error
  }
}

const AxiosCategoriasAdd = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/axios/categorias">Axios Categorías</Link>
          </li>
        </ul>
      </nav>

      <h1>Crear Categorías</h1>

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
            placeholder="Escribe el nombre de la categoría"
          />
        </div>
        <hr />
        <button className="btn btn-primary">Crear</button>
      </Form>
    </>
  );
};

export default AxiosCategoriasAdd;

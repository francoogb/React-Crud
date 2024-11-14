import React from "react";
import { Link, useLoaderData, Form, useActionData, redirect } from "react-router-dom";
import { addProductos, getCategorias } from "./../../servicios/ApiAxios";
import Validaciones from "../../Validaciones";
import Swal from "sweetalert2";

// Loader para obtener los datos de las categorias
export async function loader() {
  const categorias = await getCategorias();
  return categorias;
}

export async function action({ request }) {
    const formData = await request.formData();
    const datos = Object.fromEntries(formData);
    const errores = [];
  
    // Verificar si algún campo está vacío
    if (Object.values(datos).includes("")) {
      errores.push("Todos los campos son obligatorios");
    }
  
    // Si hay errores, retornarlos
    if (errores.length) {
      return { errores }; // Retornas un objeto con los errores
    }
  
    const resultado = await addProductos({
      nombre: datos.nombre,
      descripcion: datos.descripcion,
      precio: datos.precio,
      stock: datos.stock,
      categorias_id: datos.categorias_id,
    });
  
    if (resultado) {
      // Si la función addProductos retorna algo, se asume que la operación fue exitosa
      Swal.fire({
        icon: "success",
        title: "Producto añadido",
        text: "El producto fue añadido exitosamente",
      });
      
      return redirect('/axios/productos/1');
    } else {
      return { error: "El producto indicado ya existe" };
    }
  }

const AxiosProductosAdd = () => {
  const categorias = useLoaderData();
  const { errores, error } = useActionData() || {}; // Extraemos errores y error
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/axios">Axios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/axios/productos/1">Axios Crear Producto</Link>
          </li>
        </ol>
      </nav>
      <h1>Crear</h1>
      {(errores?.length || error) && <Validaciones errores={errores || [error]} />}

      <Form method="post" noValidate>
        <div className="form-group">
          <label htmlFor="categorias_id">Categorías</label>
          <select className="form-control" name="categorias_id" id="categorias_id">
            {categorias.map((categoria) => (
              <option key={categoria.id} value={categoria.id}>
                {categoria.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="nombre">Nombre del producto</label>
          <input
            type="text"
            className="form-control"
            id="nombre"
            name="nombre"
            placeholder="Ingresa el nombre del producto"
          />
        </div>

        <div className="form-group">
          <label htmlFor="descripcion">Descripción</label>
          <textarea
            className="form-control"
            id="descripcion"
            name="descripcion"
            rows="4"
            placeholder="Ingresa una descripción del producto"
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="precio">Precio</label>
          <input
            type="number"
            className="form-control"
            id="precio"
            name="precio"
            placeholder="Ingresa el precio del producto"
          />
        </div>

        <div className="form-group">
          <label htmlFor="stock">Stock</label>
          <select name="stock" id="stock" className="form-control">
            {(() => {
              let row = [];
              for (let i = 0; i <= 100; i++) {
                row.push(
                  <option key={i} value={i}>
                    {i}
                  </option>
                );
              }
              return row; // Retornamos el array row
            })()}
          </select>
        </div>

        <br />

        <button type="submit" className="btn btn-primary">
          Guardar producto
        </button>
      </Form>
    </>
  );
};

export default AxiosProductosAdd;

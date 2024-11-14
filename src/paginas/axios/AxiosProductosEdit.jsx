import React from "react";
import {
  Link,
  Form,
  redirect,
  useLoaderData,
  useActionData,
} from "react-router-dom";
import {
  getProductosPorId,
  editProductos,
  getCategorias,
} from "./../../servicios/ApiAxios";
import Validaciones from "../../Validaciones";
import Swal from "sweetalert2";

export async function loader({ params }) {
    console.log("params:", params); // Verifica qué contiene `params`
  
    if (!params || !params.id) {
      console.log("El id no está presente en los parámetros.");
    }
  
    const datos = await getProductosPorId(params.id);  // Obtén el producto usando el id de la URL
    if (Object.values(datos).length === 0) {
      throw new Response("", {
        status: 404,
        statusText: "Producto no encontrado",
      });
    }
    const categorias = await getCategorias();
    return [datos, categorias];
  }
  

  export async function action({ request, params }) {
    try {
      const formData = await request.formData();
      const datos = Object.fromEntries(formData);
      const errores = [];
  
      // Validación de campos vacíos
      if (Object.values(datos).some((value) => value.trim() === "")) {
        errores.push("Todos los campos son obligatorios");
      }
  
      // Verificar si hay errores
      if (errores.length) {
        return { errores };
      }
  
      // Verifica si el ID es válido
      const idProducto = params.id;
      if (!idProducto || isNaN(idProducto)) {
        return { errores: ["ID de producto inválido"] };
      }
  
      // Lógica para editar el producto
      const productoEditado = await editProductos({
        nombre: datos.nombre,
        descripcion: datos.descripcion,
        precio: datos.precio,
        stock: datos.stock,
        categorias_id: datos.categorias_id,
      }, params.id);  // Asegúrate de enviar el ID correcto
  
      console.log('Producto editado:', productoEditado); // Revisa qué se retorna de la API
  
      // Si el producto se ha editado correctamente, redirigir
      if (productoEditado) {
        Swal.fire({
          icon: "success",
          title: "Producto actualizado correctamente",
          showConfirmButton: false,
          timer: 1500,
        });
  
        // Redirigir a la página de productos
        return redirect("/axios/productos/1");
      } else {
        // Si algo falla, retornar un error
        return { errores: ["No se pudo actualizar el producto"] };
      }
    } catch (error) {
      console.error('Error al editar el producto:', error);
      return { errores: ["Ocurrió un error al procesar la solicitud"] };
    }
  }
  


const AxiosProductosEdit = () => {
    const [datos, categorias] = useLoaderData(); // Obtenemos los datos del producto y las categorías
    const errores = useActionData(); // Obtenemos los errores si los hay
  
    return (
      <>
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/axios">Axios</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              <Link to="#">Axios editar Producto</Link>
            </li>
          </ol>
        </nav>
  
        <h1>Editar producto</h1>
  
        {/* Mostrar errores si existen */}
        {errores?.length && <Validaciones errores={errores} />}
  
        <Form method="post" noValidate>
          {/* Categorías */}
          <div className="form-group">
            <label htmlFor="categorias_id">Categorías</label>
            <select
              className="form-control"
              name="categorias_id"
              id="categorias_id"
              defaultValue={datos.categorias_id} // Pre-poblar el valor de la categoría
            >
              {categorias.map((categoria) => (
                <option key={categoria.id} value={categoria.id}>
                  {categoria.nombre}
                </option>
              ))}
            </select>
          </div>
  
          {/* Nombre del producto */}
          <div className="form-group">
            <label htmlFor="nombre">Nombre del producto</label>
            <input
              type="text"
              className="form-control"
              id="nombre"
              name="nombre"
              defaultValue={datos.nombre} // Pre-poblar con el nombre existente
              placeholder="Ingresa el nombre del producto"
            />
          </div>
  
          {/* Descripción */}
          <div className="form-group">
            <label htmlFor="descripcion">Descripción</label>
            <textarea
              className="form-control"
              id="descripcion"
              name="descripcion"
              rows="4"
              defaultValue={datos.descripcion} // Pre-poblar con la descripción existente
              placeholder="Ingresa una descripción del producto"
            ></textarea>
          </div>
  
          {/* Precio */}
          <div className="form-group">
            <label htmlFor="precio">Precio</label>
            <input
              type="number"
              className="form-control"
              id="precio"
              name="precio"
              defaultValue={datos.precio} // Pre-poblar con el precio existente
              placeholder="Ingresa el precio del producto"
            />
          </div>
  
          {/* Stock */}
          <div className="form-group">
            <label htmlFor="stock">Stock</label>
            <select
              name="stock"
              id="stock"
              className="form-control"
              defaultValue={datos.stock} // Pre-poblar con el valor del stock existente
            >
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
  
          {/* Botón para enviar el formulario */}
          <button type="submit" className="btn btn-primary">
            Guardar producto
          </button>
        </Form>
      </>
    );
};

export default AxiosProductosEdit;

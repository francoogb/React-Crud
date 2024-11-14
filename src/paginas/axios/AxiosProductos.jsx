import React from "react";
import { Link, useLoaderData, useParams, useNavigate } from "react-router-dom";
import { deleteProductos, getProductos } from "./../../servicios/ApiAxios";
import Swal from "sweetalert2";

// Loader para obtener los datos de productos
export async function loader({ params }) {
  
  try {
    
    let datos = await getProductos(params.page); // Asegúrate de que la API esté configurada para recibir el ID correctamente
    return datos; // Asegúrate de que datos sea un objeto que contenga un array
  } catch (error) {
    console.error("Error al cargar productos:", error);
    return { datos: [], links: 0 }; // Devuelve un objeto que contiene un array vacío en caso de error
  }
}

// Funciones utilitarias para formatear texto y números
const acortarTexto = (texto, longitud) => {
  return texto.length > longitud ? texto.substring(0, longitud) + "..." : texto;
};

const formatearNumero = (numero) => {
  return new Intl.NumberFormat("es-CL", {
    style: "currency",
    currency: "CLP",
  }).format(numero);
};

const AxiosProductos = () => {
  const { datos, links } = useLoaderData(); // Carga los datos
  const { page } = useParams(); // Obtiene el número de la página actual
  let navigate = useNavigate();

  // Verifica si datos es un array
  if (!Array.isArray(datos)) {
    console.error("Los datos no son un array:", datos);
    return <div className="alert alert-danger">Error al cargar productos.</div>;
  }

  // Convertir la página actual a un número entero
  const paginaActual = parseInt(page, 10) || 1;

  const dentroEliminar = async (id) => {
    const respuesta = await deleteProductos(id);

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
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/axios">Axios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="#">Axios Productos</Link>
          </li>
        </ol>
      </nav>

      <h1>Productos</h1>

      {/* Verificación simplificada */}
      {datos.length === 0 ? (
        <div className="alert alert-warning">No hay productos</div>
      ) : (
        <div className="table-responsive">
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Categoría</th>
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Precio</th>
                <th>Stock</th>
                <th>Fotos</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {/* Mapea los datos y crea filas en la tabla */}
              {datos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>
                    <Link
                      to={`/axios/productos/categorias/${producto.categoria_slug}/1`}
                    >
                      {producto.categoria}
                    </Link>
                  </td>
                  <td>{acortarTexto(producto.nombre, 30)}</td>
                  <td>{acortarTexto(producto.descripcion, 100)}</td>
                  <td>{formatearNumero(producto.precio)}</td>
                  <td>{producto.stock}</td>
                  <td>
                    <Link to={`/axios/productos/fotos/${producto.id}`}>
                      <i className="fas fa-camera"></i>
                    </Link>
                  </td>
                  <td>
                    <Link
                      to={`/axios/productos/editar/${producto.id}`}
                      className="btn btn-primary"
                      style={{ marginRight: "10px" }}
                    >
                      Editar
                    </Link>
                    <Link
                      to="#"
                      onClick={() => {
                        handleEliminar(producto.id);
                      }}
                      className="btn btn-danger"
                    >
                      Eliminar
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Paginación */}
          <nav aria-label="Page navigation example">
            <ul className="pagination">
              {/* Enlace a la primera página */}
              <li className="page-item">
                <Link className="page-link" to={`/axios/productos/1`}>
                  Primera
                </Link>
              </li>

              {/* Enlace a la página anterior */}
              <li className="page-item">
                <Link
                  className="page-link"
                  to={`/axios/productos/${paginaActual - 1}`}
                  disabled={paginaActual <= 1}
                >
                  Anterior
                </Link>
              </li>

              {/* Mostrar número de página actual */}
              <li className="page-item disabled">
                <span className="page-link">
                  Página {paginaActual} de {links}
                </span>
              </li>

              {/* Enlace a la siguiente página */}
              <li className="page-item">
                <Link
                  className="page-link"
                  to={`/axios/productos/${paginaActual + 1}`}
                  disabled={paginaActual >= links}
                >
                  Siguiente
                </Link>
              </li>

              {/* Enlace a la última página */}
              <li className="page-item">
                <Link className="page-link" to={`/axios/productos/${links}`}>
                  Última
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default AxiosProductos;

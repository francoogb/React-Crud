import React from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getCategorias, deleteCategorias } from "./../../servicios/ApiAxios";
import Swal from "sweetalert2";

// Loader para obtener los datos
export async function loader() {
  let datos = await getCategorias();
  return datos;
}

const AxiosCategorias = () => {
  const datos = useLoaderData(); // Carga los datos del loader
  let navigate = useNavigate();

  const dentroEliminar = async (id) => {
    const respuesta = await deleteCategorias(id);
  
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
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/axios">Axios</Link>
          </li>
        </ol>
      </nav>

      <h1>Categorías</h1>

      <p>
        <Link className="btn btn-success" to="/axios/categorias/add">
          <i className="fas fa-plus" aria-hidden="true"></i>{" "}
          Crear
        </Link>
      </p>

      <div className="table-responsive">
        {datos.length === 0 ? (
          <div className="alert alert-warning">No hay registros</div>
        ) : (
          <table className="table">
            <thead>
              <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {datos.map((categoria) => (
                <tr key={categoria.id}>
                  <td>{categoria.id}</td>
                  <td>{categoria.nombre}</td>
                  <td>
                    <Link
                      style={{ margin: "10px" }}
                      to={`/axios/categorias/${categoria.id}/edit`}
                      className="btn btn-primary"
                    >
                      Editar
                    </Link>

                    <Link to="#" onClick={() => {handleEliminar(categoria.id)}} className="btn btn-danger">Eliminar</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
};

export default AxiosCategorias;

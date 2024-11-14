import React, { useState } from "react";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { getCategorias, addCategorias, editCategorias, deleteCategorias } from "../../servicios/ApiFetch";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";

export async function loader() {
  let datos = await getCategorias();
  return datos;
}

const FetchCategorias = () => {
    const navigate = useNavigate();
    const [nombre, setNombre] = useState(""); // Estado para la nueva categoría
    const [acciones, setAcciones] = useState(1); // Estado para gestionar la acción (Agregar o Editar)
    const [accionesId, setAccionesId] = useState();
    const [show, setShow] = useState(false);
    const datos = useLoaderData();
  
    const handleClose = () => {
      setShow(false);
      setNombre(""); // Limpiar el campo al cerrar el modal
    };
  
    const handleShow = () => {
      setAcciones(1);  // Aseguramos que 'acciones' sea 1 al mostrar el modal para agregar
      setShow(true);
    };
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (!nombre.trim()) {
        Swal.fire({
          icon: "error",
          title: "Ups",
          text: "El campo nombre está vacío",
        });
        return;
      }
  
      try {
        if (acciones === 1) {
          await addCategorias({ nombre });
          Swal.fire({
            icon: "success",
            title: "Categoría creada",
            text: `La categoría "${nombre}" se ha creado con éxito.`,
          });
        } else if (acciones === 2) {
          await editCategorias({ nombre }, accionesId);
          Swal.fire({
            icon: "success",
            title: "Categoría modificada",
            text: `La categoría "${nombre}" se ha modificado con éxito.`,
          });
        }
        navigate(0); // Refrescar la página
        handleClose(); // Cerrar el modal después de la acción
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Ups",
          text: "Ocurrió un error inesperado",
        });
      }
    };

    
  
    const handleEditar = (modulo) => {
      setAcciones(2); // Establecer 'acciones' en 2 para editar
      setAccionesId(modulo.id);
      setNombre(modulo.nombre);
      setShow(true); // Abrir el modal al editar
    };

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
          <ul className="breadcrumb">
            <li className="breadcrumb-item">
              <Link to="/fetch">Fetch</Link>
            </li>
            <li className="breadcrumb-item active" aria-current="page">
              Categorías Fetch
            </li>
          </ul>
        </nav>
  

        <h1>Categorías</h1>
  
        <p>
          <Button className="btn btn-success" onClick={handleShow}>
            Crear
          </Button>
        </p>
  
        {/* Verificación simplificada */}
        {datos.length === 0 ? (
          <div className="alert alert-warning">No hay categorías</div>
        ) : (
          <div className="table-responsive">
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
                        to="#"
                        onClick={() => handleEditar(categoria)} // En lugar de `datos`, debe ser `categoria`
                        className="btn btn-primary"
                        style={{ marginRight: "10px" }}
                      >
                        Editar
                      </Link>
  
                      <button
                        className="btn btn-danger"
                        onClick={() => handleEliminar(categoria.id)}
                      >
                        Eliminar
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
  
            {/* Modal para agregar nueva categoría */}
            <Modal show={show} onHide={handleClose} centered>
              <Modal.Header closeButton className="bg-primary text-white">
                <Modal.Title>
                  {acciones === 1 ? "Agregar Categoría" : "Editar Categoría"}
                </Modal.Title>
              </Modal.Header>
  
              <Modal.Body>
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="nombreCategoria">
                      Nombre de la Categoría
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="nombreCategoria"
                      value={nombre}
                      onChange={(e) => setNombre(e.target.value)}
                      placeholder="Ingresa el nombre de la categoría"
                    />
                  </div>
                  <Button type="submit" className="btn btn-success mt-3">
                    {acciones === 1 ? "Crear" : "Guardar"}
                  </Button>
                </form>
              </Modal.Body>
            </Modal>
          </div>
        )}
      </>
    );
  };
  
export default FetchCategorias;

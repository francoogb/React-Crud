import React, { useState } from "react";
import { Link, useLoaderData, useNavigate, useParams } from "react-router-dom";
import {
  getCategorias,
  getProductos,
  addProductos,
  editProductos,
  deleteProductos,
} from "../../servicios/ApiFetch";
import Swal from "sweetalert2";
import Modal from "react-bootstrap/Modal";
import { Button } from "react-bootstrap";
import {
  acortarTexto,
  formatearNumero,
  formatearFecha,
} from "../../helpers/helpers.js";

export async function loader({ params }) {
  let datos = await getProductos(params.page);
  let categorias = await getCategorias();
  return { datos, categorias };
}

const FetchProductos = () => {
  const { datos, categorias, links } = useLoaderData(); // Corrige la desestructuración
  const { page } = useParams(); // Obtiene el número de la página actual
  const navigate = useNavigate();
  const [nombre, setNombre] = useState("");
  const [categorias_id, setCategoria_id] = useState("0");
  const [precio, setPrecio] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [stock, setStock] = useState("");
  const [acciones, setAcciones] = useState(1); // 1 = Crear, 2 = Editar
  const [accionesId, setAccionesId] = useState();
  const [show, setShow] = useState(false);

  const handleClose = () => {
    
    setShow(false);
    setNombre(""); // Limpiar el campo al cerrar el modal
    setCategoria_id("0");
    setPrecio("");
    setDescripcion("");
    setStock("");
  };

  const handleShow = () => setShow(true);

  const handleCrear = () => {
    setAcciones(1); // Establecer 'acciones' en 1 para crear
    setNombre(""); // Limpiar el campo al cerrar el modal
    setCategoria_id("0");
    setPrecio("");
    setDescripcion("");
    setStock("");
    handleShow();
  };

  const handleEditar = (producto) => {
    setAcciones(2); // Establecer 'acciones' en 2 para editar
    setAccionesId(producto.id);
    setNombre(producto.nombre);
    setCategoria_id(producto.categorias_id);
    setPrecio(producto.precio);
    setDescripcion(producto.descripcion);
    setStock(producto.stock);
    handleShow();
  };

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

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Validación para asegurarse de que los campos no estén vacíos
    if (nombre == 0 || nombre == "") {
      Swal.fire({
        icon: "error",
        title: "Ups",
        text: "El campo nombre está vacío",
      });
      return; // Detener la ejecución si la validación falla
    }
  
    // Validación para asegurarse de que la categoría esté seleccionada
    if (categorias_id === "0") {
      Swal.fire({
        icon: "error",
        title: "Ups",
        text: "Debe seleccionar una categoría",
      });
      return; // Detener la ejecución si la validación falla
    }
  
    if (descripcion == 0 || descripcion == "") {
      Swal.fire({
        icon: "error",
        title: "Ups",
        text: "El campo descripción está vacío",
      });
      return; // Detener la ejecución si la validación falla
    }
  
    if (precio == 0 || precio == "") {
      Swal.fire({
        icon: "error",
        title: "Ups",
        text: "El campo precio está vacío",
      });
      return; // Detener la ejecución si la validación falla
    }
  
    // Verifica que todos los campos necesarios estén llenos
    if (acciones === 1) {
      // Lógica para crear un producto
      const nuevoProducto = {
        nombre,
        categorias_id,
        precio,
        descripcion,
        stock,
      };
  
      try {
        await addProductos(nuevoProducto); // Asegúrate de que la función addProductos esté preparada para recibir este objeto
        Swal.fire({
          icon: "success",
          title: "Producto creado",
          text: `El Producto "${nombre}" se ha creado con éxito.`,
        }).then(() => {
          window.location.reload(); // Recargar la página después de crear el producto
        });
        handleClose(); // Cerrar el modal después de crear el producto
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al crear el producto.",
        });
      }
    } else if (acciones === 2) {
      // Lógica para editar el producto
      const productoEditado = {
        id: accionesId, // Asegúrate de que `accionesId` tiene el valor correcto
        nombre,
        categorias_id,
        precio,
        descripcion,
        stock,
      };
  
      console.log("Producto a editar:", productoEditado); // Agrega un log para depurar los datos
  
      try {
        await editProductos(productoEditado,accionesId ); // Asegúrate de que la función editProductos esté preparada para recibir estos datos
        Swal.fire({
          icon: "success",
          title: "Producto actualizado",
          text: `El Producto "${nombre}" se ha actualizado con éxito.`,
        }).then(() => {
          window.location.reload(); // Recargar la página después de editar el producto
        });
        handleClose(); // Cerrar el modal después de editar el producto
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: "Hubo un problema al actualizar el producto.",
        });
      }
    }
  };
  

  const paginaActual = parseInt(page, 10) || 1;

  return (
    <>
      <nav aria-label="breadcrumb">
        <ul className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/fetch">Fetch</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Productos Fetch
          </li>
        </ul>
      </nav>

      <h4>Listado Productos {datos.total} de registros </h4>
      <p>
        <Button className="btn btn-success" onClick={handleCrear}>
          Crear
        </Button>
      </p>

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
              {datos.datos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>
                    <Link
                      to={`/fetch/productos/categorias/${producto.categoria_slug}/1`}
                    >
                      {producto.categoria}
                    </Link>
                  </td>
                  <td>{acortarTexto(producto.nombre, 30)}</td>
                  <td>{acortarTexto(producto.descripcion, 100)}</td>
                  <td>{formatearNumero(producto.precio)}</td>
                  <td>{producto.stock}</td>
                  <td>
                    <Link to={`/fetch/productos/fotos/${producto.id}`}>
                      <i className="fas fa-camera"></i>
                    </Link>
                  </td>
                  <td>
                    <Link
                      to="#"
                      onClick={() => handleEditar(producto)}
                      className="btn btn-primary"
                      style={{ marginRight: "10px" }}
                    >
                      Editar
                    </Link>
                    <Link to="#" className="btn btn-danger" onClick={()=> handleEliminar(producto.id)} >
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
              <li className="page-item">
                <Link className="page-link" to={`/fetch/productos/1`}>
                  Primera
                </Link>
              </li>
              <li className="page-item">
                <Link
                  className="page-link"
                  to={`/fetch/productos/${paginaActual - 1}`}
                  disabled={paginaActual <= 1}
                >
                  Anterior
                </Link>
              </li>
              <li className="page-item disabled">
                <span className="page-link">
                  Página {paginaActual} de {links}
                </span>
              </li>
              <li className="page-item">
                <Link
                  className="page-link"
                  to={`/fetch/productos/${paginaActual + 1}`}
                  disabled={paginaActual >= links}
                >
                  Siguiente
                </Link>
              </li>
              <li className="page-item">
                <Link className="page-link" to={`/fetch/productos/${links}`}>
                  Última
                </Link>
              </li>
            </ul>
          </nav>

          {/* Modal para agregar o editar productos */}
          <Modal show={show} onHide={handleClose} centered>
            <Modal.Header closeButton className="bg-primary text-white">
              <Modal.Title>
                {acciones === 1 ? "Crear Producto" : "Editar Producto"}
              </Modal.Title>
            </Modal.Header>

            <Modal.Body>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="nombreProducto">Nombre del Producto</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    name="nombre"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    placeholder="Ingresa el nombre del producto"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="categorias_id">Categoría</label>
                  <select
                    className="form-control"
                    id="categorias_id"
                    name="categorias_id"
                    value={categorias_id}
                    onChange={(e) => setCategoria_id(e.target.value)}
                  >
                    <option value="0">Seleccionar categoría</option>
                    {categorias.map((categoria) => (
                      <option key={categoria.id} value={categoria.id}>
                        {categoria.nombre}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="form-group">
                  <label htmlFor="precio">Precio</label>
                  <input
                    type="text"
                    className="form-control"
                    id="precio"
                    name="precio"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                    placeholder="Ingresa el precio"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="descripcion">Descripción</label>
                  <textarea
                    className="form-control"
                    id="descripcion"
                    name="descripcion"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                    placeholder="Descripción del producto"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="stock">Stock</label>
                  <select
                    className="form-control"
                    id="stock"
                    name="stock"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  >
                    {(() => {
                      let options = [];
                      for (let i = 0; i <= 100; i++) {
                        options.push(
                          <option key={i} value={i}>
                            {i}
                          </option>
                        );
                      }
                      return options;
                    })()}
                  </select>
                </div>
                <div className="form-group text-center">
                  <button type="submit" className="btn btn-success">
                    {acciones === 1 ? "Crear Producto" : "Actualizar Producto"}
                  </button>
                </div>
              </form>
            </Modal.Body>
          </Modal>

        </div>
      )}
    </>
  );
};

export default FetchProductos;

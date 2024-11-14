import { Link, useLoaderData, useParams } from "react-router-dom";
import { getCategoriasPorSlug, getObtenerProductosPorCategoria } from "./../../servicios/ApiAxios";
import Swal from "sweetalert2";

export async function loader({ params }) {
  let datos = await getObtenerProductosPorCategoria(params.slug, params.page);
  let categoria = await getCategoriasPorSlug(params.slug);
  return [datos, categoria];
}

const AxiosProductosCategorias = () => {
  const [datos, categoria] = useLoaderData();
  const { page } = useParams(); // Asegúrate de usar correctamente useParams
  
  // Funciones auxiliares para formatear datos
  const acortarTexto = (texto, limite) => {
    if (!texto) return '';
    return texto.length > limite ? `${texto.substring(0, limite)}...` : texto;
  };
  
  const formatearNumero = (numero) => {
    if (numero == null) return '$0'; // Devuelve un valor predeterminado si el número no es válido.
    return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP' }).format(numero);
  };



  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/axios">Axios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            <Link to="/axios/productos/1">Axios Listado Productos</Link>
          </li>
        </ol>
      </nav>

      <h1>Productos Categoría: {categoria.nombre}</h1>
      <p>
        <Link className="btn btn-success" to={`/axios/productos/add`}>
          Crear
        </Link>
      </p>

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
              {datos.datos.map((producto) => (
                <tr key={producto.id}>
                  <td>{producto.id}</td>
                  <td>
                    <Link to={`/axios/productos/categorias/${producto.categoria_slug}/1`}>
                      {producto.categoria}
                    </Link>
                  </td>
                  <td>{acortarTexto(producto.nombre, 30)}</td>
                  <td>{acortarTexto(producto.descripcion, 100)}</td>
                  <td>{formatearNumero(producto.precio)}</td>
                  <td>{producto.stock}</td>
                  <td>
                    <Link to={`/axios/productos/${producto.id}/fotos`}>
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
                    <button className="btn btn-danger" onClick={() => manejarEliminar(producto.id)}>
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          {/* Paginación */}
          <div className="d-flex justify-content-between">
            <div>
              {/* Aquí podrías agregar información de paginación */}
              <span>{`Mostrando ${datos.length} productos`}</span>
            </div>
            <div>
              {/* Aquí puedes implementar la paginación numérica */}
              <Link to={`/axios/productos/categorias/${categoria.slug}/1`} className="btn btn-light">1</Link>
              <Link to={`/axios/productos/categorias/${categoria.slug}/2`} className="btn btn-light">2</Link>
              <Link to={`/axios/productos/categorias/${categoria.slug}/3`} className="btn btn-light">3</Link>
              {/* Añade más botones según la cantidad total de páginas */}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

// Función para manejar la eliminación (puedes ajustarla según tu lógica)
const manejarEliminar = async (id) => {
  const result = await Swal.fire({
    title: '¿Estás seguro?',
    text: 'Esta acción no se puede deshacer.',
    icon: 'warning',
    showCancelButton: true,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Sí, eliminar!',
  });

  if (result.isConfirmed) {
    // Aquí puedes agregar la lógica para eliminar el producto
    Swal.fire('Eliminado!', 'Tu producto ha sido eliminado.', 'success');
  }
};

export default AxiosProductosCategorias;

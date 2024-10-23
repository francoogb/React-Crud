import  { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const LocalStorage = () => {
  const [existe, setExiste] = useState(
    localStorage.getItem("tokenLocal") != null ? 1 : 0
  );

  const handleCrear = () => {
    localStorage.setItem("tokenLocal", "1234567");
    Swal.fire({
      icon: "success",
      title: "Ok",
      text: "Se creo el registro exitosamente",
    });
    setExiste(1);
  };

  const handleBorrar = () => {
    localStorage.removeItem('tokenLocal');
    Swal.fire({
      icon: "success",
      title: "Ok",
      text: "Se Elimino el registro exitosamente",
    });
    setExiste(0);
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/almacenamiento-local">Almacenamiento Local </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Local Storage
          </li>
        </ol>
      </nav>
      <hr />
      <h3> Local Storage</h3>

      <button className="btn btn-warning " onClick={handleCrear}>
        Crear Local Storage
      </button>
      {existe == 1 ? (
        <p>El valor es : {localStorage.getItem("tokenLocal")}</p>
      ) : (
        <p>No existe el valor </p>
      )}
      <hr/>
      <button className = "btn btn-success" onClick={handleBorrar}>Borrar  </button>
    </>
  );
};

export default LocalStorage;

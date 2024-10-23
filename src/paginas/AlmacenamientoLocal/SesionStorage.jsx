import  { useState } from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const SesionStorage = () => {
  const [existe, setExiste] = useState(
    sessionStorage.getItem("tokenLocal") != null ? 1 : 0
  );

  const handleCrear = () => {
    sessionStorage.setItem("tokenLocal", "1234567");
    Swal.fire({
      icon: "success",
      title: "Ok",
      text: "Se creo el registro exitosamente",
    });
    setExiste(1);
  };

  const handleBorrar = () => {
    sessionStorage.removeItem('tokenLocal');
    Swal.fire({
      icon: "success",
      title: "Ok",
      text: "Se Elimino el registro exitosamente",
    });
    setExiste(0);
  };
  return (
    <div>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/almacenamiento-local">Almacenamiento Local </Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Sesion Storage
          </li>
        </ol>
      </nav>
      <hr />
      <h3> Sesion Storage</h3>
      <button className="btn btn-warning " onClick={handleCrear}>
        Crear Local Storage
      </button>
      {existe == 1 ? (
        <p>El valor es : {sessionStorage.getItem("tokenLocal")}</p>
      ) : (
        <p>No existe el valor </p>
      )}
      <hr/>
      <button className = "btn btn-success" onClick={handleBorrar}>Borrar  </button>
    </div>
  );
};

export default SesionStorage;

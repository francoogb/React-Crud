import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const HookUseEffect = () => {
  let [arreglo, setArreglo] = useState([]);
  let [marcador, setMarcador] = useState(0);
  console.log(arreglo);

  useEffect(() => {
    // Solo se ejecutará al montar el componente
    setArreglo([
      {
        id: 1,
        nombre: "frxngb",
        correo: "frxngb@hmail.com",
      },
      {
        id: 2,
        nombre: "vale",
        correo: "valeY@hmail.com",
      },
    ]);
  }, []);

  const mostrarArreglo = (valor) => {
    setMarcador(valor);
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Hook useEffect
          </li>
        </ol>
      </nav>
      <hr />
      <h1> Hook UseEffect</h1>
      <button className="btn btn-success" onClick={() => mostrarArreglo(1)}>
        Mostrar Arreglo
      </button>
      <button className="btn btn-danger" onClick={() => mostrarArreglo(0)}>
        Ocultar Arreglo
      </button>

      {marcador === 1 && (
        <>
          <hr />
          <ul>
            {arreglo.map((item) => (
              <li key={item.id}>
                Nombre: {item.nombre}
                <br />
                E-mail: {item.correo}
              </li>
            ))}
          </ul>
        </>
      )}
    </>
  );
};

export default HookUseEffect;

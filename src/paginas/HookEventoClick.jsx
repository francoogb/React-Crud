import React from 'react';
import { Link } from 'react-router-dom';

const HookEventoClick = () => {
  // Maneja el evento de clic
  const handlePresioname = () => {
    alert("¡Hola! ¿Qué tal?");
  };

  const funcionConParametros = (nombre) => {
    alert(`Tu nombre es: ${nombre}`); // Usando template literals para mayor claridad
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
        </ol>
      </nav>

      <hr />

      <h3 className="text-center">Click en el botón</h3>

      <div className="text-center mt-4">
        <button className='btn btn-primary mx-2' onClick={handlePresioname}>
          <i className="fa-solid fa-hand"></i> Hacer Click
        </button>

        <button className='btn btn-success mx-2' onClick={handlePresioname}>
          <i className="fa-solid fa-hand"></i> Hacer Click
        </button>

        <button className='btn btn-warning mx-2' onClick={() => funcionConParametros("Frxngb")}>
          <i className="fa-solid fa-hand"></i> Hacer Click Con Parámetros
        </button>
      </div>

      <hr />

      <p className="text-center text-muted">
        Usa los botones arriba para interactuar con el evento de clic.
      </p>
    </>
  );
};

export default HookEventoClick;

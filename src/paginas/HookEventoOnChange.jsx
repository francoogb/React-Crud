import { useState } from 'react';
import { Link } from 'react-router-dom';

const HookEventoOnChange = () => {
  const [nombre, setNombre] = useState("");

  const handleFormulario = () => {
    console.log(nombre);
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Hook Evento OnChange
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Utilizando el Evento OnChange</h3>
      <br />
      <p>
        <input
          type="text"
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="form-control"
          placeholder="Nombre:"
        />
      </p>
      <button className="btn btn-warning" onClick={handleFormulario}>
        <i className="fas fa-edit"></i> Enviar
      </button>
    </>
  );
};

export default HookEventoOnChange;

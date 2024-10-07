import { FaExclamationTriangle } from 'react-icons/fa'; // Asegúrate de instalar react-icons

const Validaciones = ({ errores }) => {
  return (
    <div className="alert alert-danger border border-danger rounded p-4 shadow-lg">
      <div className="d-flex align-items-center mb-3">
        <FaExclamationTriangle className="me-3 text-danger" size={28} />
        <h5 className="m-0 fw-bold">Se encontraron los siguientes errores:</h5>
      </div>
      <ul className="list-unstyled ms-4">
        {errores.map((error, i) => (
          <li key={i} className="mb-2">
            <FaExclamationTriangle className="me-2 text-danger" size={18} />
            <span className="text-break">{error}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Validaciones;

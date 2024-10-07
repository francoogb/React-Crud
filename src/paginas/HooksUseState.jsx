import React, { useState } from "react";
import { Link } from "react-router-dom";

const HooksUseState = () => {
  const [contador, setContador] = useState(0);
  
  const handleIncrementar = () => {
    setContador(contador + 1);
  };

  const handleDecrementar = () => {
    if (contador === 0) {
      alert("No puedes disminuir más el valor, es 0.");
    } else {
      setContador(contador - 1);
    }
  };

  return (
    <>
      <h1 className="text-center mt-4">Utilizando useState</h1>
      
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            UseState
          </li>
        </ol>
      </nav>

      <hr />

      <div className="text-center mt-4">
        <button className="btn btn-success mx-2" onClick={handleIncrementar}>
          <i className="fas fa-plus"></i> Incrementar
        </button>

        <button className="btn btn-danger mx-2" onClick={handleDecrementar}>
          <i className="fas fa-minus"></i> Decrementar
        </button>
      </div>
      
      <hr />
      
      <h2 className="text-center mt-4">Contador: <span className="text-primary">{contador}</span></h2>
    </>
  );
};

export default HooksUseState;

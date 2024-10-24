import { useState, useContext } from "react";
import EjemploContext from "../../context/EjemploProvider";

const ContextEjemplo = () => {
 
  const { variableContext, paisesContext, saludar, stateContext, setStateContext } = useContext(EjemploContext);
    
  const handleCambiar  = ()=> {

    setStateContext("Cambiando El nombre del State")

  }

  return (
    <>
      <h1> Ejemplo context </h1>
      <p>Valor : {variableContext}</p>
      <h2>Países:</h2>
      <ul>
        {paisesContext.map((pais, index) => (
          <li key={index}>{pais}</li>
        ))}
      </ul>
      <p>{saludar("Frxngb")}</p>
      <p>{stateContext}</p>

     <button className = "btn btn-success" onClick={handleCambiar}>Cambiar </button>
    </>
  );
};

export default ContextEjemplo;

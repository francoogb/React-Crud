import { useState, createContext } from "react";

const EjemploContext = createContext();

const EjemploProvider = ({ children }) => {
  const variableContext = "Hi frxngb desde el Contexto";
  const paisesContext = ["Chile", "Argentina", "Brasil", "Perú", "México"];
  const saludar = (nombre) => {
    return nombre;
  };

  const [stateContext, setStateContext] = useState("Contenido Inicial del Parametro con useState");

  return (
    <EjemploContext.Provider
      value={{
        variableContext,
        paisesContext,
        saludar,
        stateContext,
        setStateContext
      }}
    >
      {children}
    </EjemploContext.Provider>
  );
};

export { EjemploProvider };

export default EjemploContext;

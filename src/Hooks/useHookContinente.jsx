import { useState } from "react";

const useHookContinente = () => {
  const [contiente, setContinente] = useState([]);

  // Corrección en el retorno
  return [contiente, setContinente]; 
};

export default useHookContinente;

import { useState } from "react";

const useHooksPersonalziado = () => {
  const [verduras, setVerduras] = useState([]);

  return [verduras, setVerduras];
};

export default useHooksPersonalziado;

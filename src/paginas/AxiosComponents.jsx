import React from "react";
import { Link } from "react-router-dom";
const AxiosComponents = () => {
  return (
    <div>
      <h1>Axios</h1>
      <ul>
        <li>
          <Link to="/axios/categorias">Categorias</Link>
        </li>
        <li>
          <Link to="/axios/productos/1">Productos</Link>
        </li>
      </ul>
    </div>
  );
};

export default AxiosComponents;

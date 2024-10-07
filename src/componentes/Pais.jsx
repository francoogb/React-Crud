import React from "react";

const Pais = ({ value }) => {
  return (
    <tr key={value.id}>
      <td>{value.id}</td>
      <td>{value.nombre}</td>
      <td>{value.dominio}</td>
    </tr>
  );
};

export default Pais;

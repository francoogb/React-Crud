import React from "react";

const Equipos = ({ equipo }) => {
  return (
    <tr>
      <td>{equipo.id}</td>
      <td>{equipo.nombre}</td>
      <td>{equipo.ciudad}</td>
    </tr>
  );
};

export default Equipos;

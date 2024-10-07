import Pais from "./pais";
import Equipos from "./equipos";

const ComponenteFuncional2 = ({ prop1, nombre, paises, equipos }) => {
  return (
    <div>
      <h3> Contenido desde el componente 2</h3>

      <ul>
        <li>Prop1: {prop1}</li>
        <li>Nombre: {nombre}</li>
      </ul>
      <hr></hr>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Dominio</th>
          </tr>
        </thead>

        <tbody>
          {paises.map((value) => (
            <Pais key={value.id} value={value}></Pais>
          ))}
        </tbody>
      </table>

      <hr></hr>

      <h3> Tabla con Equipos de Football</h3>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre Equipo</th>
            <th>Ciudad</th>
          </tr>
        </thead>
        <tbody>
          {equipos.map((equipo) => (
            <Equipos key={equipo.id} equipo={equipo}>
              {" "}
            </Equipos>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ComponenteFuncional2;

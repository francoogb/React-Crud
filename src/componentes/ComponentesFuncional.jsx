import ComponenteFuncional2 from "./ComponenteFuncional2";
import ChildrenComponents from "./ChildrenComponents";

import Numeros from "./Numeros";
const ComponentesFuncional = () => {
  let nombre = "Franco Valdenegro";
  let numero = 12;
  let paises = [
    {
      id: 1,
      nombre: "Chile",
      dominio: "cl",
    },
    {
      id: 2,
      nombre: "Argentina",
      dominio: "ar",
    },
    {
      id: 3,
      nombre: "Brasil",
      dominio: "br",
    },
  ];

  let equipos = [
    {
      id: 1,
      nombre: "Real Madrid",
      ciudad: "Madrid",
    },
    {
      id: 2,
      nombre: "Barcelona",
      ciudad: "Barcelona",
    },
    {
      id: 3,
      nombre: "Atlético Madrid",
      ciudad: "Madrid",
    },
    {
      id: 4,
      nombre: "Valencia",
      ciudad: "Valencia",
    },
    {
      id: 5,
      nombre: "Sevilla",
      ciudad: "Sevilla",
    },
    {
      id: 6,
      nombre: "Villarreal",
      ciudad: "Villarreal",
    },
  ];

  return (
    <>
      <h1>Hola desde un componentes Funcional </h1>
      <ComponenteFuncional2
        prop1="manzana"
        nombre={nombre}
        paises={paises}
        equipos={equipos}
      ></ComponenteFuncional2>
      <hr></hr>
      <h3>Renderizado Condicional</h3>

      {(numero == 12 ) ? (

        <Numeros numero={numero}></Numeros>

      ) :

      (
      <div> No es 12</div>)

      }
      <hr></hr>
      <ChildrenComponents >

      <p> Children Etiqueta P </p>

      </ChildrenComponents>
    </>

  );
};

export default ComponentesFuncional;

import { formatearFecha } from "../helpers/helpers.js";
import { acortarTexto } from "../helpers/helpers";
import { formatearNumero } from "../helpers/helpers";

function Basicos() {
    let fecha = new Date();
    let cantidad = 32323;
    let texto = "Es un hecho establecido hace demasiado tiempo que un lector se distraerá con el contenido del texto de un sitio mientras que mira su diseño. El punto de usar Lorem Ipsum es que tiene una distribución más o menos normal de las letras, al contrario de usar textos como por ejemplo \"Contenido aquí, contenido aquí\". Estos textos hacen parecerlo un español que se puede leer. Muchos paquetes de autoedición y editores de páginas web usan el Lorem Ipsum como su texto por defecto, y al hacer una búsqueda de \"Lorem Ipsum\" va a dar por resultado muchos sitios web que usan este texto si se encuentran en estado de desarrollo. Muchas versiones han evolucionado a través de los años, algunas veces por accidente, otras veces a propósito (por ejemplo insertándole humor y cosas por el estilo)."
    let edad = 18;
    let numero = 12;
    let paises = [
      {
        nombre: "Chile",
        dominio: "cl"
      },
      {
        nombre: "Argentina",
        dominio: "ar"
      },
      {
        nombre: "Brasil",
        dominio: "br"
      },
    
    
    ];
      return (
        <>
          <h2>Renderizado Condicional</h2>
    
          {edad >= 18 && <div>La persona es mayor de Edad</div>}
    
          {edad >= 18 ? (
            <div>La persona es mayor de Edad</div>
          ) : (
            <div>La persona es Menor de Edad</div>
          )}
          <h2>Switch Case </h2>
    
          {(() => {
            switch (numero) {
              case 13:
                return <div>El número es 13</div>;
              case 14:
                return <div>El número es 14</div>;
              default:
                return <div>Número desconocido</div>;
            }
          })()}
          <hr></hr>
          <h2>Ejmplos Con Loop</h2>
    
          <h3>Loop Normal ES6</h3>
    
          <ul>
            {Array.from({ length: 11 }).map((_, y) => (
              <li key={y}>{y}</li>
            ))}
          </ul>
    
    
          <h3>Inline IIFE</h3>
    
          <ul>
            {(
              (function (rows, i, len) {
                while (++i <= len) {
                  rows.push(<li key={i}>{i}</li>);
                }
                return rows;
              })([], 0, 10)
            )}
          </ul>
    
          <h3>Con ES2015 sintax y array methods</h3>
    
          {Array(11).fill(1).map((el, i)=>
            <li key={i}>{i} </li>
          )}
    
          <h3>Ciclo for Sencillo</h3>
          <ul>
            {
              (() => {
                let rows = [];
                for (let i = 1; i < 10; i++) {
                  rows.push(<li key={i}>{i}</li>);
                }
                return rows;
              })()  // Llamada a la función IIFE
            }
          </ul>
            <h3>Recorrer Elementos con Map</h3>
                  <ul>
            {paises.map((pais, index) => (
              <li key={pais.dominio}>
                {index }. {pais.nombre} (El dominio es: {pais.dominio})
              </li>
            ))}
          </ul>
    
        <h3>Helpers Personalizados</h3>
        <ul>
    
            <li>Fecha :{formatearFecha(fecha)}</li>
            <li>Cantidad : {formatearNumero(cantidad)}</li>
            <li>Texto : {acortarTexto(texto, 0, 40)} ...</li>
    
    
        </ul>
    
    
        </>
      );
    }

export default Basicos

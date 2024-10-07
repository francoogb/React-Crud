import "./App.css";
import parse from "html-react-parser";

function App() {
  const ejemplo = `<h2>Este es un h1 con interpolación en React</h2>`;
  const ejemplo2 = `<h2>Este es otro h1 con interpolación en React</h2>`;

  return (
    <>
      <h1>Hola mundo con React y Vite</h1>

      {/* Utilizando Backstip en un <h1> */}
      <div dangerouslySetInnerHTML={{ __html: ejemplo }} />
      <hr />

      {/* Utilizando html-react-parser para interpretar la cadena HTML */}
      {parse(ejemplo2)}

    </>
  );
}

export default App;

import { Link } from "react-router-dom";

const AlmacenamientoLocal = () => {
  return (
    <>
           <h1>Almacenamiento Local </h1>
      <ul>
        <li>
          <Link to="/almacenamiento-local/local-storage">Local Storage</Link>
        </li>
        <li>
          <Link to="/almacenamiento-local/secion-storage">Sesion Storage</Link>
        </li>
 
      </ul>
    </>
  )
}

export default AlmacenamientoLocal

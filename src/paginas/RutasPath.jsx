import { useParams } from "react-router-dom";

const RutasPath = () => {
  const { id, slug } = useParams();

  return (
    <>
      <h2> Ejemplos Parametros Path </h2>
      <ul>
        <li>ID : {id}</li>
        <li>SLUG : {slug}</li>
      </ul>
    </>
  );
};

export default RutasPath;

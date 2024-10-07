import { useLocation } from "react-router-dom";

const RutasQuery = () => {
  const search = useLocation().search;
  const query = new URLSearchParams(search); // Crea una sola instancia de URLSearchParams
  const id = query.get("id");
  const slug = query.get("slug");

  return (
    <>
      <h2>Ejemplos Parámetros QueryString</h2>
      <ul>
        <li>ID: {id}</li>
        <li>SLUG: {slug}</li>
      </ul>
    </>
  );
};

export default RutasQuery;

import { Link, useNavigate } from "react-router-dom";

const HookUseNavigate = () => {
  const navigate = useNavigate();
  console.log(navigate);
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Hook useLoaderData
          </li>
        </ol>
      </nav>
      <h3>Hook UseNavigate </h3>
      <button
        className="btn btn-success"
        onClick={() => {
          navigate("/Acerca");
        }}
      >
        {" "}
        Nosotros{" "}
      </button>
      <hr />
      <button
        className="btn btn-warning"
        onClick={() => {
          navigate(-1);
        }}
      >
        {" "}
        Volver Atras{" "}
      </button>
    </>
  );
};

export default HookUseNavigate;

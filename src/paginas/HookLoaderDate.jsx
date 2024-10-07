import { Link, useLoaderData } from "react-router-dom"
import { paises } from "../datos/datos"
/* Cargar datos */
/* Ordenar de forma desendente */
export function loader(){
  const countries = paises.sort().reverse();
  return countries;
}

const HookLoaderDate = () => {

  const countries = useLoaderData();
  
  console.log (countries)
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
            <h3>Hook useLoaderData </h3>


            <div className="container mt-4">
      <table className="table table-striped table-bordered">
        <thead className="thead-dark">
          <tr>
            <th>ID</th>
            <th>País</th>
            <th>Dominio</th>
            <th>Código País</th>
          </tr>
        </thead>
        <tbody>
          {paises.map((pais) => (
            <tr key={pais.id}>
              <td>{pais.id}</td>
              <td>{pais.pais}</td>
              <td>{pais.dominio}</td>
              <td>{pais.codigoPais}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>


    </>
  )
}

export default HookLoaderDate

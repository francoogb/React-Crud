import {NavLink, Link} from 'react-router-dom'

const Rutas = () => {
  let id = 12;
  let slug = "Cualquiercosa"
  return (
    <>
      <h1>Rutas </h1>
      <ul>

        <li> <NavLink to='/'>home</NavLink></li>
        <li> <Link to='/Acerca'>Nosotros</Link></li>
        <li> <Link to='/rutas-path'> Parametros con Path </Link></li>
        <li> <Link to={`/rutas/path/${id}/${slug}`}> Parametros con Path </Link></li>
        <li> <Link to={`/rutas/query-string?id=${id}&slug=${slug}`}>Parámetros con Query String </Link></li>




      </ul>
    </>
  )
}

export default Rutas

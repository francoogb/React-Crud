import { Link } from 'react-router-dom'

const Formularios = () => {
  return (
    <>
    <h1>Rutas </h1>
      <ul>

        <li> <Link to='/formulario-simple'>Formulario Simple</Link></li>
        <li> <Link to='/formulario-user-action-data'>Formulario con UserActionData</Link></li>
        <li> <Link to='/formulario-practica'>Formulario practica</Link></li>
        <li> <Link to='/formulario-formik'>Formulario useFormik</Link></li>
        <li> <Link to='/formulario-react-hook-form'>Formulario React Hook Form</Link></li>
        <li> <Link to="/formularios-final-forms">Formulario Final Forms </Link></li>




      </ul>


    </>
  )
}

export default Formularios

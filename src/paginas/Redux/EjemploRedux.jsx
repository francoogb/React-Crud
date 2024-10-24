import { useSelector, useDispatch } from 'react-redux';
import { cambiarArgentina, cambiarBrasil, cambiarColombia, cambiarMexico, cambiarPeru, VolverChile } from './features/ProcedenciaSlice';
const EjemploRedux = () => {

    const procedencia = useSelector((state)=>state.procedencia)
  return (
    <>
      <h1>Redux Ejemplo </h1>
    <ul>
        <li>
            Pais : {procedencia.pais}
        </li>
        <li>
            Ciudad : {procedencia.ciudad}
        </li>
    </ul>
    </>
  )
}

export default EjemploRedux

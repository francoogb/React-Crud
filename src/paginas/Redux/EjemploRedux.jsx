import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons';
import {
  cambiarArgentina,
  cambiarBrasil,
  cambiarColombia,
  cambiarMexico,
  cambiarPeru,
  VolverChile,
} from "./features/ProcedenciaSlice";
import { dividir, multiplicar, restar, sumar } from "./features/CalculadoraSlice";
import { sumador } from "./features/LikeSlice";
import { iniciarSesion } from "./features/ParametrosSlice";


const EjemploRedux = () => {
  const procedencia = useSelector((state) => state.procedencia);
  const calculadora = useSelector((state) => state.calculadora);
  const parametros = useSelector((state) => state.parametros);

  const like = useSelector((state) => state.like);

  const dispatch = useDispatch();

  return (
    <>
      <h1>Redux Ejemplo</h1>
      <ul>
        <li>Pais: {procedencia.pais}</li>
        <li>Ciudad: {procedencia.ciudad}</li>
      </ul>
      <hr />

      <button className="btn btn-primary" onClick={() => dispatch(cambiarArgentina())}>
        Cambiar a Argentina
      </button>
      <hr />
      <button className="btn btn-info" onClick={() => dispatch(cambiarBrasil())}>
        Cambiar a Brasil
      </button>
      <hr />
      <button className="btn btn-warning" onClick={() => dispatch(cambiarColombia())}>
        Cambiar a Colombia
      </button>
      <hr />
      <button className="btn btn-danger" onClick={() => dispatch(cambiarMexico())}>
        Cambiar a México
      </button>
      <hr />
      <button className="btn btn-secondary" onClick={() => dispatch(cambiarPeru())}>
        Cambiar a Perú
      </button>
      <hr />
      <button className="btn btn-dark" onClick={() => dispatch(VolverChile())}>
        Volver a Chile
      </button>

      <h1>Ejemplo 2 Redux</h1>
      <ul>
        <li>Numero1: {calculadora.numero1}</li>
        <li>Numero2: {calculadora.numero2}</li>
        <li>Resultado: {calculadora.resultado}</li>
      </ul>

      <div className="button-group">
        <button className="btn btn-success" onClick={() => dispatch(sumar())}>
          Sumar
        </button>
        <button className="btn btn-info" onClick={() => dispatch(restar())}>
          Restar
        </button>
        <button className="btn btn-primary" onClick={() => dispatch(multiplicar())}>
          Multiplicar
        </button>
        <button className="btn btn-warning" onClick={() => dispatch(dividir())}>
          Dividir
        </button>
      </div>
      <hr />

      <h1>Ejemplo 3 Redux</h1>
      <h3>Contador de Likes</h3>

      <p>
        <FontAwesomeIcon icon={faThumbsUp} /> Cantidad de Likes: {like.value}
      </p>      <button className="btn btn-dark" onClick={() => dispatch(sumador())}>
        Me Gusta
      </button>

      <hr/>

      <h3>Ejemplo con Parametros Iniciar Sesion</h3>
      <p>Nombre : {parametros.nombre}</p>
      <p>perfil : {parametros.perfil}</p>
      <p>perfil_id : {parametros.perfil_id}</p>
      <hr/>
      <button className="btn btn-primary" onClick={()=>{dispatch(iniciarSesion({nombre : "Frxngb", perfil_id:1, perfil : "Administrador"}))} }>Iniciar Sesion </button>


    </>
  );
};

export default EjemploRedux;

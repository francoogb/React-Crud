import { Link } from "react-router-dom";

const Hooks = () => {
  return (
    <>
      <h1>Hooks</h1>
      <ul>
        <li>
          <Link to="/hooks/eventos-click">Evento Click</Link>
        </li>
        <li>
          <Link to="/hooks/useState">UseState Hooks </Link>
        </li>
        <li>
          <Link to="/hooks/OnChange">OnChange Hooks </Link>
        </li>
        <li>
          <Link to="/hooks/EventosVarios">Eventos Varios </Link>
        </li>
        <li>
          <Link to="/hooks/use-effect">Hook useEffect </Link>
        </li>
        <li>
          <Link to="/hooks/Custom-Hooks">Custom Hooks </Link>
        </li>
        <li>
          <Link to="/hooks/Loader-Hooks">Loader Data Hooks </Link>
        </li>
        <li>
          <Link to="/hooks/Navigate-Hooks">Hooks UserNavigate </Link>
        </li>
        <li>
          <Link to="/hooks/UseReef-Hooks">Hooks UseLocation </Link>
        </li>
       
      </ul>
    </>
  );
};

export default Hooks;

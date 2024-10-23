import { Link } from "react-router-dom";

const Material = () => {
  return (
    <>
      <h1>Material UI</h1>
      <ul>
        <li>
          <Link to="/material/buttons">Material UI Buttons</Link>
        </li>
        <li>
          <Link to="/material/list">Material UI List</Link>
        </li>
        <li>
          <Link to="/material/drawer">Material UI Drawer</Link>
        </li>
        <li>
          <Link to="/material/tablas">Material UI Tablas ( Data Grid )</Link>
        </li>
        <li>
          <Link to="/material/acordion">Material UI Acordion </Link>
        </li>
        <li>
          <Link to="/material/stepper">Material UI Stepper </Link>
        </li>
        <li>
          <Link to="/material/tabs">Material UI Tabs </Link>
        </li>
        <li>
          <Link to="/material/dialog">Material UI Dialog </Link>
        </li>
        <li>
          <Link to="/material/cards">Material UI Card </Link>
        </li>
        <li>
          <Link to="/material/autocomplete">Material UI autocomplete </Link>
        </li>
        <li>
          <Link to="/material/date">Material UI Date ( FECHAS) </Link>
        </li>
      </ul>
    </>
  );
};

export default Material;

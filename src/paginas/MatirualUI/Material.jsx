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
       
     
     
       
      </ul>
   </>
  );
};

export default Material;

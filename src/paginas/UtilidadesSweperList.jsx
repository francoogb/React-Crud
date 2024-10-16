import {
  LeadingActions as SwipeLeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions as SwipeTrailingActions,
} from "react-swipeable-list";
import "react-swipeable-list/dist/styles.css"; // Asegúrate de importar los estilos
import { Link } from "react-router-dom";

const UtilidadesSweperList = () => {
  // Cambiamos el nombre de las funciones para evitar colisiones con los componentes importados
  const leadingActions = () => (
    <SwipeLeadingActions>
      <SwipeAction
        onClick={() => {
          console.log("Se ejecutó LeadingActions ");
        }}
      >
        <div className="alert alert-warning">Editar</div>
      </SwipeAction>
    </SwipeLeadingActions>
  );

  const trailingActions = () => (
    <SwipeTrailingActions>
      <SwipeAction
        onClick={() => console.info("Se ejecutó TrailingActions")}
        destructive={true}
      >
        <div className="alert alert-danger">Eliminar</div>
      </SwipeAction>
    </SwipeTrailingActions>
  );

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utilidades">Utiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Utiles Swipper List React
          </li>
        </ol>
      </nav>

      <h1>Swipeable List Demo</h1>

      {/* Aquí llamamos correctamente a las funciones leadingActions y trailingActions */}
      <SwipeableList>
        <SwipeableListItem
          leadingActions={leadingActions()}
          trailingActions={trailingActions()}
        >
          <div className="alert alert-success">
            Prueba utilizando Swipe List
          </div>
        </SwipeableListItem>
      </SwipeableList>
    </>
  );
};

export default UtilidadesSweperList;

import { Link } from "react-router-dom";

const Utiles = () => {
  return (
    <>
      <h1>Utilidades </h1>
      <ul>
        <li>
          <Link to="/utilidades/Dayjs">Utilidades DayJs</Link>
        </li>
        <li>
          {" "}
          <Link to="/utilidades/MomentsJs">Moments JS</Link>
        </li>
        <li>
          {" "}
          <Link to="/utilidades/SpinnerJS">Spinner React JS</Link>
        </li>
        <li>
          <Link to="/utilidades/SwipperList">SwipperList React JS</Link>
        </li>
        <li>
          <Link to="/utilidades/Webcam">Webcam React JS</Link>
        </li>
        <li>
          <Link to="/utilidades/Graficos">Chart JS</Link>
        </li>
        <li>
          <Link to="/utilidades/Mapas">Mapas React JS</Link>
        </li>
        <li>
        <Link to="/utilidades/Modal">Modal con Boostrap React JS</Link>
        </li>
        <li>
          <Link to="/utilidades/Carousel">Carousel con Boostrap React JS</Link>
        </li>
      </ul>
    </>
  );
};

export default Utiles;

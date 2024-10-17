import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import { imagenes } from "../datos/datos";
import "./../../public/css/carousel.css"
//https://react-bootstrap.netlify.app/docs/components/carousel

const UtilesCarrusel = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utilidades">Utiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Carrousel
          </li>
        </ol>
      </nav>
      <h1>Galeria de Imagenes </h1>
      <Carousel>
        {imagenes.map((imagen) => (
          <Carousel.Item key={imagen.id}>
            <img
              className="d-block w-100 img-carousel" // Clase personalizada para las imágenes
              src={imagen.imagen}
              alt={imagen.titulo}
            />
            <Carousel.Caption>
              <h3>{imagen.titulo}</h3>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </>
  );
};

export default UtilesCarrusel;

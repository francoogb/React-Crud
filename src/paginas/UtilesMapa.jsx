import { Link } from 'react-router-dom'

const UtilesMapa = () => {
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utilidades">Utiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
                Mapas Clasicos
          </li>
        </ol>
      </nav>

      <h1>Mapa Clasicos</h1>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d22522.59800543568!2d-71.53619763984227!3d-32.950897871054!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1ses!2scl!4v1729188085603!5m2!1ses!2scl" width="600" height="450"  allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    </>
  )
}

export default UtilesMapa

import { Link } from 'react-router-dom'
import setLocaleTo_ES_WithData from 'moment_spanish_locale' // npm i moment_spanish_locale  cargar español  //
import moment from "moment"
setLocaleTo_ES_WithData  (moment);

const UtilesMoments = () => {
    let fecha = new Date();
    moment.locale('es'); // establecer el idioma español

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/utilidades">Utiles</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Utiles Moments Js
                    </li>
                </ol>
            </nav>
            <h1> MomentsJS </h1>
            <h3>Formatear fechas</h3>
            <ul>
                <li>Fecha : {moment(fecha).format('dddd')} {moment(fecha).format('DD')} {moment(fecha).format('MMMM')} {moment(fecha).format('YYYY')}</li>
                <li>Fecha Corta : {moment(fecha).format('DD/MM/YYYY')}</li>
                <li>Fecha Cadena de texto : {moment(fecha).format('LLLL')}</li> {/* Ejemplo largo de fecha y hora */}
                <li>Fecha TimeStamp : {fecha.valueOf()}</li>

            </ul>
            <h3>Fecha Calculos</h3>
            <ul>
                <li>Fecha + 7 Días: {moment(fecha).add(7, 'days').format('DD/MM/YYYY')}</li>
                <li>Fecha - 7 Días: {moment(fecha).subtract(7, 'days').format('DD/MM/YYYY')}</li>
                <li>Fecha + 7 Meses: {moment(fecha).add(7, 'months').format('DD/MM/YYYY')}</li>
                <li>Fecha - 7 Meses: {moment(fecha).subtract(7, 'months').format('DD/MM/YYYY')}</li>
                <li>Fecha + 7 Años: {moment(fecha).add(7, 'years').format('DD/MM/YYYY')}</li>
                <li>Fecha - 7 Años: {moment(fecha).subtract(7, 'years').format('DD/MM/YYYY')}</li>
            </ul>
        </>
    )
}

export default UtilesMoments

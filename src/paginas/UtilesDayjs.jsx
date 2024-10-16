import React from 'react'
import { Link } from 'react-router-dom'
import dayjs from 'dayjs'
import 'dayjs/locale/es' // cargar español

const UtilesDayjs = () => {
    let fecha = new Date();
    dayjs.locale('es'); // establecer el idioma español

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/utilidades">Utiles</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Utiles DayJs
                    </li>
                </ol>
            </nav>
            <h1> Day js </h1>
            <hr/>
            <h3>Formatear fechas</h3>
            <ul>
                <li>Fecha : {fecha.toString()} </li>
                <li>Fecha : {dayjs(fecha).format('dddd')} {dayjs(fecha).format('DD')} {dayjs(fecha).format('MMMM')} {dayjs(fecha).format('YYYY')}</li>
                <li>Fecha Corta : {dayjs(fecha).format('DD/MM/YYYY')}</li>
                <li>Fecha TimeStamp : {fecha.valueOf()}</li>
            </ul>
            <h3>Fecha Calculos</h3>
            <ul>
                <li>Fecha + 7 Días: {dayjs(fecha).add(7, 'day').format('DD/MM/YYYY')}</li>
                <li>Fecha - 7 Días: {dayjs(fecha).subtract(7, 'day').format('DD/MM/YYYY')}</li>
                <li>Fecha + 7 Meses: {dayjs(fecha).add(7, 'month').format('DD/MM/YYYY')}</li>
                <li>Fecha - 7 Meses: {dayjs(fecha).subtract(7, 'month').format('DD/MM/YYYY')}</li>
                <li>Fecha + 7 Años: {dayjs(fecha).add(7, 'year').format('DD/MM/YYYY')}</li>
                <li>Fecha - 7 Años: {dayjs(fecha).subtract(7, 'year').format('DD/MM/YYYY')}</li>
            </ul>
        </>
    )
}

export default UtilesDayjs

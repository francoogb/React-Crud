import React from 'react'
import { Link } from 'react-router-dom'

const FetchComponent = () => {
  return (
    <>
     
      <h1>Fetch Component</h1>
      <ul>
        <li>
          <Link to="/fetch/categorias">Categorias</Link>
        </li>
        <li>
          <Link to="/fetch/productos/1">Productos</Link>
        </li>
      </ul>
    </>
  )
}

export default FetchComponent

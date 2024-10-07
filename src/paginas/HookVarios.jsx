import { Link } from 'react-router-dom'


const HookVarios = () => {
 const move = ()=> {
    console.log("Se movio")
 }

 const salir = ()=> {console.log("Salimos")}

  return (
    <>
       <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/hooks">Hooks</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Hook Evento Varios
          </li>
        </ol>
      </nav>  
      <hr/>
      <img src='/public/images/athena1.png' onMouseMove={move} onMouseOut={salir} ></img>
    </>
  )
}

export default HookVarios

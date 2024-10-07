import { useRef, useState } from "react";
import { Link } from "react-router-dom";

const HookUseReef = () => {
    const [text, setText] = useState('');
    const inputReef = useRef();
    const colorReef = useRef(null);

    const imprimirValor = () => {
        setText(inputReef.current.value);
    };

    const cambiarColor = () => {
        colorReef.current.className = "nuevo_estilo";
    };

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/hooks">Hooks</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Hook useRef
                    </li>
                </ol>
            </nav>
            <h3>Hook useRef </h3>
            <input className="form-control" ref={inputReef} placeholder="Escribe tu Nombre" />
            <hr/>
            <button className="btn btn-success" onClick={imprimirValor}>Mostrar</button>

            <hr/>
            <div className="clase_roja" ref={colorReef}>{text}</div> 

            <hr/>

            <button className="btn btn-primary ml-2" onClick={cambiarColor}>Cambiar Color</button>
        </>
    );
};

export default HookUseReef;

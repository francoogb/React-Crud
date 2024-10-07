import { useState } from 'react';
import { Link } from 'react-router-dom'
import { categorias, productos } from "../datos/datos";
import useHooksPersonalziado from '../Hooks/useHooksPersonalziado';

const CustomHook = () => {
    const [categoria, setCategoria] = useState(0);
    const [producto, setProducto] = useState(0);
    const [verduras, setVerduras] = useHooksPersonalziado();
    const handleDesplegar = (valor)=> {

        setCategoria(valor);

        if (valor == 0) {
            setVerduras([]);
        } else {
          setVerduras (productos.filter(prod=>prod.categoria_id === parseInt(valor)));  
        }

    }


    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/hooks">Hooks</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Hook useEffect
                    </li>
                </ol>
            </nav>
            <h3>Custom Hooks </h3>
            <div className='form-group'>
                <label htmlFor='categoria'>Categorias</label>
                <select value={categoria} onChange={(e)=>{ handleDesplegar(e.target.value) }} id='categoria' className='form-control'>
                    <option value="0">Seleccione</option>
                    {categorias.map((cat) => (
                        <option key={cat.id} value={cat.id}>{cat.nombre}</option>
                    ))}
                </select>
            </div>

            <div>
            <div className='form-group'>
            <label htmlFor='producto'>Productos</label>

            <select value={producto} onChange={(e)=> {setProducto(e.target.value)}} id='producto' className='form-control'>
            
                    <option value="0">Seleccione</option>
                    {verduras.map ((verdura)=> {
                       return  <option key={verdura.id} value={verdura.id}>
                        {verdura.nombre}

                        </option>
                    })}

            </select>


            </div>
  

            </div>

        
        </>
    )
}

export default CustomHook;

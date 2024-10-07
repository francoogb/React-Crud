import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
const FormulariosSimple = () => {
    const [formValues, setFormValues] = useState({ nombre: "", apellido: "", correo: "" });
    const [error, setError] = useState("");

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormValues({
            ...formValues,
            [name]: value,
        });
        setError(""); // Limpiar error al cambiar el valor
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Validación simple
        if (!formValues.nombre || !formValues.apellido || !formValues.correo) {
            setError("Por favor, completa todos los campos.");
            return;
        }
    
        // Muestra una alerta con los valores del formulario
        Swal.fire({
            icon: "success",
            title: "Información del formulario",
            html: `
                <p><strong>Nombre:</strong> ${formValues.nombre}</p>
                <p><strong>Apellido:</strong> ${formValues.apellido}</p>
                <p><strong>Correo:</strong> ${formValues.correo}</p>
            `,
        });
    
        // Registra los valores en la consola
        console.log("El nombre es: ", formValues.nombre);
        console.log("El apellido es: ", formValues.apellido);
        console.log("El correo es: ", formValues.correo);
    };
    

    return (
        <>
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <Link to="/formularios">Formularios</Link>
                    </li>
                    <li className="breadcrumb-item active" aria-current="page">
                        Formulario Simple
                    </li>
                </ol>
            </nav>

            <h3>Formulario Simple</h3>
            {error && <div className="alert alert-danger">{error}</div>} {/* Mensaje de error */}

            <form onSubmit={handleSubmit}>
                <div className='form-group'>
                    <label htmlFor='nombre'>Nombre</label>
                    <input
                        type='text'
                        id='nombre'
                        name='nombre'
                        className='form-control'
                        placeholder='Escribe tu nombre'
                        value={formValues.nombre}
                        onChange={handleChange}
                    />
                </div>

                <div className='form-group'>
                    <label htmlFor='apellido'>Apellido</label>
                    <input
                        type='text'
                        id='apellido'
                        name='apellido'
                        className='form-control'
                        placeholder='Escribe tu apellido'
                        value={formValues.apellido}
                        onChange={handleChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='correo'>Correo</label>
                    <input
                        type='email'
                        id='correo'
                        name='correo'
                        className='form-control'
                        placeholder='Escribe tu correo'
                        value={formValues.correo}
                        onChange={handleChange}
                    />
                </div>
                <hr />
                <button type='submit' className='btn btn-success'>
                    Enviar
                </button>
            </form>
        </>
    );
}

export default FormulariosSimple;

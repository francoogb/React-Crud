import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from "sweetalert2";

const FormulariosReactHookForm = () => {
  const { register, formState: { errors }, handleSubmit } = useForm();

  function onSubmit(values) {
    Swal.fire({
        icon: "success",
        title: "¡Éxito!",
        text: "Tu formulario se ha enviado correctamente.",
        footer: `Correo Electrónico: <strong>${values.correo}</strong><br>Contraseña: <strong>${values.password}</strong>`,
        confirmButtonText: "Aceptar",
      });
  }

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Formulario con libreria React Hook Form
          </li>
        </ol>
      </nav>

      <div className="container mt-5">
        <h3>Formulario con libreria React Hook Form</h3>

        {/* Muestra errores aquí */}
        {Object.keys(errors).length > 0 && (
          <div className="alert alert-danger">
            <ul>
              {errors.correo && <li>{errors.correo.message}</li>}
              {errors.password && <li>{errors.password.message}</li>}
            </ul>
          </div>
        )}

        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="form-group">
            <label htmlFor="correo" className="font-weight-bold">Correo Electrónico</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-envelope"></i>
                </span>
              </div>
              <input
                type="email"
                id="correo"
                name="correo"
                className="form-control" 
                {...register("correo", {
                  required: "El campo correo es obligatorio",
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: "El correo ingresado no es valido"
                  }
                })}
                placeholder="Ingresa tu correo" 
              />
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="font-weight-bold">Contraseña</label>
            <div className="input-group mb-3">
              <div className="input-group-prepend">
                <span className="input-group-text">
                  <i className="fas fa-lock"></i>
                </span>
              </div>
              <input
                type="password"
                id="password"
                name="password"
                className="form-control" 
                {...register("password", {
                  required: "El campo contraseña es obligatorio",
                  pattern: {
                    value: /^(?=.*[A-Z])(?=.*[#?!@$%^&*])[A-Za-z\d#!$%&'*+/=?^_`{|}~.#]{6,20}$/,
                    message: "La contraseña debe tener entre 6 y 20 caracteres, incluir al menos una letra mayúscula y un carácter especial"
                  }
                })}
                placeholder="Ingresa tu contraseña"
              />
            </div>
          </div>

          <button className="btn btn-primary btn-block" type="submit">
            <i className="fas fa-paper-plane"></i> Enviar
          </button>
        </form>
      </div>
    </>
  );
}

export default FormulariosReactHookForm;

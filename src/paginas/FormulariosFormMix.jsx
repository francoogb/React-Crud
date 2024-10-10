import { Link } from "react-router-dom";
import { useFormik } from "formik";
import Swal from "sweetalert2";

const FormulariosFormMix = () => {
  const { handleSubmit, handleChange, values } = useFormik({
    initialValues: {
      correo: "",
      password: "",
    },
    onSubmit: async function (values) {
      let mensaje = [];

      // Validación del correo
      const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!values.correo) {
        mensaje.push("<li> El campo correo es obligatorio </li>");
      } else if (!regexEmail.test(values.correo)) {
        mensaje.push("<li> Por favor, ingresa un correo electrónico válido. </li>");
      }

      // Validación de la contraseña
      if (!values.password) {
        mensaje.push("<li> El campo contraseña es obligatorio </li>");
      } else {
        const regex = /^(?=.*[A-Z])(?=.*[#?!@$%^&*])[A-Za-z\d#!$%&'*+/=?^_`{|}~.#]{6,20}$/;
        if (!regex.test(values.password)) {
          mensaje.push("<li> La contraseña debe tener entre 6 y 20 caracteres, incluir al menos una letra mayúscula y un carácter especial.</li>");
        }
      }

      // Mostrar mensajes según validación
      if (mensaje.length === 0) {
        Swal.fire({
          icon: "success",
          title: "OK",
          text: `E-Mail: ${values.correo} | Contraseña: ${values.password}`,
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Ups",
          html: `<ul>${mensaje.join("")}</ul>`,
        });
      }
    },
  });

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Formulario con useFormik
          </li>
        </ol>
      </nav>

      <div className="container mt-5">
        <h3 className="text-center mb-4">Formulario con useFormik</h3>
        <form onSubmit={handleSubmit} noValidate>
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
                placeholder="Ingresa tu correo"
                onChange={handleChange}
                value={values.correo}
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
                placeholder="Ingresa tu contraseña"
                onChange={handleChange}
                value={values.password}
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
};

export default FormulariosFormMix;

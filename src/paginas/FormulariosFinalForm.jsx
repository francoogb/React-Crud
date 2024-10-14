import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { Form, Field } from "react-final-form";

// Expresión regular para validar correo electrónico
const mailValido = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Validaciones
const validateEmail = (value) => {
  if (!value) return "Este campo es obligatorio";
  if (!mailValido.test(value)) return "E-mail no es válido";
  return undefined;
};

const password = (value) => {
  if (!value) return "Este campo es obligatorio";
  if (value.length < 8) return "La contraseña debe tener al menos 8 caracteres";
  if (!/[A-Z]/.test(value))
    return "La contraseña debe contener al menos una letra mayúscula";
  if (!/[a-z]/.test(value))
    return "La contraseña debe contener al menos una letra minúscula";
  if (!/[0-9]/.test(value))
    return "La contraseña debe contener al menos un número";
  if (!/[!@#$%^&*]/.test(value))
    return "La contraseña debe contener al menos un carácter especial";
  return undefined;
};

const FormulariosFinalForm = () => {
  const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  const onSubmit = async (values) => {
    await sleep(300);
    Swal.fire(
      "Formulario enviado!",
      JSON.stringify(values, null, 2),
      "success"
    );
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            React Hook Form
          </li>
        </ol>
      </nav>
      <h3 className="mb-4">Formulario Final Form</h3>

      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit, form, submitting, pristine }) => (
          <form
            onSubmit={handleSubmit}
            className="p-4 border rounded shadow-sm"
          >
            <div className="mb-3">
              <Field name="email" validate={validateEmail}>
                {({ input, meta }) => (
                  <div className="form-group">
                    <label htmlFor="email" className="form-label">
                      E-mail
                    </label>
                    <input
                      {...input}
                      type="text"
                      className="form-control"
                      placeholder="Escribe tu E-mail"
                      style={{ height: "45px", fontSize: "14px" }} // Ajuste del tamaño del input
                    />
                    {meta.error && meta.touched && (
                      <span className="text-danger mt-1">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </div>

            <div className="mb-3">
              <Field name="password" validate={password}>
                {({ input, meta }) => (
                  <div className="form-group">
                    <label htmlFor="password" className="form-label">
                      Contraseña
                    </label>
                    <input
                      {...input}
                      type="password"
                      className="form-control"
                      placeholder="Escribe tu contraseña"
                      style={{ height: "45px", fontSize: "14px" }} // Ajuste del tamaño del input
                    />
                    {meta.error && meta.touched && (
                      <span className="text-danger mt-1">{meta.error}</span>
                    )}
                  </div>
                )}
              </Field>
            </div>
            <hr />

              <div className="d-flex ">
                <button
                  type="submit"
                  className="btn btn-primary btn-sm" // Clase btn-sm para hacer el botón más pequeño
                  disabled={submitting || pristine}
                  style={{
                    marginRight: "10px",
                    padding: "10px 20px", // Aumenta el padding para un botón más cómodo
                    borderRadius: "5px", // Bordes redondeados
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Sombra sutil para profundidad
                    transition: "background-color 0.3s, transform 0.3s", // Transiciones suaves
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#0056b3"; // Cambio de color al pasar el mouse
                    e.currentTarget.style.transform = "scale(1.05)"; // Aumento al pasar el mouse
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = ""; // Restaurar color
                    e.currentTarget.style.transform = ""; // Restaurar tamaño
                  }}
                >
                  Enviar
                </button>

                <button
                  type="button"
                  className="btn btn-secondary btn-sm" // Clase btn-sm para hacer el botón más pequeño
                  onClick={form.reset}
                  disabled={submitting}
                  style={{
                    padding: "10px 20px", // Aumenta el padding para un botón más cómodo
                    borderRadius: "5px", // Bordes redondeados
                    boxShadow: "0 2px 5px rgba(0, 0, 0, 0.1)", // Sombra sutil para profundidad
                    transition: "background-color 0.3s, transform 0.3s", // Transiciones suaves
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = "#6c757d"; // Cambio de color al pasar el mouse
                    e.currentTarget.style.transform = "scale(1.05)"; // Aumento al pasar el mouse
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = ""; // Restaurar color
                    e.currentTarget.style.transform = ""; // Restaurar tamaño
                  }}
                >
                  Restablecer
                </button>
              </div>
          </form>
        )}
      />
    </>
  );
};

export default FormulariosFinalForm;

import { Form, Link, useActionData } from "react-router-dom";
import Swal from "sweetalert2";
import { categorias, productos, atributos } from "../datos/datos";
import { useState } from "react";
import Validaciones from "../Validaciones";

export async function action({ request }) {
  const formData = await request.formData();
  const datos = Object.fromEntries(formData);
  let errores = [];

  if (formData.get("categoria") === "0") {
    errores.push("Debe seleccionar al menos una categoría.");
  }

  if (Object.values(datos).includes("")) {
    errores.push("Todos los campos son obligatorios.");
  }

  let expresion_precio = /^[0-9]+(\.[0-9]{1,2})?$/; // Valida formato de precio

  if (!expresion_precio.test(formData.get("precio"))) {
    errores.push("El precio solo acepta números válidos.");
  }

  if (errores.length > 0) {
    return errores;
  }

  /* Recibir Checkbox Dinámicos */
  let arreglo = [];
  let mensaje_arreglo = atributos
    .filter((atributo) => formData.get("atributo_" + atributo.id) != null)
    .map((atributo) => {
      arreglo.push(atributo.id);
      return atributo.nombre;
    })
    .join(", ");

  await Swal.fire({
    icon: "success",
    title: "Ok",
    text: `El nombre es ${datos.nombre} | Producto Peligroso: ${datos.sustancias_peligrosas}, Atributos: ${mensaje_arreglo}`,
  });

  return null;
}

const FormularioUserActionData = () => {
  const [sustanciasPeligrosas, setPeligroso] = useState(false);
  const handlePeligroso = () => {
    setPeligroso(!sustanciasPeligrosas);
  };

  const [name, setName] = useState("");
  async function handleBlur(name) {
    if (name === "frxngb") {
      Swal.fire({
        icon: "error",
        title: "Ops",
        text: "El nombre no está disponible.",
      });
      setName(''); // Asegúrate de usar setName
    }
  }

  const errores = useActionData();
  console.log(errores);
  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Formulario con UserActionData
          </li>
        </ol>
      </nav>
      <h3>Formulario con UserActionData</h3>

      <Form
        method="post"
        className="container mt-5 p-4 border rounded-3 shadow-sm bg-light"
        style={{ maxWidth: "600px" }}
        noValidate
      >
        <h4 className="mb-4 text-center">Formulario de Producto</h4>
        {errores?.length > 0 && <Validaciones errores={errores} />}

        <div className="form-group mb-3">
          <label htmlFor="categoria" className="form-label">
            Categoría
          </label>
          <select id="categoria" name="categoria" className="form-select">
            <option value="0">Seleccione una categoría ...</option>
            {categorias.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.nombre}
              </option>
            ))}
          </select>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="nombre" className="form-label">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className="form-control"
            placeholder="Escribe el nombre del producto"
            value={name}
            onChange={(e) => { setName(e.target.value); }}
            onBlur={(e) => { handleBlur(e.target.value); }}
          />
        </div>

        <div className="form-group mb-3">
          <label htmlFor="precio" className="form-label">
            Precio
          </label>
          <input
            type="number"
            id="precio"
            name="precio"
            className="form-control"
            placeholder="Escribe el precio"
            step="0.01"
            min="0"
          />
        </div>

        <div className="form-group mb-3">
          <label className="form-label d-block">Destacado</label>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              id="destacado_si"
              name="destacado"
              value="si"
              className="form-check-input"
            />
            <label htmlFor="destacado_si" className="form-check-label">
              Sí
            </label>
          </div>
          <div className="form-check form-check-inline">
            <input
              type="radio"
              id="destacado_no"
              name="destacado"
              value="no"
              className="form-check-input"
            />
            <label htmlFor="destacado_no" className="form-check-label">
              No
            </label>
          </div>
        </div>

        <div className="form-group mb-3">
          <label htmlFor="descripcion" className="form-label">
            Descripción
          </label>
          <textarea
            id="descripcion"
            name="descripcion"
            className="form-control"
            placeholder="Escribe una descripción del producto"
            rows="4"
          ></textarea>
        </div>

        <div className="form-group mb-4">
          <div className="form-check">
            <input
              type="checkbox"
              id="sustancias_peligrosas"
              name="sustancias_peligrosas"
              className="form-check-input"
              checked={sustanciasPeligrosas}
              onChange={handlePeligroso}
            />
            <label className="form-check-label" htmlFor="sustancias_peligrosas">
              Contiene sustancias peligrosas
            </label>
          </div>
        </div>

        <hr />
        <div className="form-group mb-4">
          <label className="form-label">Atributos</label>
          {atributos.map((atributo) => (
            <div key={atributo.id} className="form-check">
              <input
                type="checkbox"
                id={`atributo_${atributo.id}`}
                name={`atributo_${atributo.id}`}
                value={atributo.id}
                className="form-check-input"
              />
              <label
                htmlFor={`atributo_${atributo.id}`}
                className="form-check-label"
              >
                {atributo.nombre}
              </label>
            </div>
          ))}
        </div>
        <div className="text-left">
          <button type="submit" className="btn btn-success px-5">
            Enviar
          </button>
        </div>
      </Form>
    </>
  );
};

export default FormularioUserActionData;

import React, { useState } from "react";
import { Form, Link } from "react-router-dom";
import { pais as paisesData, ciudades as ciudadesData } from "../datos/datos";
import useHookContinente from "../Hooks/useHookContinente";

const FormularioPractica = () => {
  const [paises, setPaises] = useState(0);
  const [ciudades, setCiudades] = useState(0);
  const [continente, setContinente] = useHookContinente();

  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [camposVacios, setCamposVacios] = useState({});
  const [jugadores, setJugadores] = useState([]);

  const handleDesplegar = (valor) => {
    setPaises(valor);
    if (valor === "0") {
      setContinente([]);
      setCiudades(0);
    } else {
      const ciudadesFiltradas = ciudadesData.filter(
        (ciudad) => ciudad.pais_id === parseInt(valor)
      );
      setContinente(ciudadesFiltradas);
      setCiudades(0);
    }
  };

  const validarMaxJugadoresEquipo = () => {
    if (jugadores.length >= 11) {
      return "El máximo de jugadores por equipo es 11";
    }
    return null;
  };

  const validarEdadConRegex = (edad) => {
    const regex = /^\d+$/;

    if (!edad) {
      return "La edad es obligatoria.";
    }

    if (!regex.test(edad)) {
      return "La edad debe ser un número entero positivo.";
    }

    const edadNumero = Number(edad);

    if (edadNumero < 0 || edadNumero > 120) {
      return "La edad debe estar entre 0 y 120.";
    }

    return null;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const vacios = {};
    if (!nombre) vacios.nombre = "El nombre es obligatorio.";
    if (!apellido) vacios.apellido = "El apellido es obligatorio.";
    const edadError = validarEdadConRegex(edad);
    if (edadError) vacios.edad = edadError;
    if (paises === 0) vacios.pais = "Debes seleccionar un país.";
    if (ciudades === 0) vacios.ciudad = "Debes seleccionar una ciudad.";

    const maxJugadoresError = validarMaxJugadoresEquipo();
    if (maxJugadoresError) {
      vacios.maxJugadores = maxJugadoresError;
    }

    setCamposVacios(vacios);

    if (Object.keys(vacios).length > 0) {
      return;
    }

    const paisSeleccionado = paisesData.find(
      (pais) => pais.id === parseInt(paises)
    );
    const ciudadSeleccionada = ciudadesData.find(
      (ciudad) => ciudad.id === parseInt(ciudades)
    );

    const nuevoJugador = {
      nombre,
      apellido,
      edad,
      pais: paisSeleccionado ? paisSeleccionado.nombre : "No seleccionado",
      ciudad: ciudadSeleccionada ? ciudadSeleccionada.nombre : "No seleccionado",
    };

    setJugadores([...jugadores, nuevoJugador]);

    setNombre("");
    setApellido("");
    setEdad("");
    setPaises(0);
    setCiudades(0);
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb bg-light p-3 rounded">
          <li className="breadcrumb-item">
            <Link to="/formularios">Formularios</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Formulario Práctica
          </li>
        </ol>
      </nav>

      <div className="container mt-4">
        <h3 className="mb-4 text-center">Crear tu Equipo</h3>

        <div className="d-flex justify-content-between">
          <Form
            method="POST"
            noValidate
            onSubmit={handleSubmit}
            className="shadow p-4 bg-light rounded w-50"
          >
            <div className="form-group mb-3">
              <label htmlFor="nombre" className="form-label">
                Nombre del Jugador
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                className={`form-control ${camposVacios.nombre ? "is-invalid" : ""}`}
                placeholder="Escribe el nombre del Jugador"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
              {camposVacios.nombre && (
                <div className="invalid-feedback">{camposVacios.nombre}</div>
              )}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="apellido" className="form-label">
                Apellido del Jugador
              </label>
              <input
                type="text"
                id="apellido"
                name="apellido"
                className={`form-control ${camposVacios.apellido ? "is-invalid" : ""}`}
                placeholder="Escribe el apellido del Jugador"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
              {camposVacios.apellido && (
                <div className="invalid-feedback">{camposVacios.apellido}</div>
              )}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="edad" className="form-label">
                Edad
              </label>
              <input
                type="number"
                id="edad"
                name="edad"
                className={`form-control ${camposVacios.edad ? "is-invalid" : ""}`}
                placeholder="Escribe la edad"
                min="0"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
              {camposVacios.edad && (
                <div className="invalid-feedback">{camposVacios.edad}</div>
              )}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="paises" className="form-label">
                Países
              </label>
              <select
                id="paises"
                name="paises"
                className={`form-select ${camposVacios.pais ? "is-invalid" : ""}`}
                value={paises}
                onChange={(e) => handleDesplegar(e.target.value)}
              >
                <option value="0">Seleccione un País...</option>
                {paisesData.map((pais) => (
                  <option key={pais.id} value={pais.id}>
                    {pais.nombre}
                  </option>
                ))}
              </select>
              {camposVacios.pais && (
                <div className="invalid-feedback">{camposVacios.pais}</div>
              )}
            </div>

            <div className="form-group mb-3">
              <label htmlFor="ciudades" className="form-label">
                Ciudades
              </label>
              <select
                id="ciudades"
                name="ciudades"
                className={`form-select ${camposVacios.ciudad ? "is-invalid" : ""}`}
                value={ciudades}
                onChange={(e) => setCiudades(e.target.value)}
              >
                <option value="0">Seleccione una Ciudad...</option>
                {continente.map((ciudad) => (
                  <option key={ciudad.id} value={ciudad.id}>
                    {ciudad.nombre}
                  </option>
                ))}
              </select>
              {camposVacios.ciudad && (
                <div className="invalid-feedback">{camposVacios.ciudad}</div>
              )}
            </div>

            <button className="btn btn-primary w-100 rounded-3 shadow">
              Enviar
            </button>
          </Form>

          <div className="w-50 ms-3">
            <h3 className="mb-3 text-center">Jugadores Agregados ({jugadores.length})</h3>
            {camposVacios.maxJugadores && (
              <div className="text-danger mb-3 text-center">{camposVacios.maxJugadores}</div>
            )}
            {jugadores.length > 0 ? (
              <table className="table table-striped mt-3">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Edad</th>
                    <th>País</th>
                    <th>Ciudad</th>
                  </tr>
                </thead>
                <tbody>
                  {jugadores.map((jugador, index) => (
                    <tr key={index}>
                      <td>{jugador.nombre}</td>
                      <td>{jugador.apellido}</td>
                      <td>{jugador.edad}</td>
                      <td>{jugador.pais}</td>
                      <td>{jugador.ciudad}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            ) : (
              <div className="alert alert-info text-center mt-3">
                No hay jugadores agregados.
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default FormularioPractica;

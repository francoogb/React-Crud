import React, { useState } from "react";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import { countries } from "../../datos/datos";

const MaterialAutoComplete = () => {
  const [dato, setDato] = useState(null); // Inicializa dato como null

  // Función para manejar el envío del formulario
  const handleCampo = (e) => {
    e.preventDefault();
    alert(dato ? `Seleccionaste: ${dato.label}` : "No se seleccionó ningún país");
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/material">Material UI</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Material Autocomplete
          </li>
        </ol>
      </nav>
      <hr />

      <h3 className="mb-4">Material Autocomplete</h3>
      <form onSubmit={handleCampo}>
        <Autocomplete
          id="country-select-demo"
          sx={{ width: 300 }}
          options={countries}
          autoHighlight
          getOptionLabel={(option) => option.label}
          onChange={(event, newValue) => {
            setDato(newValue); // Actualiza el estado con el nuevo valor seleccionado
          }}
          renderOption={(props, option) => {
            return (
              <Box
                key={option.code}
                component="li"
                sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                {...props}
              >
                <img
                  loading="lazy"
                  width="20"
                  srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                  src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                  alt=""
                />
                {option.label} ({option.code}) +{option.phone}
              </Box>
            );
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Elige un Pais"
              slotProps={{
                htmlInput: {
                  ...params.inputProps,
                  autoComplete: "new-password", // deshabilitar autocompletado
                },
              }}
            />
          )}
        />
        <hr />
        <button type="submit" className="btn btn-success">Enviar</button>
      </form>
    </>
  );
};

export default MaterialAutoComplete;

import React from "react";
import { Link } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import PropTypes from "prop-types";

// Componente para los paneles de las pestañas
function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

// Definición de los tipos de propiedades que recibe CustomTabPanel
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

// Función para generar propiedades de accesibilidad de cada Tab
function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            {/* Enlace de navegación para volver a la sección de Material UI */}
            <Link to="/material">Material UI</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Material Tabs
          </li>
        </ol>
      </nav>
      <hr />

      {/* Título del componente Tabs */}
      <h3 className="mb-4">Material Tabs</h3>

      {/* Contenedor para las pestañas */}
      <Box sx={{ width: "100%" }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Item One" {...a11yProps(0)} />
          <Tab label="Item Two" {...a11yProps(1)} />
          <Tab label="Item Three" {...a11yProps(2)} />
        </Tabs>
        {/* Paneles de contenido de las pestañas */}
        <CustomTabPanel value={value} index={0}>
          Contenido de la Pestaña 1
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          Contenido de la Pestaña 2
        </CustomTabPanel>
        <CustomTabPanel value={value} index={2}>
          Contenido de la Pestaña 3
        </CustomTabPanel>
      </Box>
    </>
  );
}

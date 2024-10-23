import React, { useState } from "react"; // Importamos React y el hook useState para manejar el estado local.
import { Link } from "react-router-dom"; // Importamos Link para crear enlaces de navegación.
import Box from "@mui/material/Box"; // Importamos Box de Material UI, que es un contenedor flexible.
import Stepper from "@mui/material/Stepper"; // Importamos el componente Stepper para crear los pasos.
import Step from "@mui/material/Step"; // Importamos el componente Step, que representa un paso individual.
import StepLabel from "@mui/material/StepLabel"; // Importamos StepLabel para etiquetar los pasos.
import Button from "@mui/material/Button"; // Importamos Button para los botones de control (Siguiente, Atrás, etc.).
import Typography from "@mui/material/Typography"; // Importamos Typography para texto estilizado.

const MaterialStepper = () => {
  // Definimos un array con los nombres de los pasos.
  const steps = ["Paso1", "Paso2", "Paso3"]; 
  
  // Estado para controlar el paso activo en el que estamos actualmente.
  const [activeStep, setActiveStep] = useState(0); 

  // Estado para manejar los pasos que el usuario ha "saltado".
  const [skipped, setSkipped] = useState(new Set()); 

  // Función para verificar si un paso es opcional.
  const isStepOptional = (step) => {
    return step === 1; // Solo el paso 2 (índice 1) es opcional.
  };

  // Función para verificar si un paso ha sido saltado.
  const isStepSkipped = (step) => {
    return skipped.has(step); // Verifica si el paso está en el conjunto de pasos "saltados".
  };

  // Función que se ejecuta cuando el usuario hace clic en "Siguiente".
  const handleNext = () => {
    let newSkipped = skipped; // Creamos una copia del conjunto de pasos saltados.

    // Si el paso actual ha sido saltado, lo eliminamos del conjunto de "saltados".
    if (isStepSkipped(activeStep)) {
      newSkipped = new Set(newSkipped.values()); // Creamos un nuevo conjunto.
      newSkipped.delete(activeStep); // Eliminamos el paso actual de los saltados.
    }

    // Avanzamos al siguiente paso y actualizamos el conjunto de "saltados".
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped(newSkipped);
  };

  // Función que se ejecuta cuando el usuario hace clic en "Atrás".
  const handleBack = () => {
    // Retrocedemos un paso.
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  // Función para saltar un paso opcional.
  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
      // Si el paso no es opcional, lanzamos un error (esto no debería ocurrir normalmente).
      throw new Error("No puedes saltar un paso que no es opcional.");
    }

    // Avanzamos al siguiente paso y marcamos el actual como "saltado".
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setSkipped((prevSkipped) => {
      const newSkipped = new Set(prevSkipped.values());
      newSkipped.add(activeStep); // Agregamos el paso actual al conjunto de pasos "saltados".
      return newSkipped;
    });
  };

  // Función para reiniciar el stepper y volver al primer paso.
  const handleReset = () => {
    setActiveStep(0); // Volvemos el paso activo a 0.
  };

  return (
    <>
      {/* Sección de la navegación breadcrumb */}
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            {/* Enlace de navegación para volver a la sección de Material UI */}
            <Link to="/material">Material UI</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Material Stepper
          </li>
        </ol>
      </nav>
      <hr />

      {/* Título del componente Stepper */}
      <h3 className="mb-4">Material Stepper</h3>

      {/* Contenedor principal del Stepper */}
      <Box sx={{ width: "100%" }}>
        {/* Componente Stepper que gestiona los pasos */}
        <Stepper activeStep={activeStep}>
          {/* Iteramos sobre los nombres de los pasos */}
          {steps.map((label, index) => {
            const stepProps = {}; // Propiedades adicionales del paso.
            const labelProps = {}; // Propiedades adicionales de la etiqueta.

            // Si el paso es opcional, agregamos una etiqueta "Opcional".
            if (isStepOptional(index)) {
              labelProps.optional = (
                <Typography variant="caption">Opcional</Typography>
              );
            }

            // Si el paso ha sido saltado, lo marcamos como incompleto.
            if (isStepSkipped(index)) {
              stepProps.completed = false;
            }

            // Retornamos cada paso con su etiqueta.
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>

        {/* Si el usuario ha completado todos los pasos */}
        {activeStep === steps.length ? (
          <React.Fragment>
            {/* Mensaje que indica que todos los pasos están completos */}
            <Typography sx={{ mt: 2, mb: 1 }}>
              Todos los pasos completados - ¡Has terminado!
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* Botón para reiniciar el stepper */}
              <Button onClick={handleReset}>Reiniciar</Button>
            </Box>
          </React.Fragment>
        ) : (
          <React.Fragment>
            {/* Mensaje que indica en qué paso está el usuario */}
            <Typography sx={{ mt: 2, mb: 1 }}>Paso {activeStep + 1}</Typography>
            <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
              {/* Botón para retroceder, deshabilitado si estamos en el primer paso */}
              <Button
                color="inherit"
                disabled={activeStep === 0}
                onClick={handleBack}
                sx={{ mr: 1 }}
              >
                Atrás
              </Button>
              <Box sx={{ flex: "1 1 auto" }} />
              {/* Botón para saltar el paso si es opcional */}
              {isStepOptional(activeStep) && (
                <Button color="inherit" onClick={handleSkip} sx={{ mr: 1 }}>
                  Saltar
                </Button>
              )}
              {/* Botón para avanzar al siguiente paso o finalizar */}
              <Button onClick={handleNext}>
                {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
              </Button>
            </Box>
          </React.Fragment>
        )}
      </Box>
    </>
  );
};

export default MaterialStepper;

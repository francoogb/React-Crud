import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import TextField from "@mui/material/TextField";

const MaterialDialog = () => {
  // Estado para controlar la visibilidad del diálogo
  const [open, setOpen] = useState(false);

  // Función para abrir el diálogo
  const handleClickOpen = () => {
    setOpen(true);
  };

  // Función para cerrar el diálogo
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            {/* Enlace de navegación para volver a la sección de Material UI */}
            <Link to="/material">Material UI</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Material Dialog
          </li>
        </ol>
      </nav>
      <hr />

      {/* Título del componente Dialog */}
      <h3 className="mb-4">Material Dialog</h3>

      {/* Botón para abrir el diálogo */}
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>

      {/* Componente Dialog */}
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: (event) => {
            event.preventDefault();
            const formData = new FormData(event.currentTarget);
            const formJson = Object.fromEntries(formData.entries());
            const email = formJson.email;
            console.log(email); // Puedes reemplazar esto con el manejo real del formulario
            handleClose(); // Cierra el diálogo después de enviar el formulario
          },
        }}
      >
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates occasionally.
          </DialogContentText>

          {/* Campo de texto para el correo electrónico */}
          <TextField
            autoFocus
            required
            margin="dense"
            id="email" // Cambiado de "name" a "email" para mayor coherencia
            name="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>

        <DialogActions>
          {/* Botón de cancelar */}
          <Button onClick={handleClose}>Cancel</Button>
          {/* Botón de enviar */}
          <Button type="submit">Subscribe</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default MaterialDialog;

import React, { useState } from "react";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/es"; // cargar español
import { DesktopDatePicker } from "@mui/x-date-pickers/DesktopDatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { TextField } from "@mui/material";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import { styled } from '@mui/material/styles';
import IconButton from '@mui/material/IconButton';
import EditCalendarRoundedIcon from '@mui/icons-material/EditCalendarRounded';
import { PickersDay } from '@mui/x-date-pickers/PickersDay';

dayjs.locale("es"); // establecer el idioma español

// Estilo personalizado para el botón
const StyledButton = styled(IconButton)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
}));

// Estilo personalizado para los días en el calendario
const StyledDay = styled(PickersDay)(({ theme }) => ({
  borderRadius: theme.shape.borderRadius,
  color: theme.palette.secondary.light,
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
  "&.Mui-selected": {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
}));

const MaterialDate = () => {
  const [fecha, setFecha] = useState(dayjs());
  const [hora, setHora] = useState(dayjs());

  const handleFormulario = (e) => {
    e.preventDefault();
    alert(
      dayjs(fecha).format("DD/MM/YYYY") + " | " + dayjs(hora).format("H:mm")
    );
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/material">Material UI</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Material Date (Fechas)
          </li>
        </ol>
      </nav>
      <hr />

      <h3 className="mb-4">Material Fechas</h3>

      <form onSubmit={handleFormulario}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DesktopDatePicker
            className="form-control"
            label="Selecciona una fecha"
            value={fecha}
            onChange={(newValue) => setFecha(newValue)}
            renderInput={(params) => <TextField {...params} />}
            slots={{
              openPickerIcon: EditCalendarRoundedIcon,
              openPickerButton: StyledButton,
              day: StyledDay,
            }}
            slotProps={{
              openPickerIcon: { fontSize: 'large' },
              openPickerButton: { color: 'secondary' },
              textField: {
                variant: 'filled',
                focused: true,
                color: 'secondary',
              },
            }}
          />

          <TimePicker
            className="form-control mt-3"
            label="Selecciona una hora"
            value={hora}
            onChange={(newValue) => setHora(newValue)}
            renderInput={(params) => <TextField {...params} />}
            ampm // Esto activa el formato AM/PM
            views={["hours", "minutes"]} // Puedes limitar la selección a horas y minutos
          />
        </LocalizationProvider>

        <button type="submit" className="btn btn-success mt-3">
          Enviar
        </button>
      </form>
    </>
  );
};

export default MaterialDate;

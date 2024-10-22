import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import IconButton from "@mui/material/IconButton";
import HomeIcon from "@mui/icons-material/Home";
import SettingsIcon from "@mui/icons-material/Settings";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import SendIcon from "@mui/icons-material/Send";
import DownloadForOfflineIcon from '@mui/icons-material/DownloadForOffline';

const MaterialButtons = () => {
  return (
    <>
     <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/material">Material UI</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Material UI, Buttons, Icons y Stacks{" "}
          </li>
        </ol>
      </nav>
      <h3 className="mb-4">Material UI, Buttons, Icons y Stacks</h3>
      <hr />

      {/* Botones con diferentes variantes */}
      <Stack spacing={2} direction="row">
        <Button variant="text">Text</Button>
        <Button variant="contained">Contained</Button>
        <Button variant="outlined" href="#outlined-buttons">Link</Button>
      </Stack>
      <hr />

      {/* Botones con diferentes colores */}
      <Stack direction="row" spacing={2}>
        <Button color="secondary">Secondary</Button>
        <Button variant="contained" color="success">Success</Button>
        <Button variant="outlined" color="error">Error</Button>
      </Stack>
      <hr />

      {/* Botones con iconos */}
      <Stack direction="row" spacing={2}>
        <Button variant="contained" startIcon={<AddIcon />}>Add</Button>
        <Button variant="contained" startIcon={<DeleteIcon />} color="error">Delete</Button>
        <Button variant="contained" endIcon={<SendIcon />} color="primary">Send</Button>
      </Stack>
      <hr />

      {/* IconButtons: Botones solo con iconos */}
      <Stack direction="row" spacing={2}>
        <IconButton color="primary" aria-label="home">
          <HomeIcon />
        </IconButton>
        <IconButton color="secondary" aria-label="settings">
          <SettingsIcon />
        </IconButton>
        <IconButton color="error" aria-label="delete">
          <DeleteIcon />
        </IconButton>
        
      </Stack>
      <hr />

      <Stack spacing={2} direction="row">
      <Button
        variant="contained"
        startIcon={<DownloadForOfflineIcon />}
        color="primary"
        size="small"
        style={{ width: 'auto' }} // Evita que el botón se expanda
      >
        Download
      </Button>
      </Stack>
    </>

    </>
  );
};

export default MaterialButtons;

import { Link } from "react-router-dom";
import { useState } from "react";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { ListSubheader } from "@mui/material";
import InboxIcon from "@mui/icons-material/Inbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import StarBorder from '@mui/icons-material/StarBorder';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';

const MateriaList = () => {
  const [open, setOpen] = useState(false); // Inicializa como false

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen); // Alterna el estado de apertura
  };

  const handleMenuClick = (menu) => {
    alert(`Selected: ${menu}`); // Muestra el menú seleccionado
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/material">Material UI</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Material List
          </li>
        </ol>
      </nav>
      <hr />

      <h3 className="mb-4">Material List</h3>
      <List
        sx={{
          width: "100%",
          maxWidth: 360,
          bgcolor: "background.paper",
          border: "1px solid #ccc",
          borderRadius: "8px",
          boxShadow: 2,
          padding: 2,
          margin: "auto",
        }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader component="div" id="nested-list-subheader">
            Titulo u Encabezado
          </ListSubheader>
        }
      >
        <ListItemButton onClick={() => handleMenuClick("Enviar Email")}>
          <ListItemIcon>
            <SendIcon />
          </ListItemIcon>
          <ListItemText primary="Enviar Email" />
        </ListItemButton>

        <ListItemButton onClick={() => handleMenuClick("Borradores")}>
          <ListItemIcon>
            <DraftsIcon />
          </ListItemIcon>
          <ListItemText primary="Borradores" />
        </ListItemButton>

        <ListItemButton onClick={handleToggle}>
          <ListItemIcon>
            <InboxIcon />
          </ListItemIcon>
          <ListItemText primary="Inbox" />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuClick("Starred")}>
              <ListItemIcon>
                <StarBorder />
              </ListItemIcon>
              <ListItemText primary="Starred" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuClick("Sent Items")}>
              <ListItemIcon>
                <SendIcon />
              </ListItemIcon>
              <ListItemText primary="Sent Items" />
            </ListItemButton>
            <ListItemButton sx={{ pl: 4 }} onClick={() => handleMenuClick("Important")}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary="Important" />
            </ListItemButton>
       
          </List>
        </Collapse>
      </List>
    </>
  );
};

export default MateriaList;

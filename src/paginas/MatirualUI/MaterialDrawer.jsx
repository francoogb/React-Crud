import { Link } from "react-router-dom";
import { useState } from "react";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

const MaterialDrawer = () => {
  // Estado para controlar el estado del Drawer
  const [state, setState] = useState({
    left: false,
  });

  // Función para abrir y cerrar el Drawer
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ left: open });
  };

  // Función para renderizar el contenido de la lista del Drawer
  const list = () => (
    <Box
      sx={{ width: 250 }} // Ancho fijo para el Drawer
      role="presentation"
      onClick={toggleDrawer(false)} // Cierra el Drawer al hacer clic
      onKeyDown={toggleDrawer(false)} // Cierra el Drawer al presionar una tecla
    >
      <List>
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/material">Material UI</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Material Drawer
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Material Drawer</h3>
      <div>
        <Button onClick={toggleDrawer(true)}>
          Abrir
        </Button>
        <Drawer
          anchor="left" // Fija el Drawer a la izquierda
          open={state.left}
          onClose={toggleDrawer(false)}
        >
          {list()}
        </Drawer>
      </div>
    </>
  );
};

export default MaterialDrawer;

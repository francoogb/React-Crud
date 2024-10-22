import React from "react";
import { Link } from "react-router-dom";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Typography from "@mui/material/Typography";
import { styled } from "@mui/material/styles";

const StyledAccordionSummary = styled(AccordionSummary)(({ theme }) => ({
  backgroundColor: theme.palette.grey[200],
  '&.Mui-expanded': {
    backgroundColor: theme.palette.primary.light,
    color: theme.palette.common.white,
  },
}));

const MaterialAccordion = () => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpansion = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/material">Material UI</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Material Accordion
          </li>
        </ol>
      </nav>
      <hr />
      <h3>Material Accordion</h3>

      {/* Primer Acordeón */}
      <Accordion expanded={expanded === "panel1"} onChange={handleExpansion("panel1")}>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
          <Typography variant="h5">Buda Logo</Typography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <img src="/images/gran-buda-de-tailandia.png" alt="Gran Buda de Tailandia" style={{ width: "100px", height: "auto" }} />
          <Typography>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Segundo Acordeón */}
      <Accordion expanded={expanded === "panel2"} onChange={handleExpansion("panel2")}>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel2-content" id="panel2-header">
          <Typography variant="h5">Athena Of Greece</Typography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <img src="/images/athena1.png" alt="Athena de Grecia" style={{ width: "100px", height: "auto" }} />
          <Typography>
            Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Tercer Acordeón */}
      <Accordion expanded={expanded === "panel3"} onChange={handleExpansion("panel3")}>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel3-content" id="panel3-header">
          <Typography variant="h5">Logo GitHub</Typography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <img src="/images/personaje-github.png" alt="Logo GitHub" style={{ width: "100px", height: "auto" }} />
          <Typography>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
          </Typography>
        </AccordionDetails>
      </Accordion>

      {/* Cuarto Acordeón */}
      <Accordion expanded={expanded === "panel4"} onChange={handleExpansion("panel4")}>
        <StyledAccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel4-content" id="panel4-header">
          <Typography variant="h5">Emoticon Pensando</Typography>
        </StyledAccordionSummary>
        <AccordionDetails>
          <img src="/images/pensando3.png" alt="Emoticon Pensando" style={{ width: "100px", height: "auto" }} />
          <Typography>
            Curabitur sodales ligula in libero. Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default MaterialAccordion;

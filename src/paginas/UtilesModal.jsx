import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Asegúrate de importar el CSS de Bootstrap
import './../../public/css/UtilesModal.css'; // Importa un archivo CSS para estilos adicionales

const UtilesModal = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/utilidades">Utiles</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            Modal
          </li>
        </ol>
      </nav>

      <h1 className="mb-4 ">Modal</h1>
        <Button variant="primary"  onClick={handleShow}>
          Abrir Ventana Modal
        </Button>

        <Modal show={show} onHide={handleClose} centered className="modal-custom">
        <Modal.Header closeButton className="bg-primary text-white">
          <Modal.Title>Título del Modal</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-body">
          <h5>Información Importante</h5>
          <p>Este es un ejemplo de contenido del modal. Aquí puedes proporcionar información relevante o instrucciones para el usuario.</p>
          <p>Asegúrate de que el contenido sea claro y conciso.</p>
          <hr />
          <p>¿Tienes alguna pregunta? No dudes en contactarnos.</p>
        </Modal.Body>
        <Modal.Footer className="justify-content-between">
          <Button variant="secondary" onClick={handleClose} className="btn-custom">
            Cerrar
          </Button>
          <Button variant="primary" onClick={handleClose} className="btn-custom">
            Aceptar
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default UtilesModal;

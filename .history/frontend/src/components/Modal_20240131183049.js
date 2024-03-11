import {Button, Modal} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
function MyModal({children, show, handleClose, handleShow, flag = true, ti}) {
  return (
    <>
      {flag ? (
        <Button variant="primary" onClick={handleShow}>
          {/* add Post */}
        </Button>
      ) : (
        ""
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{children}</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default MyModal;

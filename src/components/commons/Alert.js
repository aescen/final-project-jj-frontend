import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Alert = ({
  title = 'Title',
  text = 'Text',
  show = false,
  handleShow,
  handleClose,
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Alert;

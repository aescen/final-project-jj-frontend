import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Confirm = ({
  title = 'Title',
  text = 'Text',
  show = false,
  handleShow,
  handleClose,
  handleConfirm,
}) => {
  return (
    <div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{text}</Modal.Body>
        <Modal.Footer>
          <Button variant='primary' onClick={handleConfirm}>
            Confirm
          </Button>
          <Button variant='secondary' onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Confirm;

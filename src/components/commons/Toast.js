import Modal from 'react-bootstrap/Modal';

const Toast = ({ text = 'Text', show = false }) => {
  return (
    <div>
      <Modal size='sm' show={show} className='text-center'>
        <Modal.Body>{text}</Modal.Body>
      </Modal>
    </div>
  );
};

export default Toast;

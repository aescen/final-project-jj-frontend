import Modal from 'react-bootstrap/Modal';
import Spinner from './Spinner';

const Toast = ({ text = 'Info', show, loading, centered = false }) => {
  return (
    <div>
      <Modal size='sm' show={show} className='text-center' centered={centered}>
        <Modal.Body>{loading ? <Spinner /> : text}</Modal.Body>
      </Modal>
    </div>
  );
};

export default Toast;

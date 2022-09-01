import { Alert, Modal, Button } from 'react-bootstrap';
import gopay from '../../../assets/gopay.png';
import paypal from '../../../assets/paypal.png';
import shopeepay from '../../../assets/shopeepay.png';

function EmoneyModal(props) {
  const { onChangePayment, onHide } = props;

  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <p>Choose your e-money</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <hr />
        <div style={{ textAlign: 'left' }}>
          <input
            type='radio'
            name='emoney'
            value='paypal'
            onChange={(ev) => onChangePayment(ev)}
          />
          &nbsp;&nbsp;
          <img src={paypal} height='24em' alt='paypal' />
        </div>
        <br />
        <div style={{ textAlign: 'left' }}>
          <input
            type='radio'
            name='emoney'
            value='gopay'
            onChange={(ev) => onChangePayment(ev)}
          />
          &nbsp;&nbsp;
          <img src={gopay} height='24em' alt='gopay' />
        </div>
        <br />
        <div style={{ textAlign: 'left' }}>
          <input
            type='radio'
            name='emoney'
            value='shopeepay'
            onChange={(ev) => onChangePayment(ev)}
          />
          &nbsp;&nbsp;
          <img src={shopeepay} height='24em' alt='shoppeepay' />
        </div>
        <hr />
        <Alert>
          In the next section we will redirect you to your checked payment to
          complete your payment.
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default EmoneyModal;

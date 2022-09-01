import { useState } from 'react';
import { Alert, Modal, Button, Form } from 'react-bootstrap';
import bca from '../../../assets/bca.jpg';
import bri from '../../../assets/bri.png';
import mandiri from '../../../assets/mandiri.jpg';

function VirtualBankModal(props) {
  const { onChangePayment, onHide } = props;
  const [iPayment, setIPayment] = useState(undefined);

  const onSelectChange = (ev) => {
    const option = ev.target.value;
    const ip =
      option === 'bca'
        ? bca
        : option === 'bri'
        ? bri
        : option === 'mandiri'
        ? mandiri
        : undefined;
    setIPayment(ip);
    onChangePayment(ev);
  };

  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <p>Choose your virtual bank</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <hr />
        <div className='container-fluid'>
          <div className='row align-items-center'>
            <div className='col'>
              <Form.Group className='mb-3'>
                <Form.Label>Choose bank</Form.Label>
                <Form.Select name='vbank' onChange={onSelectChange}>
                  ><option value='none'>Choose</option>
                  <option value='bca'>BCA</option>
                  <option value='bri'>BRI</option>
                  <option value='mandiri'>Mandiri</option>
                </Form.Select>
              </Form.Group>
            </div>
            {iPayment ? (
              <div className='col-3 pt-3'>
                <img src={iPayment} height='24em' alt='ipayment' />
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
        <hr />
        <Alert>
          In the next section we will give you virtual bank number for your
          payment transfer.
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default VirtualBankModal;

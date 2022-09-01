import { useState } from 'react';
import { Alert, Form, Modal, Button } from 'react-bootstrap';
import iCard from '../../../assets/visa-mastercard.png';
import Toast from '../../commons/Toast';

function CreditDebitModal(props) {
  const { onChangePayment, onHide } = props;
  const [card, setCard] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const onChangeCard = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;

    setCard({ ...card, [name]: value });
  };

  const onVerify = (ev) => {
    ev.target.name = 'ccdc';
    ev.target.value = 'card';
    ev.target.cardInfo = card;
    setIsLoading(true);
    setTimeout(() => {
      onChangePayment(ev);
      setIsLoading(false);
      onHide(ev);
    }, 1000);
  };

  return (
    <Modal {...props} aria-labelledby='contained-modal-title-vcenter' centered>
      <Modal.Header closeButton>
        <Modal.Title id='contained-modal-title-vcenter'>
          <p>Fill in the form</p>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Toast show={isLoading} loading={isLoading} centered={true}/>
        <hr />
        <div className='container-fluid'>
          <Form.Group className='mb-3'>
            <Form.Control
              type='number'
              name='cardNumber'
              placeholder='Card number'
              onChange={onChangeCard}
            />
          </Form.Group>
          <img src={iCard} height='24em' alt='icard' />
          <br />
          <div className='row'>
            <div className='col'>
              <Form.Label className='mt-3' for='expires'>
                Expires
              </Form.Label>
              <Form.Group className='mb-3' id='expires' name='expires'>
                <div className='row d-flex align-items-center'>
                  <div className='col'>
                    <Form.Control
                      type='number'
                      name='expiresMM'
                      placeholder='mm'
                      onChange={onChangeCard}
                    />
                  </div>
                  {'/'}
                  <div className='col'>
                    <Form.Control
                      type='number'
                      name='expiresDD'
                      placeholder='dd'
                      onChange={onChangeCard}
                    />
                  </div>
                </div>
              </Form.Group>
            </div>
            <div className='col'>
              <Form.Label className='mt-3' for='cvv'>
                CVV number
              </Form.Label>
              <Form.Group className='mb-3'>
                <Form.Control
                  type='number'
                  name='cvv'
                  placeholder='CVV'
                  onChange={onChangeCard}
                />
              </Form.Group>
            </div>
          </div>
        </div>
        <hr />
        <Alert>
          <div>
            By choosing this payment method you accept our&nbsp;
            <a href='#'>privacy policy</a>. We will automatically verify your
            card info (automatic system).
          </div>
        </Alert>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onVerify}>Verify</Button>
        <Button onClick={onHide}>Close</Button>
      </Modal.Footer>
    </Modal>
  );
}

export default CreditDebitModal;

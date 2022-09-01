import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductsHelper } from '../../../helpers';
import Toast from '../../commons/Toast';
import visamastercard from '../../../assets/visa-mastercard.png';

const PaymentCardDemo = (props) => {
  const { payment = '', onHide, handleConfirm } = props;
  const [isLoading, setIsLoading] = useState(false);

  const handlePay = (ev) => {
    setIsLoading(true);
    setTimeout(() => {
      onHide();
      setIsLoading(false);
      handleConfirm(ev);
    }, 1000);
  };

  return (
    <div className='d-flex justify-content-center'>
      <Modal
        {...props}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            Credit/Debit Card Payment
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Toast show={isLoading} loading={isLoading} centered={true} />
          <img
            className='mt-3'
            src={visamastercard}
            alt='ipayment'
            height='24em'
          />
          <Row className='fw-semibold mt-3'>
            <Col className='text-start'>
              <div>Card holder</div>
            </Col>
            <Col className='text-end'>
              <div>{payment.cardHolder}</div>
            </Col>
          </Row>
          <Row className='fw-semibold mt-3'>
            <Col className='text-start'>
              <div>Total:</div>
            </Col>
            <Col className='text-end'>
              <div>{ProductsHelper.toFormatted(payment.price)}</div>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Row>
            <Col>
              <Button
                className='btn btn-primary'
                onClick={onHide}
                style={{ width: '6em' }}
              >
                Close
              </Button>
            </Col>
            <Col>
              <Button
                className='btn btn-primary'
                onClick={handlePay}
                style={{ width: '6em' }}
              >
                Pay
              </Button>
            </Col>
          </Row>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default PaymentCardDemo;

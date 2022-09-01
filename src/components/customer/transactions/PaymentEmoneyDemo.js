import { useEffect, useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductsHelper } from '../../../helpers';
import paypal from '../../../assets/paypal.png';
import gopay from '../../../assets/gopay.png';
import shopeepay from '../../../assets/shopeepay.png';
import Toast from '../../commons/Toast';

const PaymentEmoneyDemo = (props) => {
  const [iPayment, setIPayment] = useState('');
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

  useEffect(() => {
    const ipay =
      payment.type === 'paypal'
        ? paypal
        : payment.type === 'gopay'
        ? gopay
        : payment.type === 'shopeepay'
        ? shopeepay
        : '';

    setIPayment(ipay);
  }, [payment]);
  return (
    <div className='d-flex justify-content-center'>
      <Modal
        {...props}
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id='contained-modal-title-vcenter'>
            {payment.type.toUpperCase()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Toast show={isLoading} loading={isLoading} centered={true} />
          <img className='mt-3' src={iPayment} alt='ipayment' height='24em' />
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

export default PaymentEmoneyDemo;

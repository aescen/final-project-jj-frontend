import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { ProductsHelper } from '../../../helpers';
import PaymentCardDemo from './PaymentCardDemo';
import visamastercard from '../../../assets/visa-mastercard.png';

const PaymentCard = ({ payment, handleConfirm }) => {
  const [showPayment, setShowPayment] = useState(false);

  console.log(payment);

  return (
    <div>
      <PaymentCardDemo
        show={showPayment}
        onHide={() => setShowPayment(false)}
        handleConfirm={handleConfirm}
        payment={payment}
      />

      <img className='mt-3' src={visamastercard} alt='ipayment' height='24em' />
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
          <div>Card number</div>
        </Col>
        <Col className='text-end'>
          <div>{payment.card.cardNumber}</div>
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
      <hr />
      <Row>
        <Col className='col-12'>
          <Button
            variant='primary'
            style={{ width: '100%' }}
            onClick={() => setShowPayment(true)}
          >
            Checkout
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default PaymentCard;

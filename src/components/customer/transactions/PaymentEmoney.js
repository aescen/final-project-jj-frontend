import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import paypal from '../../../assets/paypal.png';
import gopay from '../../../assets/gopay.png';
import shopeepay from '../../../assets/shopeepay.png';
import PaymentEmoneyDemo from './PaymentEmoneyDemo';

const PaymentEmoney = ({ payment, handleConfirm }) => {
  const [iPayment, setIPayment] = useState('');
  const [showPayment, setShowPayment] = useState(false);

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
    <div>
      <PaymentEmoneyDemo
        show={showPayment}
        onHide={() => setShowPayment(false)}
        handleConfirm={handleConfirm}
        payment={payment}
      />
      <img className='mt-3' src={iPayment} alt='ipayment' height='24em' />
      <br />
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

export default PaymentEmoney;

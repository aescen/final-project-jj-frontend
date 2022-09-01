import { useEffect, useState } from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Popover from 'react-bootstrap/Popover';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import PaymentCountdown from './PaymentCountdown';
import bca from '../../../assets/bca.jpg';
import bri from '../../../assets/bri.png';
import mandiri from '../../../assets/mandiri.jpg';

const copyToClipboard = (text) => {
  var dummy = document.createElement('textarea');
  document.body.appendChild(dummy);
  dummy.value = text;
  dummy.select();
  document.execCommand('copy');
  document.body.removeChild(dummy);
};

const PaymentVirtualBank = ({ payment, handleConfirm }) => {
  const [copiedShow, setCopiedShow] = useState(false);
  const [iPay, setIPay] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [cardNum] = useState('126 3248 9357 4726');
  const endTime = new Date().getTime() + 600000 * 24;
  const [timeLeft /*, setEndTime */] = PaymentCountdown(endTime);

  const hours = Math.floor(timeLeft / 600000) % 60;
  const minutes = Math.floor(timeLeft / 60000) % 60;
  const second = Math.floor(timeLeft / 1000) % 60;

  useEffect(() => {
    setIsLoading(true);
    const i =
      payment.type === 'bca'
        ? bca
        : payment.type === 'bri'
        ? bri
        : payment.type === 'mandiri'
        ? mandiri
        : '';
    setIPay(i);
    setIsLoading(false);
  }, [payment]);

  return (
    <div>
      {isLoading ? (
        <h3>Loading</h3>
      ) : (
        <>
          <Row className='fw-semibold'>
            <Col className='text-start'>
              <div>Payment Timeout</div>
            </Col>
            <Col className='text-end'>
              <div>
                <p>{`${hours}:${minutes}:${second}`}</p>
              </div>
            </Col>
          </Row>
          <div className='d-flex'>
            <div className='me-3'>
              <img src={iPay} alt='ipay' height='24em' />
            </div>
            <div className='fs-6'>
              <div>
                Bank {payment.type.toUpperCase()} (automatic verification)
              </div>
              <hr />
              <div>Bank number:</div>
              <Row>
                <Col className='col-10 fw-semibold text-warning'>{cardNum}</Col>
                <Col className='col-2'>
                  <OverlayTrigger
                    trigger='click'
                    placement='right'
                    show={copiedShow}
                    transition={false}
                    overlay={
                      <Popover id='popover-cardnum-copied'>
                        <Popover.Body>Copied.</Popover.Body>
                      </Popover>
                    }
                  >
                    <Button
                      variant='outlined-primary'
                      type='button'
                      className='fw-semibold text-info p-0'
                      onClick={() => {
                        setCopiedShow(true);
                        copyToClipboard(cardNum.replace(/ /g, ''));
                        setTimeout(() => {
                          setCopiedShow(false);
                        }, 1000);
                      }}
                    >
                      COPY
                    </Button>
                  </OverlayTrigger>
                </Col>
              </Row>
            </div>
          </div>
          <hr />
          <Row>
            <Col className='col-12'>
              <Alert>
                <div>
                  Please save the card number to transfer your payment. We will
                  automatically verify your transfer.
                </div>
              </Alert>
              <Button
                variant='primary'
                style={{ width: '100%' }}
                onClick={handleConfirm}
              >
                OK
              </Button>
            </Col>
          </Row>
        </>
      )}
    </div>
  );
};

export default PaymentVirtualBank;

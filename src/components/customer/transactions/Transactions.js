import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
import PaymentModal from './PaymentModal';
import bgPayments from '../../../assets/wave-down.svg';
import { ProductsHelper } from '../../../helpers';
import {
  QUICK_BUY,
  CURRENT_PRODUCT,
  TRANSACTION,
} from '../../../contexts/ContextConsts';

const Transactions = () => {
  const navigate = useNavigate();
  const [transactionForm, setTransactionForm] = useState({});
  const [product, setProduct] = useState({});
  const [payment, setPayment] = useState({ option: 'none', type: 'none' });
  const [isLoading, setIsLoading] = useState(true);

  const [modalShow, setModalShow] = useState(false);

  const handleCheckout = () => {
    transactionForm.paymentType = payment.option;
    transactionForm.paymentOptions = payment;
    sessionStorage.setItem(TRANSACTION, JSON.stringify(transactionForm));
    navigate('/confirm-transaction');
  };

  const handleSelectPayment = (ev) => {
    const option = ev.target.value;

    setPayment({
      ...payment,
      option,
    });

    setModalShow(true);
  };

  const onChangePayment = (ev) => {
    const option = ev.target.name;
    const type = ev.target.value;
    let card;

    if (ev.target.cardInfo) {
      card = ev.target.cardInfo;
    }

    setPayment({
      option,
      type,
      card,
    });
  };

  const onChangeTransaction = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;

    setTransactionForm({
      ...transactionForm,
      [name]: value,
    });
  };

  useEffect(() => {
    setIsLoading(true);
    const localQuickBuy = JSON.parse(sessionStorage.getItem(QUICK_BUY));
    const localCurrentProduct = JSON.parse(
      sessionStorage.getItem(CURRENT_PRODUCT),
    );

    if (localQuickBuy !== null) {
      setTransactionForm({ ...localQuickBuy });
    }

    if (localCurrentProduct !== null) {
      setProduct(localCurrentProduct);
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      className='min-vw-100 min-vh-100'
      style={{
        display: 'absolute',
        zIndex: -1,
        background: `url(${bgPayments}) no-repeat bottom`,
        backgroundSize: 'contain',
      }}
    >
      <div className='display-4 py-3'>Transaction</div>
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <PaymentModal
            show={modalShow}
            onHide={() => setModalShow(false)}
            onChangePayment={onChangePayment}
            payment={payment}
          />
          <Form className='container-fluid min-vw-100'>
            <Row>
              <Col sm={6} className='d-flex justify-content-center p-5'>
                <Card className='card text-start' style={{ width: '26em' }}>
                  <Card.Img
                    src={product.designPhotos[0]}
                    className='card-img-top img-fluid'
                  />
                  <Card.Body>
                    <Card.Title>Recipient Data</Card.Title>
                    <Form.Group className='mb-3' controlId='recipientName'>
                      <Form.Label>
                        Recipient Name<span className='text-danger'>*</span>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        name='recipientName'
                        placeholder='Enter recipient name'
                        onChange={onChangeTransaction}
                      />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='recipientEmail'>
                      <Form.Label>
                        Recipient Email<span className='text-danger'>*</span>
                      </Form.Label>
                      <Form.Control
                        type='text'
                        name='recipientEmail'
                        placeholder='Enter recipient email'
                        onChange={onChangeTransaction}
                      />
                    </Form.Group>
                    <Form.Group className='mb-3' controlId='recipientPhone'>
                      <Form.Label>Recipient Phone</Form.Label>
                      <Form.Control
                        type='text'
                        name='recipientPhone'
                        placeholder='Enter recipient phone'
                        onChange={onChangeTransaction}
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>
              </Col>
              <Col
                sm={6}
                className='d-flex flex-column justify-content-center p-5'
              >
                <Card
                  className='card text-dark text-start'
                  style={{ width: '26em' }}
                >
                  <Card.Header className='fw-bold'>Payment Type</Card.Header>
                  <Card.Body>
                    <Row>
                      <Col className='text-start'>
                        <div>
                          Current payment<span className='text-danger'>*</span>
                        </div>
                      </Col>
                      <Col className='text-end'>
                        <div className='fw-bold text-uppercase'>
                          {payment.type}
                        </div>
                      </Col>
                    </Row>
                    <Form.Group className='mb-3 text-start'>
                      <Form.Check
                        type='radio'
                        name='paymentType'
                        value='emoney'
                        label='E-money'
                        onClick={handleSelectPayment}
                        id={`payment-emoney`}
                      />
                      <Form.Check
                        type='radio'
                        name='paymentType'
                        value='vbank'
                        label='Virtual Bank'
                        onClick={handleSelectPayment}
                        id={`payment-vbank`}
                      />
                      <Form.Check
                        type='radio'
                        name='paymentType'
                        value='ccdc'
                        label='Credit/Debit Card'
                        onClick={handleSelectPayment}
                        id={`payment-ccdc`}
                      />
                    </Form.Group>
                  </Card.Body>
                </Card>
                <br />
                <br />
                <Card
                  className='card text-dark text-start'
                  style={{ width: '26em' }}
                >
                  <Card.Header className='fw-bold'>Summary</Card.Header>
                  <Card.Body>
                    <Row>
                      <Col className='text-start'>
                        <div>Product:</div>
                      </Col>
                      <Col className='text-end'>
                        <div>{product.productName}</div>
                      </Col>
                    </Row>
                    <Row>
                      <Col className='text-start'>
                        <div>Price:</div>
                      </Col>
                      <Col className='text-end'>
                        <div>
                          {ProductsHelper.toFormatted(product.productPrice)}
                        </div>
                      </Col>
                    </Row>
                    <hr />
                    <Row className='fw-semibold'>
                      <Col className='text-start'>
                        <div>Total:</div>
                      </Col>
                      <Col className='text-end'>
                        <div>
                          {ProductsHelper.toFormatted(product.productPrice)}
                        </div>
                      </Col>
                    </Row>
                    <Button
                      variant='primary'
                      id='checkout'
                      onClick={handleCheckout}
                    >
                      Checkout
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          </Form>
        </>
      )}
    </div>
  );
};

export default Transactions;

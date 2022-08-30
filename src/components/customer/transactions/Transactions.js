import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Card from 'react-bootstrap/Card';
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
  const [payment, setPayment] = useState({ type: 'none' });
  const [isLoading, setIsLoading] = useState(true);

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
      console.log(localCurrentProduct);
    }
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckout = () => {
    sessionStorage.setItem(TRANSACTION, JSON.stringify(transactionForm));
    navigate('/confirm-transaction');
  };

  const onChangeTransaction = (ev) => {
    const name = ev.target.name;
    const value = ev.target.value;

    setTransactionForm({
      ...transactionForm,
      [name]: value,
    });
  };

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
      <h3>Transaction</h3>
      <Form className='container-fluid min-vw-100'>
        {isLoading ? (
          <h3>Loading...</h3>
        ) : (
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
                    <Form.Label>Recipient Name</Form.Label>
                    <Form.Control
                      type='text'
                      name='recipientName'
                      placeholder='Enter recipient name'
                      onChange={onChangeTransaction}
                    />
                  </Form.Group>
                  <Form.Group className='mb-3' controlId='recipientEmail'>
                    <Form.Label>Recipient Email</Form.Label>
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
                      <p>Current payment:</p>
                    </Col>
                    <Col className='text-end'>
                      <p>{payment.type}</p>
                    </Col>
                  </Row>
                  <Form.Group
                    className='mb-3 text-start'
                    controlId='paymentType'
                  >
                    <Form.Check
                      type='radio'
                      name='paymentType'
                      value='emoney'
                      label='E-money'
                      id={`payment-emoney`}
                    />
                    <Form.Check
                      type='radio'
                      name='paymentType'
                      value='emoney'
                      label='Virtual Bank'
                      id={`payment-vbank`}
                    />
                    <Form.Check
                      type='radio'
                      name='paymentType'
                      value='ccdc'
                      label='Credit/Debit Card'
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
                  <Card.Text>
                    <Row>
                      <Col className='text-start'>
                        <p>Product:</p>
                      </Col>
                      <Col className='text-end'>
                        <p>{product.productName}</p>
                      </Col>
                    </Row>
                    <Row>
                      <Col className='text-start'>
                        <p>Price:</p>
                      </Col>
                      <Col className='text-end'>
                        <p>
                          {ProductsHelper.toFormatted(product.productPrice)}
                        </p>
                      </Col>
                    </Row>
                    <hr />
                    <Row className='fw-semibold'>
                      <Col className='text-start'>
                        <p>Total:</p>
                      </Col>
                      <Col className='text-end'>
                        <p>
                          {ProductsHelper.toFormatted(product.productPrice)}
                        </p>
                      </Col>
                    </Row>
                  </Card.Text>
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
        )}
      </Form>
    </div>
  );
};

export default Transactions;

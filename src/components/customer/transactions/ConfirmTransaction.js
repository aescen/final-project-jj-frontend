import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import { CURRENT_PRODUCT, TRANSACTION } from '../../../contexts/ContextConsts';
import { ProductsHelper, TransactionsHelper } from '../../../helpers';
import bgPayments from '../../../assets/wave-down.svg';
import PaymentVirtualBank from './PaymentVirtualBank';
import PaymentEmoney from './PaymentEmoney';
import PaymentCard from './PaymentCard';

const ConfirmTransaction = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [payment, setPayment] = useState({ option: '', type: '' });
  const [transaction, setTransaction] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    const localQuickBuy = JSON.parse(sessionStorage.getItem(TRANSACTION));
    const localCurrentProduct = JSON.parse(
      sessionStorage.getItem(CURRENT_PRODUCT),
    );

    if (localQuickBuy !== null && localCurrentProduct !== null) {
      setTransaction({ ...localQuickBuy });
      setProduct(localCurrentProduct);
      setPayment({
        ...localQuickBuy.paymentOptions,
        price: localCurrentProduct.productPrice,
        cardHolder: localQuickBuy.recipientName,
      });
    }

    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleConfirm = () => {
    TransactionsHelper.addTransaction(transaction);
    // sessionStorage.removeItem(TRANSACTION);
    // sessionStorage.removeItem(CURRENT_PRODUCT);

    const got = payment.option === 'vbank' ? '/' : '/transaction-status';
    navigate(got);
    // navigate('/transaction-status');
  };
  return (
    <div
      className='min-vw-100 min-vh-100'
      style={{

        background: `url(${bgPayments}) no-repeat bottom`,
        backgroundSize: 'contain',
      }}
    >
      <div className='display-5 py-5'>Confirm Transaction</div>

      <div className='container-fluid d-flex justify-content-center'>
        <Card className='card text-dark text-start' style={{ width: '26em' }}>
          <Card.Body>
            <Row className='fw-semibold'>
              <Col className='text-start'>
                <div className='fs-4'>Total:</div>
              </Col>
              <Col className='text-end'>
                <div className='fs-5'>
                  {ProductsHelper.toFormatted(product.productPrice)}
                </div>
              </Col>
            </Row>
            <hr />
            <div className='fw-semibold fs-5'>Payment</div>
            {isLoading ? (
              <h3>Loading</h3>
            ) : payment.option === 'emoney' ? (
              <PaymentEmoney payment={payment} handleConfirm={handleConfirm} />
            ) : payment.option === 'vbank' ? (
              <PaymentVirtualBank
                payment={payment}
                handleConfirm={handleConfirm}
              />
            ) : payment.option === 'ccdc' ? (
              <PaymentCard payment={payment} handleConfirm={handleConfirm} />
            ) : (
              ''
            )}
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ConfirmTransaction;

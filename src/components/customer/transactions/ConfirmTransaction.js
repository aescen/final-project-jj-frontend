import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { TRANSACTION } from '../../../contexts/ContextConsts';
import TransactionsHelper from './../../../helpers/TransactionsHelper';

const ConfirmTransaction = () => {
  const navigate = useNavigate();
  const [transactionForm, setTransactionForm] = useState({});

  useEffect(() => {
    const localQuickBuy = JSON.parse(sessionStorage.getItem(TRANSACTION));
    if (localQuickBuy !== null) {
      setTransactionForm({ ...localQuickBuy });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleConfirm = () => {
    console.log(transactionForm);
    const addedTransaction = TransactionsHelper.addTransaction(transactionForm);

    navigate('/transaction-status');
  };
  return (
    <div>
      <h1>Confirm Transaction</h1>
      <Row>
        <Col>
          <Button variant='primary' id='checkout' onClick={handleConfirm}>
            Checkout
          </Button>
        </Col>
      </Row>
    </div>
  );
};

export default ConfirmTransaction;

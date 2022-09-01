import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import bgPayments from '../../../assets/wave-down.svg';
import eStreet from '../../../assets/undraw_empty_street.svg';

const TransactionStatus = () => {
  const navigate = useNavigate();
  const handleOk = () => {
    navigate('/');
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
      <div className='display-5 py-5'>Transaction Success</div>

      <div className='container-fluid d-flex justify-content-center'>
        <Card className='card text-dark text-start' style={{ width: '26em' }}>
          <Card.Img variant='top' src={eStreet} />
          <Card.Body>
          <hr/>
            <h4>Thank You For Your Purchase!</h4>
            <br />
            <p>We will send you email with your choosen design shorlty...</p>
            <hr />
            <Button
              variant='primary'
              style={{ width: '100%' }}
              onClick={handleOk}
            >
              Go to home
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default TransactionStatus;

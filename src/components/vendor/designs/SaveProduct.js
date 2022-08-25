import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const SaveProduct = ({ handlePreview, handleResetForm, handleSaveProduct }) => {
  return (
    <div className='text-center'>
      <hr />
      <Row>
        <Col>
          <Button variant='secondary' type='button' onClick={handlePreview}>
            Preview
          </Button>
        </Col>
        <Col>
          <Button variant='secondary' type='reset' onClick={handleResetForm}>
            Reset
          </Button>
        </Col>
      </Row>
      <hr />
      <Button variant='primary' type='button' onClick={handleSaveProduct}>
        Add Product
      </Button>
    </div>
  );
};

export default SaveProduct;

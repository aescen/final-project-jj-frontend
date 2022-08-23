import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';

const SaveProduct = ({ handleSaveProduct }) => {
  return (
    <div className='text-center'>
      <hr />
      <Row>
        <Col>
          <Button variant='primary' type='button'>
            Preview
          </Button>
        </Col>
        <Col>
          <Button variant='primary' type='reset'>
            Reset
          </Button>
        </Col>
      </Row>
      <hr />
      <Button
        variant='primary'
        type='submit'
        onClick={(ev) => handleSaveProduct(ev)}
      >
        Add Product
      </Button>
    </div>
  );
};

export default SaveProduct;

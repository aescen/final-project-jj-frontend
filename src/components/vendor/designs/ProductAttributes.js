import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

const ProductAttributes = ({
  onChangeProductAttributes,
  handleAddFeature,
  productFeatures,
}) => {
  return (
    <div>
      <Form.Group className='mb-3' controlId='productName'>
        <Form.Label>Product name</Form.Label>
        <Form.Control
          type='text'
          name='productName'
          placeholder='Enter product name'
          onChange={onChangeProductAttributes}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='productCollection'>
        <Form.Label>Product collection</Form.Label>
        <Form.Select
          onChange={onChangeProductAttributes}
          name='productCollection'
        >
          <option>Choose</option>
          <option>Minimalis</option>
          <option>Modern</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3' controlId='productType'>
        <Form.Label>Product type</Form.Label>
        <Form.Select onChange={onChangeProductAttributes} name='productType'>
          <option>Choose</option>
          <option>Rumah</option>
          <option>Apartemen</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3' controlId='productDescription'>
        <Form.Label>Product description</Form.Label>
        <Form.Control
          as='textarea'
          name='productDescription'
          rows={3}
          onChange={onChangeProductAttributes}
        />
      </Form.Group>
      <InputGroup className='mb-3'>
        <Form.Control
          id='productFeatures'
          name='productFeatures'
          placeholder='Enter a feature'
          aria-label='Highlight product features'
          aria-describedby='button-add-feature'
          onChange={onChangeProductAttributes}
        />
        <Button
          variant='outline-secondary'
          id='button-add-feature'
          onClick={handleAddFeature}
        >
          Add
        </Button>
      </InputGroup>
      {productFeatures ? (
        <ul className='ps-3' style={{ listStylePosition: 'inside' }}>
          {productFeatures.map((item) => (
            <li>{item}</li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <Form.Group className='mb-3' controlId='productPrice'>
        <Form.Label>Product price</Form.Label>
        <Form.Control
          type='number'
          name='productPrice'
          placeholder='Enter product price'
          onChange={onChangeProductAttributes}
        />
      </Form.Group>
      <Form.Group className='mb-3' controlId='designFiles'>
        <Form.Label className='form-label'>
          Upload design files (zipped)
        </Form.Label>
        <Form.Control
          className='form-control'
          name='designFiles'
          type='file'
          accept='application/zip'
          onChange={onChangeProductAttributes}
        />
      </Form.Group>
    </div>
  );
};

export default ProductAttributes;

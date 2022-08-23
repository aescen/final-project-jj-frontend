import React from 'react';
import Form from 'react-bootstrap/Form';

const ProductOrganization = ({ onChangeProductOrganization }) => {
  return (
    <div>
      <Form.Group className='mb-3' controlId='productStatus'>
        <Form.Label>Product Status</Form.Label>
        <Form.Select
          onChange={onChangeProductOrganization}
          name='productStatus'
        >
          <option>Choose</option>
          <option>On Listing</option>
          <option>Off Listing</option>
        </Form.Select>
      </Form.Group>
      <Form.Group className='mb-3' controlId='productTags'>
        <Form.Label>Product tags</Form.Label>
        <Form.Control
          type='text'
          name='productTags'
          placeholder='Enter product tags'
          onChange={onChangeProductOrganization}
        />
      </Form.Group>
    </div>
  );
};

export default ProductOrganization;

import React from 'react';

const CollectionItem = ({ product }) => {
  return (
    <div className='col-md-4'>
      <div className='card crop-img'>
        <img
          src={product.designPhotos[0]}
          alt={product.productName}
          className='card-img-top'
          width='200'
          height='200'
        />
        <div className='card-body'>
          <h5 className='card-title'>{product.productName}</h5>
          <p className='card-text'>{product.productDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default CollectionItem;

import React from 'react';
import cs from '../../../assets/undraw_under_construction.svg';

const OrdersHistory = () => {
  return (
    <div
      className='min-vw-100 min-vh-100'
      style={{
        background: `url(${cs}) no-repeat bottom`,
        backgroundSize: 'contain',
      }}
    >
      <div className='fs-1 fw-semibold mt-5'>Orders History</div>
      <div className='fs-3 mt-5'>Coming soon</div>
    </div>
  );
};

export default OrdersHistory;

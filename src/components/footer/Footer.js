/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Footer = () => {
  return (
    <div className='container-fluid bg-dark'>
      <footer className='py-3'>
        <ul className='nav justify-content-center border-bottom pb-3 mb-3'>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              Home
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              Categories
            </a>
          </li>
          <li className='nav-item'>
            <a href='#' className='nav-link px-2 text-muted'>
              About
            </a>
          </li>
        </ul>
        <p className='text-center text-muted'>© 2022 Genius Architect</p>
      </footer>
    </div>
  );
};

export default Footer;

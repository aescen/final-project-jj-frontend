import React from 'react';
import './sidebar.css';
import Nav from 'react-bootstrap/Nav';

const Sidebar = () => {
  return (
    <div className='d-flex flex-wrap ps-md-3 pt-2 pt-sm-0 flex-sm-column justify-content-evenly justify-content-sm-start align-items-center align-items-md-start h-100 bg-dark text-light text-center text-md-start'>
      <Nav.Link className='nav-link px-3 pt-sm-4' href='/vendor-dashboard'>
        <h5 className='d-flex align-items-center'>
          <i className='bi-house' />
          <span className='ms-2 d-none d-md-inline'>Dashboard</span>
        </h5>
      </Nav.Link>
      <Nav.Link className='nav-link px-3' href='/vendor-collections'>
        <h5 className='d-flex align-items-center'>
          <i className='bi bi-collection-fill' />
          <span className='ms-2 d-none d-md-inline'>Collections</span>
        </h5>
      </Nav.Link>
      <Nav.Link className='nav-link px-3' href='/vendor-design-upload'>
        <h5 className='d-flex align-items-center'>
          <i className='bi bi-cloud-upload' />
          <div className='ms-2 d-none d-md-inline'>Upload Design</div>
        </h5>
      </Nav.Link>
      <Nav.Link className='nav-link px-3' href='/vendor-sales'>
        <h5 className='d-flex align-items-center'>
          <i className='bi bi-exclamation-circle' />
          <span className='ms-2 d-none d-md-inline'>Sales Report</span>
        </h5>
      </Nav.Link>
      <Nav.Link className='nav-link px-3' href='/vendor-settings'>
        <h5 className='d-flex align-items-center'>
          <i className='bi bi-gear-fill' />
          <span className='ms-2 d-none d-md-inline'>Settings</span>
        </h5>
      </Nav.Link>
    </div>
  );
};

export default Sidebar;

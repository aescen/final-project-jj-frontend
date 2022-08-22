import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "bootstrap-icons/font/bootstrap-icons.css";
import "./sidebar.css"
import { NavLink } from "react-router-dom";

const Sidebar = () => {

  return (
    <div className='container-fluid'>
      <div className='row'>
        <div className='col-auto min-vh-100 bg-dark text-light'>
          <ul>
            <br />
            <li>
              <NavLink className='nav-link px-3' to="/vendor-dashboard">
                <i className='bi-house' /><span className='ms-1 d-none d-sm-inline'>Dashboard</span>
              </NavLink>
            </li>
            <br />
            <br />
            <li>
              <NavLink className='nav-link px-3' to="/vendor-collections">
                <i className='bi bi-collection-fill' /><span className='ms-1 d-none d-sm-inline'>Collections</span>
              </NavLink>
            </li>
            <br />
            <br />

            <li>
              <NavLink className='nav-link px-3' to="/vendor-design-upload">
                <i className='bi bi-cloud-upload' /><span className='ms-1 d-none d-sm-inline'>upload Design</span>
              </NavLink>
            </li>
            <br />
            <br />
            <li>
              <NavLink className='nav-link px-3' to="/vendor-sales">
                <i className='bi bi-exclamation-circle' /><span className='ms-1 d-none d-sm-inline'>Sales Report</span>
              </NavLink>
            </li>
            <br />
            <br />
            <li>
              <NavLink className='nav-link px-3' to="/">
                <i className='bi bi-gear-fill' /><span className='ms-1 d-none d-sm-inline'>Settings</span>
              </NavLink>
            </li>
          </ul>

        </div>
      </div>
    </div>
  )
}

export default Sidebar
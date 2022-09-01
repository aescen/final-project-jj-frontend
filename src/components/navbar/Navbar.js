import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LinkContainer } from 'react-router-bootstrap'; // Bootstrap
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { default as NavBar } from 'react-bootstrap/NavBar';
import Avatar from 'react-avatar';
import { useAuth, useUser } from './../../contexts/Contexts';
import { LOGOUT, DELETE_USER } from './../../contexts/ContextConsts';
import Confirm from './../commons/Confirm';
import brandIcon from '../../assets/brand-icon.png';
import brandIconOnly from '../../assets/brand-icon-only.png';

import './nav.css';

const getUserAvatar = (user) => {
  return user.avatarUrl !== '' ? (
    <div className='align-items-center d-none d-lg-flex'>
      <img
        src={user.avatarUrl}
        width='2em'
        height='2em'
        alt='avatar'
        className='rounded-circle m-0 me-2'
      />
      <div className='pe-3 fs-5 fw-semibold'>{user.firstName}</div>
    </div>
  ) : (
    <div className='align-items-center d-none d-lg-flex'>
      <Avatar
        name={user.firstName + ' ' + user.lastName}
        size='2em'
        style={{}}
        className='rounded-circle m-0 me-2'
      />
      <div className='pe-3 fs-5 fw-semibold'>{user.firstName}</div>
    </div>
  );
};

const Navbar = () => {
  const { auth, dispatch } = useAuth();
  const { user = { role: '' }, userDispatch } = useUser();
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmTitle] = useState('Confirm logout');
  const [confirmText, setConfirmText] = useState('');
  const navigate = useNavigate();

  const handleLogout = () => {
    setConfirmText('Proceed to logout?');
    setShowConfirm(true);
  };
  const handleCloseConfirm = () => setShowConfirm(false);
  const handleShowConfirm = () => setShowConfirm(true);
  const handleConfirmConfirm = () => {
    dispatch({
      type: LOGOUT,
    });
    userDispatch({
      type: DELETE_USER,
    });
    setShowConfirm(false);
    navigate('/login');
  };
  return (
    <div id='navbar'>
      <Confirm
        show={showConfirm}
        title={confirmTitle}
        text={confirmText}
        handleShow={handleShowConfirm}
        handleClose={handleCloseConfirm}
        handleConfirm={handleConfirmConfirm}
      />
      <NavBar
        collapseOnSelect
        expand='lg'
        bg='light'
        variant='light'
        className='min-vw-100 shadow-sm'
        style={{ zIndex: '1 !important' }}
      >
        <Container fluid className='mx-5'>
          <LinkContainer to='/'>
            <NavBar.Brand className='nav-brand'>
              <img
                src={brandIcon}
                alt='brand-icon'
                height='32em'
                className='d-none d-sm-block'
              />
              <img
                src={brandIconOnly}
                alt='brand-icon-only'
                height='32em'
                className='d-block d-sm-none'
              />
            </NavBar.Brand>
          </LinkContainer>
          <NavBar.Toggle aria-controls='navbarScroll' />
          <NavBar.Collapse
            id='navbarScroll'
            className='justify-content-lg-between'
          >
            <Nav navbarScroll>
              <LinkContainer to='/'>
                <NavDropdown.Item className='me-lg-3 fs-5 fw-semibold'>
                  Home
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/about'>
                <NavDropdown.Item className='me-lg-3 fs-5 fw-semibold'>
                  About
                </NavDropdown.Item>
              </LinkContainer>
            </Nav>
            <Nav>
              {user.role !== 'vendor' ? (
                <>
                  <LinkContainer to='/Categories'>
                    <NavDropdown.Item className='me-lg-3 fs-5 fw-semibold d-flex align-items-center justify-content-center'>
                      Buy
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/vendor-join'>
                    <NavDropdown.Item className='me-lg-4 fs-5 fw-semibold d-flex align-items-center justify-content-center'>
                      Sell
                    </NavDropdown.Item>
                  </LinkContainer>
                </>
              ) : (
                ''
              )}

              {auth.isAuthenticated && user ? (
                <>
                  <LinkContainer to='/profile' className='d-lg-none'>
                    <NavDropdown.Item className='me-lg-3 fs-5 fw-semibold d-flex align-items-center justify-content-center'>
                      Profile
                    </NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item
                    onClick={handleLogout}
                    className='d-lg-none me-lg-3 fs-5 fw-semibold d-flex align-items-center justify-content-center'
                  >
                    Logout
                  </NavDropdown.Item>
                  <NavDropdown
                    className='drop-down-logged d-none d-lg-flex'
                    align='end'
                    title={getUserAvatar(user)}
                  >
                    <LinkContainer
                      to={
                        user.role !== 'vendor' ? '/profile' : '/vendor-profile'
                      }
                    >
                      <NavDropdown.Item className='me-lg-3 fs-5 fw-semibold'>
                        Profile
                      </NavDropdown.Item>
                    </LinkContainer>
                    <NavDropdown.Item
                      onClick={handleLogout}
                      className='me-lg-3 fs-5 fw-semibold'
                    >
                      Logout
                    </NavDropdown.Item>
                  </NavDropdown>
                </>
              ) : (
                <NavDropdown
                  align='end'
                  title={
                    <div className='me-lg-3 fs-5 fw-semibold d-flex align-items-center justify-content-center'>
                      Login
                    </div>
                  }
                  className='drop-down-logged d-none d-lg-flex'
                >
                  <LinkContainer to='/login'>
                    <NavDropdown.Item className='me-lg-3 fs-5 fw-semibold'>
                      Login
                    </NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/register'>
                    <NavDropdown.Item className='me-lg-3 fs-5 fw-semibold'>
                      Register
                    </NavDropdown.Item>
                  </LinkContainer>
                </NavDropdown>
              )}
            </Nav>
          </NavBar.Collapse>
        </Container>
      </NavBar>
    </div>
  );
};

export default Navbar;

import { useState } from 'react';
import { LinkContainer } from 'react-router-bootstrap'; // Bootstrap
import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import { default as NavBar } from 'react-bootstrap/NavBar';
import Avatar from 'react-avatar';
import { useAuth, useUser } from './../../contexts/Contexts';
import { LOGOUT } from './../../contexts/ContextConsts';
import Confirm from './../commons/Confirm';

import './nav.css';

const getUserAvatar = (user) => {
  return user.avatarUrl !== '' ? (
    <div className='align-items-center d-none d-lg-flex'>
      <img
        src={user.avatarUrl}
        width='3em'
        height='3em'
        alt='avatar'
        style={{}}
        className='rounded-circle m-0'
      />
      <div className='mx-2'>{user.firstName}</div>
    </div>
  ) : (
    <div className='align-items-center d-none d-lg-flex'>
      <Avatar
        name={user.firstName + ' ' + user.lastName}
        size='3em'
        className='rounded-circle m-0'
      />
      <div className='mx-2'>{user.firstName}</div>
    </div>
  );
};

const Navbar = () => {
  const { auth, dispatch } = useAuth();
  const { user } = useUser();
  const [showConfirm, setShowConfirm] = useState(false);
  const [confirmTitle] = useState('Confirm logout');
  const [confirmText, setConfirmText] = useState('');

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
    setShowConfirm(false);
  };
  return (
    <div>
      <Confirm
        show={showConfirm}
        title={confirmTitle}
        text={confirmText}
        handleShow={handleShowConfirm}
        handleClose={handleCloseConfirm}
        handleConfirm={handleConfirmConfirm}
      />
      <NavBar
        sticky='top'
        collapseOnSelect
        expand='lg'
        bg='light'
        variant='light'
        className='min-vw-100'
        style={{ zIndex: '1 !important' }}
      >
        <Container fluid>
          <LinkContainer to='/'>
            <NavBar.Brand className='nav-brand'>
              <div className='fs-4 fw-bold'>Genius Architect</div>
            </NavBar.Brand>
          </LinkContainer>

          <NavBar.Toggle aria-controls='navbarScroll' />
          <NavBar.Collapse id='navbarScroll'>
            <Nav className='me-auto my-2 my-lg-0' navbarScroll>
              <LinkContainer to='/'>
                <NavDropdown.Item className='mx-3 fs-5 fw-semibold'>
                  Home
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/about'>
                <NavDropdown.Item className='mx-3 fs-5 fw-semibold'>
                  About
                </NavDropdown.Item>
              </LinkContainer>
            </Nav>
            <Nav className='justify-content-end'>
              <LinkContainer to='/Categories'>
                <NavDropdown.Item className='mx-3 fs-5 fw-semibold d-flex align-items-center'>
                  Buy
                </NavDropdown.Item>
              </LinkContainer>
              <LinkContainer to='/vendor-join'>
                <NavDropdown.Item className='mx-3 fs-5 fw-semibold d-flex align-items-center'>
                  Sell
                </NavDropdown.Item>
              </LinkContainer>
              {auth.isAuthenticated && user ? (
                <NavDropdown align='end' title={getUserAvatar(user)}>
                  <LinkContainer to='/profil'>
                    <NavDropdown.Item>Profile</NavDropdown.Item>
                  </LinkContainer>
                  <NavDropdown.Item onClick={handleLogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
              ) : (
                <NavDropdown align='end' title='Login' className='pe-3'>
                  <LinkContainer to='/login'>
                    <NavDropdown.Item>Login</NavDropdown.Item>
                  </LinkContainer>
                  <LinkContainer to='/register'>
                    <NavDropdown.Item>Register</NavDropdown.Item>
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

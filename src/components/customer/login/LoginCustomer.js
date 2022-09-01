import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Card } from 'react-bootstrap';
import { LoginHelper } from '../../../helpers';
import { useAuth, useUser } from '../../../contexts/Contexts';
import { LOGIN, SET_USER } from '../../../contexts/ContextConsts';
import Alert from '../../commons/Alert';
import Toast from './../../commons/Toast';

const LoginCustomer = () => {
  const { dispatch: authDispatch } = useAuth();
  const { dispatch: userDispatch } = useUser();
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({
    email: '',
    password: '',
  });
  const [formError, setFormError] = useState({});
  const [showPass, setShowPass] = useState(false);
  const [showAlert, setShowAlert] = useState(false);
  const [isError, setIsError] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [alertTitle] = useState('Info');
  const [alertText, setAlertText] = useState('');

  const handleCloseAlert = () => {
    setShowAlert(false);
    if (!isError) {
      navigate('/');
    }
  };
  const handleShowAlert = () => setShowAlert(true);

  const handleChange = (event) => {
    setLoginForm({ ...loginForm, [event.target.name]: event.target.value });
  };

  const handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      handleSubmit(ev);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError(LoginHelper.loginValidation(loginForm));
    if (loginForm.email !== '' && loginForm.password !== '') {
      if (Object.keys(formError).length === 0) {
        setIsLoading(true);

        const login = await LoginHelper.loginUserByEmailAndPassword(loginForm);

        setIsLoading(false);

        if (login.statusCode === 200) {
          setAlertText('Login success!');
          setShowAlert(true);
          authDispatch({
            type: LOGIN,
            payload: {
              isAuthenticated: true,
              accessToken: login.data.accessToken,
            },
          });
          userDispatch({
            type: SET_USER,
            payload: {
              user: login.data.user,
            },
          });
        } else {
          console.log(login);
          setAlertText('Login failed!');
          setIsError(true);
          setShowAlert(true);
        }
        return;
      }
    }
  };

  const showPassword = () => {
    setShowPass((showPass) => !showPass);
  };

  return (
    <div className='d-flex flex-column'>
      <Alert
        show={showAlert}
        title={alertTitle}
        text={alertText}
        handleShow={handleShowAlert}
        handleClose={handleCloseAlert}
      />
      <Toast show={isLoading} loading={isLoading} />
      <Card className='my-5' style={{ minWidth: '32em' }}>
        <Card.Body>
          <div className='display-6 fw-semibold'>Login</div>
          <Form className='mt-5'>
            <div className='text-start'>
              <hr />
              <Form.Group className='mb-3' controlId='formEmail'>
                <Form.Label>
                  <h5>Email</h5>
                </Form.Label>
                <Form.Control
                  type='email'
                  placeholder='Enter email'
                  name='email'
                  onChange={(ev) => handleChange(ev)}
                  onKeyPress={(ev) => handleKeyPress(ev)}
                />
              </Form.Group>
              <p className='text-danger'>{formError.email}</p>

              <Form.Group className='mb-3' controlId='formPassword'>
                <Form.Label>
                  <h5>Password</h5>
                </Form.Label>
                <Form.Control
                  type={showPass ? 'text' : 'password'}
                  placeholder='Enter password'
                  name='password'
                  onChange={(ev) => handleChange(ev)}
                  onKeyPress={(ev) => handleKeyPress(ev)}
                />
              </Form.Group>
              <p className='text-danger'>{formError.password}</p>

              <Form.Group className='mb-3' controlId='formCheckbox'>
                <Form.Check
                  type='checkbox'
                  label='Show password'
                  onChange={showPassword}
                  checked={showPass}
                />
              </Form.Group>
              <hr />
            </div>

            <div className='text-start'>
              <p>
                New user?&nbsp;
                <span>
                  <Link to='/register'>Register</Link>
                </span>
              </p>
            </div>

            <Button
              className='mt-3'
              variant='dark'
              type='submit'
              onClick={handleSubmit}
            >
              Login
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default LoginCustomer;

import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form, Card } from 'react-bootstrap';
import { UsersHelper } from '../../../helpers';
import Alert from '../../commons/Alert';
import Toast from './../../commons/Toast';

const RegisterCustomer = () => {
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState({
    email: '',
    firstName: '',
    lastName: '',
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
      navigate('/login');
    }
  };
  const handleShowAlert = () => setShowAlert(true);

  const handleChange = (event) => {
    setUserForm({ ...userForm, [event.target.name]: event.target.value });
  };

  const handleKeyPress = (ev) => {
    if (ev.key === 'Enter') {
      ev.preventDefault();
      handleSubmit(ev);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFormError(UsersHelper.userRegisterValidation(userForm));
    if (
      userForm.email !== '' &&
      userForm.firstName !== '' &&
      userForm.password !== ''
    ) {
      if (Object.keys(formError).length === 0) {
        setIsLoading(true);

        const newUser = await UsersHelper.registerUser(userForm);

        setIsLoading(false);

        if (newUser.statusCode === 201) {
          setAlertText('Registration success!');
          setShowAlert(true);
        } else {
          console.log(newUser);
          setAlertText('Registration failed!');
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
          <div className='display-6 fw-semibold'>Register account</div>
          <Form className='mt-5'>
            <div className='text-start'>
              <hr />
              <Form.Group className='mb-3' controlId='formFirstName'>
                <Form.Label>
                  <h5>First Name</h5>
                </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter first name'
                  name='firstName'
                  onChange={(ev) => handleChange(ev)}
                  onKeyPress={(ev) => handleKeyPress(ev)}
                />
              </Form.Group>
              <p className='text-danger'>{formError.firstName}</p>

              <Form.Group className='mb-3' controlId='formLastName'>
                <Form.Label>
                  <h5>Last Name</h5>
                </Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Enter last name'
                  name='lastName'
                  onChange={(ev) => handleChange(ev)}
                  onKeyPress={(ev) => handleKeyPress(ev)}
                />
              </Form.Group>

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
                Already have an account?&nbsp;
                <span>
                  <Link to='/login'>Login</Link>
                </span>
              </p>
            </div>

            <Button
              className='mt-3'
              variant='dark'
              type='submit'
              onClick={handleSubmit}
            >
              Register
            </Button>
          </Form>
        </Card.Body>
      </Card>
    </div>
  );
};

export default RegisterCustomer;

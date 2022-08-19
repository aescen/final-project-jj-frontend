import { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { AuthContext } from './../../contexts/AuthContext';
import {
  KeranjangContext,
  validateKeranjangAPIByUserId,
} from './../../contexts/KeranjangContext';
import { LOGIN } from './../../contexts/ContextConsts';
import * as Helper from './../../helpers/LoginHelper';

function Login({ from }) {
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState({ email: '', password: '' });
  const [formError, setFormError] = useState({});
  const [lihatPass, setLihatpass] = useState(false);
  const { dispatch } = useContext(AuthContext);
  const { dispatch: dispatchKeranjang } = useContext(KeranjangContext);

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
    setFormError(Helper.validasiForm(userForm));
    if (userForm.email !== '' && userForm.password !== '') {
      if (Object.keys(formError).length === 0) {
        const userData = { ...userForm };
        const user = await Helper.getUserByEmailAndPassword(
          userData.email,
          userData.password,
        );

        if (user !== null) {
          dispatch({
            type: LOGIN,
            payload: user,
          });
          validateKeranjangAPIByUserId(user.id, dispatchKeranjang);
          navigate('/');
        } else {
          alert('User tidak ditemukan! Silakan daftar dulu.');
        }
      }
    }
  };

  const lihatPassword = () => {
    setLihatpass((lihatPass) => !lihatPass);
  };

  return (
    <div className='d-flex flex-column vh-100'>
      <div className='mt-5'>
        <h1>Masuk ke akun anda</h1>
        <Form className='mt-5'>
          <div className='text-start'>
            <hr />
            <Form.Group className='mb-3' controlId='formBasicEmail'>
              <Form.Label>
                <h4>Email Anda</h4>
              </Form.Label>
              <Form.Control
                type='email'
                placeholder='Masukan Email Anda'
                name='email'
                onChange={(ev) => handleChange(ev)}
                onKeyPress={(ev) => handleKeyPress(ev)}
              />
            </Form.Group>
            <p className='text-danger'>{formError.email}</p>

            <Form.Group className='mb-3'>
              <Form.Label>
                <h4>Password Anda</h4>
              </Form.Label>
              <Form.Control
                type={lihatPass ? 'text' : 'password'}
                placeholder='Masukan Password Anda'
                name='password'
                onChange={(ev) => handleChange(ev)}
                onKeyPress={(ev) => handleKeyPress(ev)}
              />
            </Form.Group>
            <p className='text-danger'>{formError.password}</p>

            <Form.Group className='mb-3' controlId='formBasicCheckbox'>
              <Form.Check
                type='checkbox'
                label='Lihat password'
                onChange={lihatPassword}
                checked={lihatPass}
              />
            </Form.Group>
            <hr />
          </div>

          <div className='text-start'>
            <p>
              Belum punya akun?&nbsp;
              <span>
                <Link to='/register'>Buat baru</Link>
              </span>
            </p>
          </div>

          <Button className='mt-3' variant='dark' type='submit' onClick={handleSubmit}>
            Masuk
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Login;

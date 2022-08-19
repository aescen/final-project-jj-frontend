import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import * as Helper from './../../helpers/LoginHelper';

function Register() {
  const navigate = useNavigate();
  const [userForm, setUserForm] = useState({ email: '', username: '', password: '' });
  const [formError, setFormError] = useState({});
  const [lihatPass, setLihatpass] = useState(false);

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
    if (userForm.email !== '' && userForm.username !== '' && userForm !== '') {
      if (Object.keys(formError).length === 0) {
        const newUser = await Helper.registerNewUser(userForm);
        const user = await Helper.getUserByEmailAndPassword(
          newUser.email,
          newUser.password,
        );

        if (user !== null) {
          alert('Registrasi berhasil!');
          navigate('/login');
        } else {
          alert('Gagal registrasi!');
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
        <h1>Daftar akun baru</h1>
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

            <Form.Group className='mb-3' controlId='formBasicPassword'>
              <Form.Label>
                <h4>Nama Anda</h4>
              </Form.Label>
              <Form.Control
                type='text'
                placeholder='Masukan Nama Anda'
                name='username'
                onChange={(ev) => handleChange(ev)}
                onKeyPress={(ev) => handleKeyPress(ev)}
              />
            </Form.Group>
            <p className='text-danger'>{formError.username}</p>

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
              Sudah punya akun?&nbsp;
              <span>
                <Link to='/login'>Masuk</Link>
              </span>
            </p>
          </div>

          <Button className='mt-3' variant='dark' type='submit' onClick={handleSubmit}>
            Daftar
          </Button>
        </Form>
      </div>
    </div>
  );
}

export default Register;

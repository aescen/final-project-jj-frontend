import api from '../apis/';

const PASSWORD_LENGTH = 8;

const loginUserByEmailAndPassword = async (loginForm) => {
  try {
    const login = await api.post('/login', loginForm);
    return {
      statusCode: login.status,
      data: login.data,
    };
  } catch (error) {
    if (error.name === 'AxiosError') {
      console.log(error);
      return {
        statusCode: error.response.status,
        message: error.response.data.message,
      };
    }

    console.log(error);
    return null;
  }
};

const loginValidation = (value) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!value.email) {
    errors.email = 'Cannot be empty';
  } else if (!regex.test(value.email)) {
    errors.email = 'Email is invalid';
  }
  if (!value.password) {
    errors.password = 'Cannot be empty';
  } else if (value.password.length < PASSWORD_LENGTH) {
    errors.password = `Length must ${PASSWORD_LENGTH} characters or more`;
  }
  return errors;
};

const LoginHelper = { loginUserByEmailAndPassword, loginValidation };

export default LoginHelper;

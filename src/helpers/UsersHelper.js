import api from '../apis/';

const PASSWORD_LENGTH = 8;

const registerUser = async (userForm) => {
  try {
    const newUser = {
      ...userForm,
      avatarUrl: '',
      role: 'user',
    };

    const user = await api.post('/users', newUser);

    return { statusCode: user.status, data: { user: user.data } };
  } catch (error) {
    if (error.name === 'AxiosError') {
      return {
        statusCode: error.response.status,
        message: error.response.data.message,
      };
    }

    return null;
  }
};

const registerVendor = async (vendorForm) => {
  try {
    const newVendor = {
      ...vendorForm,
      avatarUrl: '',
      role: 'vendor',
    };

    const vendor = await api.post('/users', newVendor);

    return { statusCode: vendor.status, data: { user: vendor.data } };
  } catch (error) {
    if (error.name === 'AxiosError') {
      return {
        statusCode: error.response.status,
        message: error.response.data.message,
      };
    }

    return null;
  }
};

const getVendorById = async (id, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    const vendor = await api.get(`/vendors/${id}`, config);

    return { statusCode: vendor.status, data: vendor.data.vendor };
  } catch (error) {
    if (error.name === 'AxiosError') {
      return {
        statusCode: error.response.status,
        message: error.response.data?.message || '',
      };
    }

    return null;
  }
};

const userRegisterValidation = (value) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!value.email) {
    errors.email = 'Cannot be empty';
  } else if (!regex.test(value.email)) {
    errors.email = 'Email is invalid';
  }
  if (!value.firstName) {
    errors.firstName = 'Cannot be empty';
  }
  if (!value.password) {
    errors.password = 'Cannot be empty';
  } else if (value.password.length < PASSWORD_LENGTH) {
    errors.password = `Length must ${PASSWORD_LENGTH} characters or more`;
  }
  return errors;
};

const vendorRegisterValidation = (value) => {
  const errors = {};
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
  if (!value.email) {
    errors.email = 'Cannot be empty';
  } else if (!regex.test(value.email)) {
    errors.email = 'Email is invalid';
  }
  if (!value.firstName) {
    errors.firstName = 'Cannot be empty';
  }
  if (!value.studioName) {
    errors.studioName = 'Cannot be empty';
  }
  if (!value.password) {
    errors.password = 'Cannot be empty';
  } else if (value.password.length < PASSWORD_LENGTH) {
    errors.password = `Length must ${PASSWORD_LENGTH} characters or more`;
  }
  if (!value.bgExp) {
    errors.bgExp = 'Cannot be empty';
  }
  if (!value.linkedIn) {
    errors.linkedIn = 'Cannot be empty';
  }
  return errors;
};

const UsersHelper = {
  registerUser,
  registerVendor,
  userRegisterValidation,
  vendorRegisterValidation,
  getVendorById,
};

export default UsersHelper;

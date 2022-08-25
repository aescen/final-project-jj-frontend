import api from '../apis/';

const uploadProduct = async (formData, token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
        'content-type': `multipart/form-data; boundary=${formData._boundary}`,
      },
    };
    const result = await api.post('/products', formData, config);
    return {
      statusCode: result.status,
      data: result.data,
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

const UploadHelper = { uploadProduct };

export default UploadHelper;

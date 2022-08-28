import api from '../apis/';

const getProducts = async (token) => {
  try {
    const result = await api.get('/products');

    return {
      statusCode: result.status,
      data: result.data.data,
    };
  } catch (error) {
    if (error.name === 'AxiosError') {
      console.log(error);
      const { message } = error.response.data;
      return {
        statusCode: error.response.status,
        message: message || 'Error',
      };
    }

    console.log(error);
    return null;
  }
};

const ProductsHelper = { getProducts };

export default ProductsHelper;

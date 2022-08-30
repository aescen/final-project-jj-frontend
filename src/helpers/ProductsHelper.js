import api from '../apis/';

const getProducts = async () => {
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

const getProductById = async (id) => {
  try {
    const result = await api.get(`/products/${id}`);

    return {
      statusCode: result.status,
      data: result.data.product,
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

const toFormatted = (n) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  }).format(parseFloat(n));
};

const ProductsHelper = { getProducts, getProductById, toFormatted };

export default ProductsHelper;

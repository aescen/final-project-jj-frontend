import api from '../apis/';

const getCollections = async (token) => {
  try {
    const config = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };
    const result = await api.get('/collections', config);

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

const CollectionsHelper = { getCollections };

export default CollectionsHelper;

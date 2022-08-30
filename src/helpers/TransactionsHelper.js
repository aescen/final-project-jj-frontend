import api from '../apis/';

const addTransaction = async (transactionForm) => {
  try {
    const transaction = await api.post('/transactions', transactionForm);

    return {
      statusCode: transaction.status,
      data: { transaction: transaction.data.transaction },
    };
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

const TransactionsHelper = { addTransaction };

export default TransactionsHelper;

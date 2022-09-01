import mockapi from './../apis';

const addUserByEmailAndPassword = async (email, password) => {
  const users = (await mockapi.post('/users'), { email, password });

  console.log(users);

  return {};
}

export { addUserByEmailAndPassword };

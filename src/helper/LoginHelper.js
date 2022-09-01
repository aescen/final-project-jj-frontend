import mockapi from './../apis/mockapi';

const getUserByEmailAndPassword = async (email, password) => {
  const users = (await mockapi.post('/login'), { email, password });

  console.log(users);

  if (users.length === 0) return null;
  const user = users.filter(
    (item) => item.email === email && item.password === password,
  );
  if (user.length === 0) return null;

  return user[0];
};

export { getUserByEmailAndPassword };

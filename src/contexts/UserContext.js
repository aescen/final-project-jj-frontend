import { memo, useContext, useState, useEffect, createContext } from 'react';
import { CURRENT_USER } from './ContextConsts';

export const UserContext = createContext();

const UserContextProvider = memo(({ children }) => {
  const [user, setUser] = useState({
    id: '',
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    avatar: '',
    role: '',
  });

  useEffect(() => {
    let currentUser = null;
    const currentUserData = localStorage.getItem(CURRENT_USER);
    if (currentUserData !== 'undefined') {
      currentUser = JSON.parse(currentUserData);
    }
    if (currentUser !== null) {
      setUser(currentUser);
    }
  }, []);

  return (
    <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>
  );
});

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within an UserContextProvider');
  }

  return context;
};

export default UserContextProvider;

import { memo, useContext, useReducer, useEffect, createContext } from 'react';
import { CURRENT_USER, DELETE_USER, SET_USER } from './ContextConsts';

export const UserContext = createContext();

const userInitialState = {
  id: '',
  firstName: '',
  lastName: '',
  email: '',
  password: '',
  phone: '',
  avatarUrl: '',
  userStatus: '',
  role: '',
};

const userReducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      localStorage.setItem(CURRENT_USER, JSON.stringify(action.payload));
      return {
        ...action.payload.user,
      };
    case DELETE_USER:
      localStorage.removeItem(CURRENT_USER);
      return {
        ...userInitialState,
      };
    default:
      return state;
  }
};

const UserContextProvider = memo(({ children }) => {
  const [user, dispatch] = useReducer(userReducer, userInitialState);

  useEffect(() => {
    let currentUser = null;
    const currentUserData = localStorage.getItem(CURRENT_USER);
    if (currentUserData) {
      currentUser = JSON.parse(currentUserData);
      dispatch({
        type: SET_USER,
        payload: currentUser,
      });
    }
  }, []);

  return (
    <UserContext.Provider value={{ user, dispatch }}>
      {children}
    </UserContext.Provider>
  );
});

export const useUser = () => {
  const context = useContext(UserContext);

  if (!context) {
    throw new Error('useUser must be used within a UserContextProvider');
  }

  return context;
};

export default UserContextProvider;

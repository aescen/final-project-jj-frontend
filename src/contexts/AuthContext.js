import { memo, useContext, useReducer, createContext, useEffect } from 'react';
import { AUTHENTICATED, CURRENT_USER, LOGIN, LOGOUT } from './ContextConsts';

const AuthContext = createContext();

const authInitialState = {
  isAuthenticated: null,
  user: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem(CURRENT_USER, JSON.stringify(action.payload));
      localStorage.setItem(AUTHENTICATED, true);
      return {
        isAuthenticated: true,
        user: action.payload,
      };
    case LOGOUT:
      localStorage.removeItem(CURRENT_USER);
      localStorage.setItem(AUTHENTICATED, false);
      return {
        isAuthenticated: false,
        user: action.payload,
      };
    default:
      return state;
  }
};

const AuthContextProvider = memo(({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(CURRENT_USER));
    const isAuthenticated = JSON.parse(localStorage.getItem(AUTHENTICATED));
    if (isAuthenticated) {
      dispatch({
        type: LOGIN,
        payload: user,
      });
    }

    if (!isAuthenticated) {
      dispatch({
        type: LOGOUT,
        payload: user,
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        auth,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
});

export const useAuth = () => {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within an AuthContextProvider');
  }

  return context;
};

export default AuthContextProvider;

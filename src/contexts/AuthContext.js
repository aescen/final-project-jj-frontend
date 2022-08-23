import { memo, useContext, useReducer, createContext, useEffect } from 'react';
import {
  AUTHENTICATED,
  ACCESS_TOKEN,
  CURRENT_USER,
  LOGIN,
  LOGOUT,
} from './ContextConsts';

const AuthContext = createContext();

const authInitialState = {
  isAuthenticated: null,
  user: null,
  accessToken: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem(CURRENT_USER, JSON.stringify(action.payload.user));
      localStorage.setItem(ACCESS_TOKEN, JSON.stringify(action.payload.accessToken));
      localStorage.setItem(AUTHENTICATED, true);
      return {
        isAuthenticated: true,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    case LOGOUT:
      localStorage.removeItem(CURRENT_USER);
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.setItem(AUTHENTICATED, false);
      return {
        isAuthenticated: false,
        user: action.payload.user,
        accessToken: action.payload.accessToken,
      };
    default:
      return state;
  }
};

const AuthContextProvider = memo(({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem(CURRENT_USER));
    const accessToken = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
    const isAuthenticated = JSON.parse(localStorage.getItem(AUTHENTICATED));
    if (isAuthenticated) {
      dispatch({
        type: LOGIN,
        payload: { user, accessToken },
      });
    }

    if (!isAuthenticated) {
      dispatch({
        type: LOGOUT,
        payload: { user, accessToken },
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

import { memo, useContext, useReducer, createContext, useEffect } from 'react';
import { AUTHENTICATED, ACCESS_TOKEN, LOGIN, LOGOUT } from './ContextConsts';

const AuthContext = createContext();

const authInitialState = {
  isAuthenticated: null,
  accessToken: null,
};

const authReducer = (state, action) => {
  switch (action.type) {
    case LOGIN:
      if (action.payload.accessToken) {
        localStorage.setItem(
          ACCESS_TOKEN,
          JSON.stringify(action.payload.accessToken),
        );
        localStorage.setItem(AUTHENTICATED, action.payload.isAuthenticated);
        return {
          isAuthenticated: action.payload.isAuthenticated,
          accessToken: action.payload.accessToken,
        };
      }
      return state;
    case LOGOUT:
      localStorage.removeItem(ACCESS_TOKEN);
      localStorage.removeItem(AUTHENTICATED);
      localStorage.setItem(AUTHENTICATED, action.payload.isAuthenticated);
      return {
        isAuthenticated: action.payload.isAuthenticated,
        accessToken: action.payload.accessToken,
      };
    default:
      return state;
  }
};

const AuthContextProvider = memo(({ children }) => {
  const [auth, dispatch] = useReducer(authReducer, authInitialState);

  useEffect(() => {
    const accessToken = JSON.parse(localStorage.getItem(ACCESS_TOKEN));
    const isAuthenticated = JSON.parse(localStorage.getItem(AUTHENTICATED));

    if (isAuthenticated) {
      dispatch({
        type: LOGIN,
        payload: { isAuthenticated: true, accessToken },
      });
    }

    if (!isAuthenticated) {
      dispatch({
        type: LOGOUT,
        payload: { isAuthenticated: false, accessToken },
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

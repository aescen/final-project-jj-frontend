import { Navigate } from 'react-router-dom';
import { useAuth, useUser } from '../../contexts/Contexts';

const ProtectedRoute = ({
  children,
  loginOnly = true,
  vendorOnly = false,
  userOnly = false,
  path = '',
}) => {
  const { auth } = useAuth();
  const { user } = useUser();

  if (auth.isAuthenticated === null) {
    console.log('Auth context is still loading...');
    return;
  }

  console.log('Auth context is loaded.');

  if (!auth.isAuthenticated && loginOnly) {
    if (vendorOnly) {
      return <Navigate to='/vendor-login' />;
    }

    return <Navigate to='/login' />;
  }

  if (
    auth.isAuthenticated &&
    !loginOnly &&
    !vendorOnly &&
    (path === 'login' ||
      path === 'register' ||
      path === 'vendor-registration' ||
      path === 'vendor-login')
  ) {
    if (user.role === 'user') {
      console.log(`User '${children.type.name}' already loggin.`);
      console.log('to home');
      return <Navigate to='/' />;
    }

    if (user.role === 'vendor') {
      console.log(`Vendor '${children.type.name}' already loggin.`);
      console.log('to dashboard');
      return <Navigate to='/vendor-dashboard' />;
    }
  }

  if (auth.isAuthenticated && loginOnly && vendorOnly && user.role === 'user') {
    console.log(`Element '${children.type.name}' is vendor only.`);
    console.log('to home');
    return <Navigate to='/' />;
  }

  if (auth.isAuthenticated && loginOnly && userOnly && user.role === 'vendor') {
    console.log(`Element '${children.type.name}' is user only.`);
    console.log('to vendor-dashboard');
    return <Navigate to='/vendor-dashboard' />;
  }

  console.log(`Continue loading element '${children.type.name}'`);
  return children;
};

export default ProtectedRoute;

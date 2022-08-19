import { Navigate } from 'react-router-dom';
import { useAuth } from '../../contexts/AuthContext';

const ProtectedRoute = ({ children, loginOnly = true, vendorOnly = false }) => {
  const { auth } = useAuth();

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

  if (auth.isAuthenticated && !loginOnly) {
    return <Navigate to='/' />;
  }

  if (auth?.user?.role !== 'vendor' && vendorOnly) {
    console.log(`Element '${children.type.name}' is vendor only.`);
    return <Navigate to='/' />;
  }

  console.log(`Continue loading element '${children.type.name}'`);
  return children;
};

export default ProtectedRoute;

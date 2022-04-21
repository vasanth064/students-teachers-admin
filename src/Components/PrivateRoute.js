import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

export const PrivateRoute = ({ children }) => {
  const { currentUser, logOut } = useAuth();
  return currentUser ? children : logOut() && <Navigate to='/login' />;
};

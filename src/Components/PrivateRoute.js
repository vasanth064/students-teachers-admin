import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const AdminEmails = [
  'vasanthnaveen2011@gmail.com',
  'vathsansri597@gmail.com',
  'rajkumardce19dx18@gmail.com',
  'ashokku51202@gmail.com',
];
export const PrivateRoute = ({ children }) => {
  const { currentUser, logOut } = useAuth();
  const [adminEmails] = useState(AdminEmails);
  return currentUser && adminEmails.includes(currentUser.email)
    ? children
    : logOut() && <Navigate to='/login' />;
};

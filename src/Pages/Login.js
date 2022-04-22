import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';

const Login = () => {
  const { googleSignIn, currentUser } = useAuth();
  return (
    <div>
      {currentUser ? <Navigate to='/' /> : null}
      <header>
        <h1>Login</h1>
      </header>
      <button onClick={() => googleSignIn()}>Login with Google</button>
    </div>
  );
};

export default Login;

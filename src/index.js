import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import AuthenticationProvider from './Context/AuthContext';
import FirestoreProvider from './Context/FirestoreContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <AuthenticationProvider>
      <FirestoreProvider>
        <App />
      </FirestoreProvider>
    </AuthenticationProvider>
  </BrowserRouter>
);

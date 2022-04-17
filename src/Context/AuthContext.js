import { async } from '@firebase/util';
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db } from './../Config/firebaseConfig';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthenticationProvider = ({ children }) => {
  const naviagte = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const gAuthProvider = new GoogleAuthProvider();

  const signUpWithEmail = async (userData) => {
    try {
      setError('');
      setLoading(true);
      const cred = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      const studentsRef = doc(db, 'students', cred.user.uid);
      await setDoc(studentsRef, userData);
      naviagte('/');
    } catch {
      setError('Failed To SignIn');
    }
  };

  const googleSignIn = async () => {
    try {
      setError('');
      setLoading(true);
      await signInWithPopup(auth, gAuthProvider);
      naviagte('/home');
    } catch {
      setError('Failed To SignIn');
    }
  };
  const logOut = async () => {
    try {
      setError('');
      setLoading(true);
      await signOut(auth);
      setCurrentUser(null);
    } catch {
      setError('Failed To SignOut');
      setLoading(false);
    }
    setLoading(false);
  };

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setCurrentUser(user);
    });

    return unsubscribe;
  }, []);

  const value = {
    currentUser,
    signUpWithEmail,
    googleSignIn,
    logOut,
    error,
    loading,
  };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthenticationProvider;

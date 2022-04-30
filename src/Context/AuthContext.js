import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage';
import React, { useContext, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth, db, storageBucket } from './../Config/firebaseConfig';

const AuthContext = React.createContext();

export const useAuth = () => {
  return useContext(AuthContext);
};

const AuthenticationProvider = ({ children }) => {
  const naviagte = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [pending, setpending] = useState(true);
  const gAuthProvider = new GoogleAuthProvider();

  //uploading files to storage bucket firebase and add data
  const firebaseUpload = (file, userData, cred, userType) => {
    if (!file) return;
    const uniqueID = Date.now() + Math.floor(Math.random()).toString();
    const storageRef = ref(
      storageBucket,
      `/${userType}/${uniqueID}${file.name}`
    );
    const uploadTask = uploadBytesResumable(storageRef, file);
    uploadTask.on(
      'state_changed',
      (snapshot) => {
        Math.round((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      },
      (err) => console.log(err),
      () => {
        getDownloadURL(uploadTask.snapshot.ref).then(async (url) => {
          const usersRef = doc(db, userType, cred.user.uid);
          let data = {
            ...userData,
            photo: url,
          };
          await setDoc(usersRef, data);
        });
      }
    );
  };

  const signUpWithEmail = async (userData, photo, userType) => {
    try {
      setError('');
      setLoading(true);
      const cred = await createUserWithEmailAndPassword(
        auth,
        userData.email,
        userData.password
      );
      firebaseUpload(photo, userData, cred, userType);
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
      naviagte('/');
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

   useEffect(
    () =>
      auth.onAuthStateChanged((user) => {
        setCurrentUser(user);
        setpending(false);
      }),
    []
  );

  const value = {
    currentUser,
    signUpWithEmail,
    googleSignIn,
       pending,
    logOut,
    error,
    loading,
  };
  return pending ? (
    <h1>Signing You In 🔐<h1/>
  ) : (
    <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
  );
};

export default AuthenticationProvider;

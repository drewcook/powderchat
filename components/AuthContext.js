import React, { createContext, useContext, useEffect, useMemo, useReducer, useState } from 'react';
import PropTypes from 'prop-types';
import firebase from 'firebase/app';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext();

export const withAuthProvider = () => (WrappedComponent) => {
  const authProvider = (props) => {
    const INITIAL_USER = { loggedIn: false };
    const [user, setUser] = useState(INITIAL_USER);

    const onAuthStateChange = (callback) => {
      return firebase.auth().onAuthStateChanged(authUser => {
        console.log("auth state has changed", authUser);
        // TODO: use AsyncStorage and store the token or clear it
        if (authUser) {
          const { displayName, email, emailVerified, isAnonymous, ma, metadata, phoneNumber, photoURL, providerData, refreshToken, uid } = authUser

          callback({
            displayName,
            email,
            emailVerified,
            isAnonymous,
            loggedIn: true,
            metadata,
            phoneNumber,
            photoURL,
            providerData,
            refreshToken,
            token: ma,
            uid,
          });
        } else {
          console.log('no user found after auth state change', authUser);
          callback(INITIAL_USER);
        }
      });
    };

    useEffect(() => {
      const unsubscribe = onAuthStateChange(setUser);
      return () => {
        unsubscribe();
      }
    }, []);

    const login = (username, password) => {
      return new Promise((resolve, reject) => {
        firebase
          .auth()
          .signInWithEmailAndPassword(username, password)
          .then(() => {
            // TODO: update last login?
            resolve()
          })
          .catch(error => reject(error));
      });
    };

    const logout = () => {
      firebase.auth().signOut();
    };

    const authContext = useMemo(() => ({ login, logout, user }), []);

    return (
      <AuthContext.Provider value={authContext}>
        <WrappedComponent user={user} />
      </AuthContext.Provider>
    );
  };

  return authProvider;
};

export const useAuthentication = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthentication must be used within an AuthProvider component.');
  }
  return context;
};

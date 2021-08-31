import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  return (
    <AuthContext.Provider
      value={{
        user,
        setUser,
        login: async (email, password) => {
          try {
            await auth().signInWithEmailAndPassword(email, password);
          } catch (e) {
            console.log('login_error:', e);
          }
        },

        register: async (email, password) => {
          try {
            console.log(email, password);
            await auth().createUserWithEmailAndPassword(email, password);
          } catch (e) {
            console.log('register_error:', e);
          }
        },

        logout: async () => {
          try {
            auth().signOut();
          } catch (e) {
            console.log('logout_error:', e);
          }
        },
      }}>
      {children}
    </AuthContext.Provider>
  );
};

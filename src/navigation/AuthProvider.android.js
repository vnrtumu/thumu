import React, {createContext, useState} from 'react';
import auth from '@react-native-firebase/auth';

import {GoogleSignin} from '@react-native-google-signin/google-signin';
import {LoginManager, AccessToken} from 'react-native-fbsdk';

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

        googleLogin: async () => {
          try {
            const {idToken} = await GoogleSignin.signIn();
            // Create a Google credential with the token
            const googleCredential =
              auth.GoogleAuthProvider.credential(idToken);
            // Sign-in the user with the credential
            return auth().signInWithCredential(googleCredential);
          } catch (e) {
            console.log('google_login_error', e);
          }
        },
        fbLogin: async () => {
          try {
            // Attempt login with permissions
            const result = await LoginManager.logInWithPermissions([
              'public_profile',
              'email',
            ]);

            if (result.isCancelled) {
              throw 'User cancelled the login process';
            }

            // Once signed in, get the users AccesToken
            const data = await AccessToken.getCurrentAccessToken();

            if (!data) {
              throw 'Something went wrong obtaining access token';
            }

            // Create a Firebase credential with the AccessToken
            const facebookCredential = auth.FacebookAuthProvider.credential(
              data.accessToken,
            );

            // Sign-in the user with the credential
            return await auth().signInWithCredential(facebookCredential);
          } catch (e) {
            console.log('Fb_login_error', e);
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

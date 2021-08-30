import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import SocialBtn from '../components/SocialBtn';
import {COLORS, FONTS, icons} from '../constants';
import PrimaryBtn from '../components/PrimaryBtn';

import {AuthContext} from '../navigation/AuthProvider';

const SignupScreen = ({navigation}) => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {register} = useContext(AuthContext);
  return (
    <View style={styles.screenWrapper}>
      <Header parentStyle={styles.header} headerTitle="Sign Up" />
      {/* The social btns */}
      <View style={styles.socialWrapper}>
        <Text style={[styles.loginSubTitle, {...FONTS.body3}]}>
          Sign Up in with one of the following options
        </Text>
        <View style={styles.socialBtnWrapper}>
          <SocialBtn imageSrc={icons.google} socialStyle={styles.socialBtn} />
          <SocialBtn imageSrc={icons.facebook} socialStyle={styles.socialBtn} />
        </View>
      </View>

      {/* The Form Contents */}
      <View style={styles.formContainer}>
        <Text style={styles.nameLabel}>Name</Text>
        <TextInput
          placeholder="Name"
          style={[styles.emailInput, {...FONTS.body3}]}
          autoCapitalize="none"
          autoCompleteType="off"
          onChangeText={userName => setName(userName)}
        />

        <Text style={styles.emailLabel}>Email</Text>
        <TextInput
          placeholder="venky@gmail.com"
          style={[styles.emailInput, {...FONTS.body3}]}
          autoCapitalize="none"
          autoCompleteType="off"
          onChangeText={userEmail => setEmail(userEmail)}
        />

        <Text style={styles.passLabel}>Password</Text>
        <TextInput
          placeholder="Password"
          style={[styles.emailInput, {...FONTS.body3}]}
          autoCapitalize="none"
          secureTextEntry
          onChangeText={userPassword => setPassword(userPassword)}
        />

        <PrimaryBtn
          btnText="Create Account"
          onPress={() => register(email, password)}
        />

        <View style={styles.bottomText}>
          <Text style={[styles.dont, {...FONTS.body3}]}>
            Already have an account?
          </Text>
          <TouchableOpacity onPress={() => navigation.navigate('Login')}>
            <Text style={[styles.signup, {...FONTS.h3}]}>Log in</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  screenWrapper: {
    flex: 1,
    backgroundColor: '#000',
  },
  header: {
    marginHorizontal: 20,
    paddingVertical: 40,
  },
  socialWrapper: {
    marginTop: 20,
    marginHorizontal: 20,
  },
  loginSubTitle: {
    color: COLORS.gray,
  },
  socialBtnWrapper: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  socialBtn: {
    marginHorizontal: 20,
  },
  formContainer: {
    marginHorizontal: 20,
    marginTop: 40,
  },
  nameLabel: {
    color: COLORS.white,
  },
  emailLabel: {
    marginTop: 30,
    color: COLORS.white,
  },
  passLabel: {
    color: COLORS.white,
    marginTop: 30,
  },
  emailInput: {
    backgroundColor: '#0f0f0f',
    width: '100%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    // paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
    marginTop: 10,
    padding: 15,
    color: COLORS.white,
  },
  bottomText: {
    flexDirection: 'row',
    marginTop: 10,
    alignContent: 'center',
    justifyContent: 'center',
  },
  dont: {
    color: COLORS.white,
  },
  signup: {
    color: COLORS.white,
    marginLeft: 10,
  },
});
export default SignupScreen;

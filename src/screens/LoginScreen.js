import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is my Login Screen</Text>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text>Go to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({});

export default LoginScreen;

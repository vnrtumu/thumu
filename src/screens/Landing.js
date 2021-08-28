import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

const Landing = ({navigation}) => {
  return (
    <View style={{marginTop: 60}}>
      <Text>This is Landing</Text>
      <Button
        onPress={() => navigation.navigate('Login')}
        title="go to login"
        style={{marginTop: 60}}>
        Login
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Landing;

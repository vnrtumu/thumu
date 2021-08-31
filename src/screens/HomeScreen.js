import React, {useState, useContext} from 'react';
import {StyleSheet, Text, View, Button, Image} from 'react-native';

import PrimaryBtn from '../components/PrimaryBtn';

import {AuthContext} from '../navigation/AuthProvider';
const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);

  console.log(user);
  return (
    <View>
      <Text>Welcome to Home Screen </Text>

      <Button
        onPress={() => navigation.navigate('NewPost')}
        title="Add New Post">
        Add New Post
      </Button>
      <Image style={styles.cover} source={{uri: user.photoURL}} />
      <Text>{user.email ? user.email : user.displayName}</Text>
      <PrimaryBtn btnText="Log Out" onPress={() => logout()} />
    </View>
  );
};

const styles = StyleSheet.create({
  cover: {
    height: 100,
    width: 100,
  },
});

export default HomeScreen;

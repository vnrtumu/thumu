import React from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const MessageScreen = ({navigation}) => {
  return (
    <View>
      <Text>This is message screen</Text>
      <Button
        title="User Message"
        onPress={() => navigation.navigate('Usermsg')}>
        User Message
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default MessageScreen;

import React from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';

export default function HomeScreen(navigation) {
  return (
    <View>
      <Text>This is Home Screen</Text>
      <Button
        onPress={() => navigation.navigate('NewPost')}
        title="Add New Post">
        Add New Post
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({});

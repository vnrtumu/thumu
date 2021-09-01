import React, {useState, useContext} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Button,
  Image,
  TouchableOpacity,
} from 'react-native';

import PrimaryBtn from '../components/PrimaryBtn';

import {AuthContext} from '../navigation/AuthProvider';

import {icons, COLORS, FONTS} from '../constants';

const PostCard = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <View style={styles.card}>
      <View style={styles.cardHeader}>
        <Image
          source={require('../assets/images/users/user-2.jpg')}
          style={styles.userImgr}
        />
        <Text>Venkat Reddy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: COLORS.gray,
    width: '100%',
    marginBottom: 10,
    borderRadius: 10,
    padding: 20,
  },
  cardHeader: {
    flexDirection: 'row',
  },
  userImgr: {
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
});

export default PostCard;

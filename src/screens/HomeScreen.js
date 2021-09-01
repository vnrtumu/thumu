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

import {
  Container,
  Card,
  UserInfo,
  UserImg,
  UserName,
  UserInfoText,
  PostTime,
  PostText,
  PostImg,
  InteractionWrapper,
  Interaction,
  InteractionText,
  Divider,
} from '../styles/FeedStyles';

import PostCard from '../components/PostCard';
const HomeScreen = ({navigation}) => {
  const {user, logout} = useContext(AuthContext);
  return (
    <Container>
      <Card>
        <UserInfo>
          <UserImg source={require('../assets/images/users/user-1.jpg')} />
          <UserInfoText>
            <TouchableOpacity>
              <UserName> Venkat reddy</UserName>
            </TouchableOpacity>
            <PostTime>2m</PostTime>
          </UserInfoText>
        </UserInfo>
        <PostText>
          lorem ipsum dolor sit amet lorem ipsum dolor sit amet,
        </PostText>

        <Divider />

        <InteractionWrapper>
          <Interaction>
            <Image
              source={icons.like}
              style={{height: 30, width: 30, tintColor: COLORS.primary}}
            />
            <InteractionText>Liked</InteractionText>
          </Interaction>
          <Interaction>
            <Image
              source={icons.comment}
              style={{height: 30, width: 30, tintColor: COLORS.primary}}
            />
            <InteractionText>commentText</InteractionText>
          </Interaction>
        </InteractionWrapper>
      </Card>
      <PostCard />
      <PrimaryBtn btnText="Log out" onPress={() => logout()} />
    </Container>
  );
};

const styles = StyleSheet.create({
  cover: {
    height: 100,
    width: 100,
  },
});

export default HomeScreen;

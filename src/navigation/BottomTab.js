import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import MessageScreen from '../screens/MessageScreen';
import UsermsgScreen from '../screens/UsermsgScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreatePost from '../screens/CreatePost';

const Stack = createNativeStackNavigator();

function MessageTab() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="Usermsg" component={UsermsgScreen} />
    </Stack.Navigator>
  );
}

function ProfileTab() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Profile" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

function HomeTab() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Profile" component={HomeScreen} />
      <Stack.Screen name="NewPost" component={CreatePost} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

function BottomTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={HomeTab} />
      <Tab.Screen name="Message" component={MessageTab} />
      <Tab.Screen name="Profile" component={ProfileTab} />
    </Tab.Navigator>
  );
}

export default BottomTab;

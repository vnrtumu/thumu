import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Image, View, Text} from 'react-native';

import MessageScreen from '../screens/MessageScreen';
import UsermsgScreen from '../screens/UsermsgScreen';
import HomeScreen from '../screens/HomeScreen';
import ProfileScreen from '../screens/ProfileScreen';
import CreatePost from '../screens/CreatePost';

import {icons, COLORS, FONTS} from '../constants';

const Stack = createNativeStackNavigator();

function HomeStack() {
  return (
    <Stack.Navigator
      initialRouteName="Main"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Main" component={HomeScreen} />
      <Stack.Screen name="NewPost" component={CreatePost} />
    </Stack.Navigator>
  );
}

function MessageStack() {
  return (
    <Stack.Navigator
      initialRouteName="Message"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Message" component={MessageScreen} />
      <Stack.Screen name="Usermsg" component={UsermsgScreen} />
    </Stack.Navigator>
  );
}

function ProfileStack() {
  return (
    <Stack.Navigator
      initialRouteName="ProfileStack"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="ProfileStack" component={ProfileScreen} />
    </Stack.Navigator>
  );
}

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator
      // eslint-disable-next-line react-native/no-inline-styles
      barStyle={{backgroundColor: '#000'}}
      screenOptions={{
        headerShown: false
      }}
      tabBarOptions={{showLabel: false}}>
      <Tab.Screen
        name="Home"
        component={HomeStack}
        options={{
          tabBarIcon: ({focused}) => (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.home}
                resizeMode="contain"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 10,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}>
                HOME
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Message"
        component={MessageStack}
        options={{
          tabBarIcon: ({focused}) => (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.chat}
                resizeMode="contain"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 10,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}>
                Message
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarIcon: ({focused}) => (
            // eslint-disable-next-line react-native/no-inline-styles
            <View style={{alignItems: 'center', justifyContent: 'center'}}>
              <Image
                source={icons.profile}
                resizeMode="contain"
                // eslint-disable-next-line react-native/no-inline-styles
                style={{
                  width: 25,
                  height: 25,
                  marginTop: 10,
                  tintColor: focused ? COLORS.primary : COLORS.black,
                }}
              />
              <Text
                style={{
                  color: focused ? COLORS.primary : COLORS.black,
                  ...FONTS.body5,
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTab;

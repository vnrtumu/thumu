import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import BottomTab from './BottomTab';
import SignupScreen from '../screens/SignupScreen';
import Landing from '../screens/Landing';

const Stack = createNativeStackNavigator();

function StackNav() {
  return (
    <Stack.Navigator
      initialRouteName="Landing"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="Landing" component={Landing} />
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
      <Stack.Screen name="Main" component={BottomTab} />
    </Stack.Navigator>
  );
}

export default StackNav;

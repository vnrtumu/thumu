import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import Onboarding from 'react-native-onboarding-swiper';

const Done = ({...props}) => (
  <TouchableOpacity style={{marginHorizontal: 10}} {...props}>
    <Text style={{fontSize: 16}}>Done</Text>
  </TouchableOpacity>
);
const OnboardingScreen = ({navigation}) => {
  return (
    <Onboarding
      pages={[
        {
          backgroundColor: '#000',
          image: (
            <Image source={require('../assets/images/onboarding-img1.png')} />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#4009fc',
          image: (
            <Image source={require('../assets/images/onboarding-img2.png')} />
          ),
          title: 'Onboarding2',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fff',
          image: (
            <Image source={require('../assets/images/onboarding-img3.png')} />
          ),
          title: 'Onboarding3',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
      onSkip={() => navigation.replace('Login')}
      onDone={() => navigation.navigate('Login')}
      DoneButtonComponent={Done}
    />
  );
};

const styles = StyleSheet.create({});
export default OnboardingScreen;

import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {COLORS} from '../constants';

const SocialBtn = ({imageSrc, ...rest}) => {
  return (
    <TouchableOpacity style={styles.btnWrapper} {...rest}>
      <Image source={imageSrc} style={styles.socialBtnImage} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  btnWrapper: {
    backgroundColor: '#0f0f0f',
    width: '45%',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    paddingVertical: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: COLORS.gray,
  },
  socialBtnImage: {
    tintColor: COLORS.white,
    height: 20,
    width: 20,
  },
});
export default SocialBtn;

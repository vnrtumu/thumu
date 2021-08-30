import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {COLORS, FONTS} from '../constants';
import LinearGradient from 'react-native-linear-gradient';

const PrimaryBtn = ({btnText, ...rest}) => {
  return (
    <TouchableOpacity style={styles.primaryBtn} {...rest}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#ff33cc', '#ff2ccd', '#fc7fc0']}
        style={styles.LGBlock}>
        <Text style={[styles.BtnText, {...FONTS.h3}]}>{btnText}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  primaryBtn: {
    paddingTop: 40,
    justifyContent: 'center',
  },
  LGBlock: {
    borderRadius: 10,
  },
  BtnText: {
    paddingVertical: 18,
    color: COLORS.white,
    alignItems: 'center',
    alignSelf: 'center',
    alignContent: 'center',
  },
});

export default PrimaryBtn;

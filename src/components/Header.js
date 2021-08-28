import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {icons, COLORS, FONTS} from '../constants/index';

const Header = props => {
  const navigation = useNavigation();
  return (
    <View style={[styles.headerWrapper, props.parentStyle]}>
      <TouchableOpacity
        style={styles.backBtn}
        onPress={() => navigation.goBack()}>
        <Image source={icons.back} style={styles.backText} />
      </TouchableOpacity>
      <View>
        <Text style={[styles.headerText, {...FONTS.h1}]}>
          {props.headerTitle}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    flexDirection: 'row',
  },
  backBtn: {
    width: 38,
    height: 38,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: 'gray',
    alignSelf: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  backText: {
    height: 16,
    width: 16,
    tintColor: COLORS.white,
  },
  headerText: {
    color: COLORS.white,
    marginLeft: 16,
  },
});
export default Header;

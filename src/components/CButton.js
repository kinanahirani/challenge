import React from 'react';
import {Colors} from '../theme/colors';
import {FONTS} from '../constants/messages';
import {moderateScale} from '../helpers/sizeHelpers';
import Arrow from 'react-native-vector-icons/Entypo';
import {View, Text, TouchableOpacity} from 'react-native';

const CButton = ({
  icon,
  title,
  onPress,
  iconName,
  iconSize,
  iconLibrary,
  extraStyles,
  extraFontStyles,
}) => {
  const iconLibraryMap = {
    Entypo: Arrow,
  };

  const IconComponent = iconLibraryMap[iconLibrary];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.customButton, extraStyles]}
      activeOpacity={0.7}>
      {icon && (
        <View style={styles.iconContainer}>
          <IconComponent name={iconName} size={iconSize} color={Colors.WHITE} />
        </View>
      )}
      <Text style={[styles.title, extraFontStyles]}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = {
  customButton: {
    height: moderateScale(40),
    width: moderateScale(147),
    backgroundColor: Colors.PURPLE,
    borderRadius: moderateScale(45),
    padding: moderateScale(5),
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: moderateScale(4),
  },
  title: {
    fontSize: moderateScale(14),
    color: 'white',
    fontFamily: FONTS.MontserratSemiBold,
    fontWeight: '600',
  },
};

export default CButton;

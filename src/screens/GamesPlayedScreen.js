import React from 'react';
import {Colors} from '../theme/colors';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../helpers/sizeHelpers';
import {FONTS} from '../constants/messages';
import {badgesData} from '../helpers/badgesData';
import {Text, View, Image, FlatList, StyleSheet} from 'react-native';

const GamesPlayedScreen = () => {
  return (
    <View style={{backgroundColor: Colors.BOTTOM}}>
      <FlatList
        data={badgesData}
        style={styles.container}
        keyExtractor={item => item.id}
        renderItem={({item}) => (
          <View
            style={{
              width: '90%',
              alignSelf: 'center',
              marginTop: verticalScale(16),
            }}>
            <View
              style={{
                backgroundColor: Colors.PURE_WHITE,
                padding: moderateScale(10),
                alignItems: 'center',
              }}>
              <View
                style={{
                  alignItems: 'center',
                  flexDirection: 'row',
                  width: '100%',
                }}>
                <Image
                  source={require('../assets/images/game-logo.png')}
                  style={{
                    width: moderateScale(60),
                    height: moderateScale(60),
                    resizeMode: 'contain',
                  }}
                />
                <View style={{marginLeft: horizontalScale(16)}}>
                  <Text
                    style={{
                      color: Colors.BLACK,
                      fontSize: moderateScale(14),
                      fontFamily: FONTS.MontserratSemiBold,
                    }}>
                    {item.title}
                  </Text>
                  <Text
                    style={{
                      color: Colors.GRAY,
                      fontSize: moderateScale(14),
                      fontFamily: FONTS.MontserratSemiBold,
                      marginTop: verticalScale(8),
                      width: horizontalScale(220),
                    }}>
                    {item.description}
                  </Text>
                </View>
              </View>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default GamesPlayedScreen;

const styles = StyleSheet.create({});

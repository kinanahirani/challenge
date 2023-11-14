import React from 'react';
import {Colors} from '../theme/colors';
import {moderateScale} from '../helpers/sizeHelpers';
import GameComponent from '../components/GameComponent';
import {FONTS, HEADER_TITLE} from '../constants/messages';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaView, StyleSheet, Text, View, StatusBar} from 'react-native';

const TodaysGamesScreen = () => {
  return (
    <GestureHandlerRootView style={styles.container}>
      <StatusBar
        backgroundColor={Colors.PURE_WHITE}
        barStyle={'dark-content'}
      />
      <GameComponent />
    </GestureHandlerRootView>
  );
};

export default TodaysGamesScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.PURE_WHITE,
  },
  headerTxt: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    color: Colors.BLACK,
    fontFamily: FONTS.AvenirNextBold,
    padding: moderateScale(10),
  },
});

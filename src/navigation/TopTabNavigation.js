import React from 'react';
import {Colors} from '../theme/colors';
import BadgesScreen from '../screens/BadgesScreen';
import {moderateScale} from '../helpers/sizeHelpers';
import GamesPlayedScreen from '../screens/GamesPlayedScreen';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import { FONTS } from '../constants/messages';

const TopTab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return (
    <TopTab.Navigator
      screenOptions={{
        tabBarLabelStyle: {textTransform: 'none', fontSize: moderateScale(14), fontFamily:FONTS.MontserratSemiBold},
        tabBarIndicatorStyle: {backgroundColor: Colors.PURPLE},
        tabBarActiveTintColor: Colors.PURPLE,
        tabBarInactiveTintColor: Colors.GRAY,
      }}>
      <TopTab.Screen name="Games played" component={GamesPlayedScreen} />
      <TopTab.Screen name="Badges" component={BadgesScreen} />
    </TopTab.Navigator>
  );
};

export default TopTabNavigation;

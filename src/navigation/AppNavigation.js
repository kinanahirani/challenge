import React from 'react';
import TabNavigation from './TabNavigation';
import TodaysGamesScreen from '../screens/TodaysGamesScreen';
import {NavigationContainer} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { StatusBar } from 'react-native';
import { Colors } from '../theme/colors';

const Stack = createStackNavigator();

export default AppNavigation = () => {
  return (
    <NavigationContainer>
      <StatusBar backgroundColor={Colors.PURE_WHITE} barStyle={'dark-content'} />
      <Stack.Navigator
        initialRouteName="TodaysGamesScreen"
        screenOptions={{headerShown: false}}>
        <Stack.Screen name="TodaysGamesScreen" component={TodaysGamesScreen} />
        <Stack.Screen name="TabNavigation" component={TabNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

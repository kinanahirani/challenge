import React from 'react';
import {Colors} from '../theme/colors';
import HomeScreen from '../screens/HomeScreen';
import {StyleSheet, Text, View} from 'react-native';
import ProfileScreen from '../screens/ProfileScreen';
import LeaguesScreen from '../screens/LeaguesScreen';
import ResearchScreen from '../screens/ResearchScreen';
import LeaderboardScreen from '../screens/LeaderboardScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {moderateScale, verticalScale} from '../helpers/sizeHelpers';
import {BOTTOMTABCONSTS, FONTS, ICONS} from '../constants/messages';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

const TabNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: true,
        tabBarStyle: {
          height: verticalScale(50),
          width: '100%',
        },
        tabBarItemStyle: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
        },
        tabBarLabelPosition: 'below-icon',
      }}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                marginBottom: verticalScale(3),
                color: focused ? Colors.PURPLE : Colors.GRAY,
                fontSize: moderateScale(10),
                fontFamily: FONTS.MontserratSemiBold,
              }}>
              {BOTTOMTABCONSTS.HOME}
            </Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <FontAwesome
                    name="home"
                    size={moderateScale(20)}
                    color={Colors.PURPLE}
                  />
                ) : (
                  <FontAwesome
                    name="home"
                    size={moderateScale(20)}
                    color={Colors.GRAY}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="LeaguesScreen"
        component={LeaguesScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                marginBottom: verticalScale(3),
                color: focused ? Colors.PURPLE : Colors.GRAY,
                fontSize: moderateScale(10),
                fontFamily: FONTS.MontserratSemiBold,
              }}>
              {BOTTOMTABCONSTS.LEAGUES}
            </Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <FontAwesome5
                    name="trophy"
                    size={moderateScale(20)}
                    color={Colors.PURPLE}
                  />
                ) : (
                  <FontAwesome5
                    name="trophy"
                    size={moderateScale(20)}
                    color={Colors.GRAY}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ResearchScreen"
        component={ResearchScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                marginBottom: verticalScale(3),
                color: focused ? Colors.PURPLE : Colors.GRAY,
                fontSize: moderateScale(10),
                fontFamily: FONTS.MontserratSemiBold,
              }}>
              {BOTTOMTABCONSTS.RESEARCH}
            </Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <FontAwesome
                    name="search"
                    size={moderateScale(20)}
                    color={Colors.PURPLE}
                  />
                ) : (
                  <FontAwesome
                    name="search"
                    size={moderateScale(20)}
                    color={Colors.GRAY}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="LeaderboardScreen"
        component={LeaderboardScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                marginBottom: verticalScale(3),
                color: focused ? Colors.PURPLE : Colors.GRAY,
                fontSize: moderateScale(10),
                fontFamily: FONTS.MontserratSemiBold,
              }}>
              {BOTTOMTABCONSTS.LEADERBOARD}
            </Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <MaterialIcons
                    name="leaderboard"
                    size={moderateScale(20)}
                    color={Colors.PURPLE}
                  />
                ) : (
                  <MaterialIcons
                    name="leaderboard"
                    size={moderateScale(20)}
                    color={Colors.GRAY}
                  />
                )}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{
          tabBarLabel: ({focused}) => (
            <Text
              style={{
                marginBottom: verticalScale(3),
                color: focused ? Colors.PURPLE : Colors.GRAY,
                fontSize: moderateScale(10),
                fontFamily: FONTS.MontserratSemiBold,
              }}>
              {BOTTOMTABCONSTS.PROFILE}
            </Text>
          ),
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <FontAwesome5
                    name={ICONS.USER}
                    size={moderateScale(20)}
                    color={Colors.PURPLE}
                  />
                ) : (
                  <FontAwesome5
                    name={ICONS.USER}
                    size={moderateScale(20)}
                    color={Colors.GRAY}
                  />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigation;
import {
  Image,
  Text,
  View,
  ScrollView,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import React from 'react';
import {Colors} from '../theme/colors';
import {
  moderateScale,
  verticalScale,
  horizontalScale,
} from '../helpers/sizeHelpers';
import {FONTS, MESSAGES} from '../constants/messages';
import TopTabNavigation from '../navigation/TopTabNavigation';

const HomeScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView
        contentContainerStyle={styles.container}
        showsVerticalScrollIndicator={true}>
        <View
          style={{
            padding: moderateScale(16),
          }}>
          <View style={styles.header}>
            <Image
              source={require('../assets/images/shield.png')}
              style={{width: moderateScale(30), height: moderateScale(30)}}
            />
            <Text
              style={{
                color: Colors.GRAY,
                fontSize: moderateScale(14),
                fontFamily: FONTS.MontserratSemiBold,
              }}>
              {MESSAGES.PROFILE}
            </Text>
            <Image
              source={require('../assets/images/notification.png')}
              style={{width: moderateScale(30), height: moderateScale(34)}}
            />
          </View>
          <View style={styles.profileContainer}>
            <Image
              source={require('../assets/images/profile.png')}
              style={styles.profileImage}
            />
            <View style={styles.editIconContainer}>
              <Image
                source={require('../assets/images/profile-edit.png')}
                style={styles.editIcon}
              />
            </View>
          </View>
          <View style={{alignItems: 'center', justifyContent: 'center'}}>
            <Text style={styles.nameTxt}>{MESSAGES.USER_NAME}</Text>
            <Text style={styles.pts}>{MESSAGES.POINTS}</Text>
            <Text style={styles.usrDesc}>{MESSAGES.USER_DESC}</Text>
          </View>
          <Image
            source={require('../assets/images/logout.png')}
            style={styles.logout}
          />

          <View style={styles.cardContainer}>
            <View style={styles.metricContainer}>
              <Text style={styles.metricTitle}>Under or Over</Text>
              <View style={styles.percentage}>
                <Image
                  source={require('../assets/images/up-arrow.png')}
                  style={styles.arrowIcon}
                />
                <Text style={styles.metricValue}>81%</Text>
              </View>
            </View>

            <View style={styles.metricContainer}>
              <Text style={styles.metricTitle}>Top 5</Text>
              <View style={styles.percentage}>
                <Image
                  source={require('../assets/images/down-arrow.png')}
                  style={styles.arrowIcon}
                />
                <Text style={styles.metricValue}>-51%</Text>
              </View>
            </View>

            <Image
              source={require('../assets/images/star.png')}
              style={styles.starIcon}
            />
          </View>
        </View>
        <View style={{flex: 1, backgroundColor: Colors.BOTTOM}}>
          <View
            style={{
              flex: 1,
              marginTop: verticalScale(5),
              marginBottom: verticalScale(10),
            }}>
            <TopTabNavigation />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: Colors.PURE_WHITE,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  profileContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginTop: verticalScale(33),
  },
  profileImage: {
    width: moderateScale(75),
    height: moderateScale(75),
    borderRadius: moderateScale(75) / 2,
  },
  editIconContainer: {
    position: 'absolute',
    bottom: 0,
    left: horizontalScale(190),
  },
  editIcon: {
    width: moderateScale(24),
    height: moderateScale(24),
  },
  nameTxt: {
    color: Colors.BLACK,
    fontSize: moderateScale(14),
    fontFamily: FONTS.MontserratRegular,
    marginTop: verticalScale(12),
    fontWeight: '500',
  },
  pts: {
    color: Colors.GRAY,
    fontSize: moderateScale(12),
    fontFamily: FONTS.MontserratSemiBold,
    marginTop: verticalScale(8),
  },
  usrDesc: {
    color: Colors.GRAY,
    fontSize: moderateScale(14),
    fontFamily: FONTS.MontserratSemiBold,
    marginTop: verticalScale(8),
  },
  logout: {
    width: horizontalScale(80),
    height: verticalScale(20),
    alignSelf: 'center',
    marginTop: verticalScale(20),
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: moderateScale(5),
    padding: moderateScale(20),
    borderWidth: 1,
    borderColor: Colors.BORDER,
    position: 'relative',
    marginTop: verticalScale(40),
  },
  metricContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  metricTitle: {
    fontSize: moderateScale(16),
    color: Colors.GRAY,
    fontFamily: FONTS.MontserratSemiBold,
    marginBottom: verticalScale(14),
  },
  arrowIcon: {
    width: moderateScale(32),
    height: moderateScale(32),
    resizeMode: 'contain',
  },
  metricValue: {
    fontSize: moderateScale(24),
    fontFamily: FONTS.MontserratSemiBold,
    color: Colors.GRAY_FONTS,
    marginLeft: verticalScale(12),
  },
  starIcon: {
    position: 'absolute',
    top: verticalScale(-15),
    right: horizontalScale(155),
    width: horizontalScale(30),
    height: verticalScale(30),
    resizeMode: 'contain',
  },
  percentage: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});

import React, {useCallback, useEffect, useMemo, useRef, useState} from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import {
  FONTS,
  ICONS,
  HEADINGS,
  MESSAGES,
  HEADER_TITLE,
  HEADINGS_BODY,
  BUTTONS,
} from '../constants/messages';
import {
  verticalScale,
  moderateScale,
  horizontalScale,
} from '../helpers/sizeHelpers';
import CButton from './CButton';
import {Colors} from '../theme/colors';
import {useNavigation} from '@react-navigation/native';
import InfoIcon from 'react-native-vector-icons/Feather';
import Icon from 'react-native-vector-icons/FontAwesome5';
import Clock from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomSheet from '@gorhom/bottom-sheet';

const GameComponent = () => {
  const navigation = useNavigation();
  const bottomSheetRef = useRef();
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);
  const [buttonPressedValue, setButtonPressedValue] = useState('');

  const snapPoints = useMemo(() => ['60%'], []);
  const [selectedTicket, setSelectedTicket] = useState(null); 

  const data = Array.from({length: 5}, (_, i) => i + 11); // Starting from 11 to 16

  const handleSheetChanges = useCallback(index => {
    console.log('handleSheetChanges', index);
  }, []);

  const handleButtonPress=(value)=>{
    setButtonPressedValue(value)
    setBottomSheetVisible(true)
  }

  const renderItem = ({item}) => (
    <TouchableOpacity
      style={[
        styles.ticketItem,
        item === selectedTicket ? styles.ticketItemSelected : {},
      ]}
      onPress={() => setSelectedTicket(item)}>
      <Text
        style={[
          styles.ticketLabel,
          item === selectedTicket ? styles.ticketLabelSelected : {},
        ]}>
        {item}
      </Text>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.headerTxt}>{HEADER_TITLE.TODAYS_GAMES}</Text>
      <View style={styles.gameBoxContainer}>
        <View style={styles.timeContainer}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  color: Colors.LIGHT_PURPLE,
                  fontFamily: FONTS.MontserratSemiBold,
                }}>
                {MESSAGES.UNDER_OR_OVER}
              </Text>
              <InfoIcon
                color={Colors.LIGHT_PURPLE}
                size={moderateScale(13)}
                name={ICONS.INFO}
                style={{marginLeft: horizontalScale(8)}}
              />
            </View>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingRight: moderateScale(12),
              }}>
              <Text
                style={{
                  color: Colors.LIGHT_PINK,
                  fontSize: moderateScale(12),
                  fontFamily: FONTS.MontserratSemiBold,
                }}>
                {MESSAGES.STARTING_IN}
              </Text>
              <Clock
                color={Colors.LIGHT_PURPLE}
                size={moderateScale(14)}
                name={ICONS.CLOCK}
                style={{marginLeft: horizontalScale(8)}}
              />
              <Text
                style={{
                  color: Colors.LIGHT_PINK,
                  fontSize: moderateScale(12),
                  fontFamily: FONTS.MontserratSemiBold,
                  marginLeft: horizontalScale(8),
                }}>
                {MESSAGES.TIME}
              </Text>
            </View>
          </View>
          <View
            style={{
              marginTop: verticalScale(16),
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View>
              <Text
                style={{
                  fontSize: moderateScale(14),
                  color: Colors.LIGHT_PURPLE,
                  fontFamily: FONTS.MontserratSemiBold,
                }}>
                {MESSAGES.BITCON_PRICE_TXT}
              </Text>
              <Text
                style={{
                  fontSize: moderateScale(12),
                  color: Colors.WHITE,
                  fontFamily: FONTS.MontserratExtraBold,
                }}>
                {MESSAGES.BITCOIN_PRICE}{' '}
                <Text
                  style={{
                    fontFamily: FONTS.MontserratSemiBold,
                  }}>
                  {MESSAGES.BITCOIN_PRICE_TIME}
                </Text>
              </Text>
            </View>
            <View>
              <ImageBackground
                source={require('../assets/images/Ellipse.png')}
                style={{
                  width: moderateScale(115),
                  height: moderateScale(50),
                }}>
                <Image
                  source={require('../assets/images/Bitcoin-logo.png')}
                  style={{
                    width: moderateScale(90),
                    height: moderateScale(50),
                    alignSelf: 'flex-end',
                  }}
                />
              </ImageBackground>
            </View>
          </View>
        </View>
        <View style={styles.bottomContainer}>
          <View style={styles.headings}>
            <View>
              <Text style={styles.headingTitles}>{HEADINGS.PRIZE_POOL}</Text>
              <Text style={styles.headingBody}>{HEADINGS_BODY.PRICE}</Text>
            </View>
            <View>
              <Text style={styles.headingTitles}>{HEADINGS.UNDER}</Text>
              <Text style={styles.headingBody}>{HEADINGS_BODY.UNDER}</Text>
            </View>
            <View>
              <Text style={styles.headingTitles}>{HEADINGS.OVER}</Text>
              <Text style={styles.headingBody}>{HEADINGS_BODY.OVER}</Text>
            </View>
            <View>
              <Text style={styles.headingTitles}>{HEADINGS.ENTRY_FEES}</Text>
              <View style={styles.feesContainer}>
                <Text style={styles.headingBody}>{HEADINGS_BODY.FEES}</Text>
                <Image
                  source={require('../assets/images/coin.png')}
                  style={styles.coinImg}
                />
              </View>
            </View>
          </View>
          <View style={{marginTop: verticalScale(22)}}>
            <Text
              style={{
                fontFamily: FONTS.MontserratSemiBold,
                fontSize: moderateScale(14),
                color: Colors.FONT_COLOR,
              }}>
              {MESSAGES.PREDICTION}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              marginTop: verticalScale(14),
              justifyContent: 'space-between',
            }}>
            <CButton
              title={BUTTONS.UNDER}
              icon={true}
              iconName="arrow-down"
              iconLibrary="Entypo"
              extraStyles={{backgroundColor: Colors.DARK_PURPLE}}
              iconSize={moderateScale(11)}
              onPress={()=>handleButtonPress('Under')}
            />
            <CButton
              title={BUTTONS.OVER}
              icon={true}
              iconName="arrow-up"
              iconLibrary="Entypo"
              iconSize={moderateScale(11)}
              onPress={()=>handleButtonPress('Over')}
            />
          </View>
        </View>
        <View style={styles.lastContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={styles.bottomContent}>
              <Icon
                name={ICONS.USER}
                size={moderateScale(12)}
                color={Colors.FONT_COLOR}
              />
              <Text style={styles.bottomContentTxt}>{MESSAGES.PLAYERS}</Text>
            </View>
            <View style={styles.bottomContent}>
              <Icon
                name={ICONS.CHART}
                size={moderateScale(15)}
                color={Colors.FONT_COLOR}
              />
              <Text style={styles.bottomContentTxt}>{MESSAGES.CHART}</Text>
            </View>
          </View>
          <Image
            source={require('../assets/images/bottom-img.png')}
            style={styles.bottomImg}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.countsTxt}>
              {MESSAGES.UNDER_PREDICTED_COUNTS}
            </Text>
            <Text style={styles.countsTxt}>
              {MESSAGES.OVER_PREDICTED_COUNTS}
            </Text>
          </View>
        </View>
      </View>

      {bottomSheetVisible && (
        <View style={styles.overlay}>
          <TouchableOpacity
            style={styles.overlayTouchable}
            activeOpacity={1}
            onPress={() => setBottomSheetVisible(false)}
          />
          <BottomSheet
            ref={bottomSheetRef}
            index={0}
            snapPoints={snapPoints}
            onChange={handleSheetChanges}
            style={{
              backgroundColor: Colors.LIGHT_BLACK,
              borderTopRightRadius: moderateScale(20),
              borderTopLeftRadius: moderateScale(20),
            }}>
            <View style={styles.btmSheet}>
              <Text style={styles.btmSheetTxtHeader}>
                {MESSAGES.PREDICTION_UNDER} {buttonPressedValue}
              </Text>
              <View>
                <Text
                  style={{
                    color: Colors.GRAY,
                    fontFamily: FONTS.MontserratSemiBold,
                    fontSize: moderateScale(14),
                  }}>
                  {MESSAGES.ENTRY_TICKETS}
                </Text>
              </View>
              <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={item => item.toString()}
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={styles.flatListContentContainer}
              />
              <Text
                style={{
                  fontFamily: FONTS.MontserratRegular,
                  color: Colors.GRAY,
                  fontSize: moderateScale(12),
                }}>
                {MESSAGES.YOU_CAN_WIN}
              </Text>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text
                  style={{
                    color: Colors.GREEN,
                    fontFamily: FONTS.MontserratSemiBold,
                    fontSize: moderateScale(14),
                  }}>
                  {MESSAGES.TOTAL_AMOUNT}
                </Text>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      color: Colors.BLACK,
                      fontFamily: FONTS.MontserratSemiBold,
                      fontSize: moderateScale(12),
                    }}>
                    {MESSAGES.TOTAL}
                  </Text>
                  <Image
                    source={require('../assets/images/coin.png')}
                    style={{
                      width: moderateScale(13),
                      height: moderateScale(13),
                      marginLeft: horizontalScale(8),
                    }}
                  />
                  <Text
                    style={{
                      marginLeft: horizontalScale(4),
                      color: Colors.BLACK,
                      fontFamily: FONTS.MontserratBold,
                    }}>
                    {MESSAGES.TOTAL_COINS}
                  </Text>
                </View>
              </View>
              <CButton
                title={BUTTONS.SUBMIT}
                extraStyles={{
                  width: '90%',
                  alignSelf: 'center',
                  marginTop: verticalScale(28),
                }}
                onPress={() => navigation.navigate('TabNavigation')}
              />
            </View>
          </BottomSheet>
        </View>
      )}
    </View>
  );
};

export default GameComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  gameBoxContainer: {
    height: 'auto',
    elevation: 7,
    backgroundColor: Colors.WHITE,
    marginHorizontal: moderateScale(10),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
  },
  timeContainer: {
    backgroundColor: Colors.PURPLE,
    paddingLeft: moderateScale(16),
    paddingTop: moderateScale(16),
  },
  bottomContainer: {
    paddingTop: moderateScale(10),
    paddingLeft: moderateScale(16),
    paddingRight: moderateScale(16),
    paddingBottom: moderateScale(16),
    backgroundColor: Colors.PURE_WHITE,
  },
  headings: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(10),
    justifyContent: 'space-between',
  },
  headingTitles: {
    color: Colors.GRAY,
    fontSize: moderateScale(12),
    fontFamily: FONTS.MontserratSemiBold,
  },
  headingBody: {
    fontFamily: FONTS.AvenirNext,
    fontSize: moderateScale(14),
    color: Colors.BLACK,
    fontWeight: 'bold',
    marginTop: verticalScale(8),
  },
  feesContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
  },
  coinImg: {
    width: moderateScale(13),
    height: moderateScale(13),
    marginLeft: horizontalScale(8),
    marginTop: verticalScale(8),
  },
  lastContainer: {
    backgroundColor: Colors.BOTTOM,
    paddingVertical: verticalScale(20),
    paddingHorizontal: horizontalScale(16),
  },
  bottomContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  bottomContentTxt: {
    color: Colors.FONT_COLOR,
    fontSize: moderateScale(14),
    fontFamily: FONTS.MontserratSemiBold,
    marginLeft: horizontalScale(8),
  },
  bottomImg: {
    alignSelf: 'center',
    marginVertical: verticalScale(12),
  },
  countsTxt: {
    color: Colors.GRAY,
    fontFamily: FONTS.MontserratSemiBold,
    fontSize: moderateScale(13),
  },
  btmSheet: {
    padding: moderateScale(10),
  },
  btmSheetTxtHeader: {
    fontFamily: FONTS.MontserratBold,
    color: Colors.BLACK,
    fontSize: moderateScale(16),
    marginBottom: verticalScale(28),
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: Colors.LIGHT_BLACK,
    justifyContent: 'flex-end',
  },
  overlayTouchable: {
    flex: 1,
  },
  headerTxt: {
    fontWeight: 'bold',
    fontSize: moderateScale(16),
    color: Colors.BLACK,
    fontFamily: FONTS.AvenirNextBold,
    padding: moderateScale(10),
  },
  ticketItem: {
    marginHorizontal: horizontalScale(5),
    padding: moderateScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticketItemSelected: {
    backgroundColor: Colors.BOTTOM,
  },
  ticketLabelSelected: {
    color: Colors.BLACK,
    fontFamily: FONTS.MontserratBold,
    fontSize: moderateScale(24),
  },
  ticketLabel: {
    color: Colors.FONT_COLOR,
    fontFamily: FONTS.MontserratSemiBold,
    fontSize: moderateScale(16),
  },
  flatListContentContainer: {
    paddingHorizontal: moderateScale(10),
  },
});

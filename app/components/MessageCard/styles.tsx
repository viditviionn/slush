import {StyleSheet} from 'react-native';
import {Color, FontFamily, FontSize, normalize} from '../utils/GlobalStyles';

const styles = StyleSheet.create({
  cardWrap: {
    flexDirection: 'row',
    marginVertical: normalize(5),
    marginHorizontal: normalize(10),
  },
  imageView: {
    flex: 1.5,
    // margin: normalize(10),
    alignItems: 'center',
  },
  profileImageStyle: {
    height: normalize(60),
    width: normalize(60),
    borderRadius: normalize(60),
  },
  secondView: {
    flex: 3,
    justifyContent: 'space-around'

  },
  nameText: {
    fontSize: FontSize.h6,
    fontFamily: FontFamily.BOLD,
    color: Color.black,
  },
  lasMsgText: {
    fontSize: FontSize.t1,
    fontFamily: FontFamily.MEDIUM,
    color: Color.black,
  },
  thirdView: {
    flex: 1.5,
    alignItems: 'flex-end',
    justifyContent: 'space-around'
  },
  timeText: {
    fontSize: FontSize.t2,
    fontFamily: FontFamily.REGULAR,
    color: Color.black,
  },
  countTextView: {
    height: normalize(25),
    width: normalize(25),
    borderRadius: normalize(25),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.primaryBlue,
  },
  countText: {
    fontSize: FontSize.t1,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.colorWhite,
    // padding: 10,
  },
});

export default styles;

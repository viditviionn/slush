import {StyleSheet} from 'react-native';
import {
  Color,
  FontFamily,
  FontSize,
} from '../../../../components/utils/GlobalStyles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 20,
  },
  container: {
    flex: 1,
  },
  firstView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  ticketHeaderImageStyle: {
    height: 400,
    resizeMode: 'contain',
  },
  secondView: {
    flex: 1,
  },
  descView: {
    flex: 1,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  titletext: {
    fontSize: FontSize.h3,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.darkBlue,
  },
  typeText: {
    fontSize: FontSize.h3,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.primaryBlue,
  },
  locationText: {
    fontSize: FontSize.h6,
    fontFamily: FontFamily.REGULAR,
    color: Color.calmBlack,
  },
  timeView: {
    flexDirection: 'row',
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  timeIcon: {
    height: 22,
    width: 22,
  },
  dateText: {
    fontSize: 20,
    fontFamily: FontFamily.MEDIUM,
    color: Color.calmBlack,
    marginHorizontal: 10,
  },
  countView: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  textcontainer: {
    margin: 5,
  },
  digitContainer: {
    backgroundColor: Color.primaryBlue,
    padding: 10,
    borderRadius: 10,

    shadowColor: Color.calmBlack,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  digit: {
    fontSize: FontSize.h3,
    fontFamily: FontFamily.BOLD,
    color: Color.colorWhite,
    paddingHorizontal: 8,
  },
  remainingView: {
    flexDirection: 'row',
    // justifyContent: 'space-around',
    // alignItems: 'center',
  },
  remainingtext: {
    fontSize: FontSize.h4,
    fontFamily: FontFamily.BOLD,
    color: Color.black,
    paddingHorizontal: 8,
    // backgroundColor: 'red',
    flex: 1,
    textAlign: 'center',
  },
  buttonTouch: {
    paddingVertical: 8,
    marginHorizontal: 30,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  loginText: {
    fontSize: 20,
    fontFamily: FontFamily.BOLD,
    color: Color.colorWhite,
  },
  disable: {
    opacity: 0.5,
  },
  joinTouch: {
    backgroundColor: Color.primaryBlue,
  },
  cancelTouch: {
    backgroundColor: Color.lightRed,
  },
});

export default styles;

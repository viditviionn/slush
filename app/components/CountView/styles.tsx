import {StyleSheet} from 'react-native';
import {Color, FontSize, FontFamily} from '../utils/GlobalStyles';

const styles = StyleSheet.create({
  textcontainer: {
    margin: 5,
  },
  digitContainer: {
    backgroundColor: Color.primaryBlue,
    padding: 6,
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
  },
  remainingtext: {
    fontSize: FontSize.h4,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.black,
    paddingHorizontal: 8,
    flex: 1,
    textAlign: 'center',
  },
  countView: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
});

export default styles;

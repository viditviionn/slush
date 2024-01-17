import {StyleSheet} from 'react-native';
import {Color, FontFamily, FontSize} from '../utils/GlobalStyles';

const styles = StyleSheet.create({
  emptyWarp: {
    alignItems: 'center',
  },
  imageView: {
    margin: 20,
  },
  imageStyle: {
    height: 150,
    width: 180,
    resizeMode: 'contain',
  },
  secondView: {
    margin: 15
  },
  secondHEadingtext: {
    fontSize: FontSize.h1,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.primaryBlue,
    textAlign: 'center',
  },
  secondDesctext: {
    fontSize: FontSize.h3,
    fontFamily: FontFamily.MEDIUM,
    color: Color.black,
    textAlign: 'center',
  },
  OrText: {
    fontSize: FontSize.h1,
    fontFamily: FontFamily.MEDIUM,
    color: Color.primaryBlue,
    textAlign: 'center',
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {Color, FontFamily, FontSize, normalize} from '../utils/GlobalStyles';

const styles = StyleSheet.create({
  cardwrap: {
    margin: 5,
    backgroundColor: Color.backgroundColor,
    borderRadius: 15,
  },
  imageView: {
  },
  imageStyle: {
    height: normalize(140),
    width: normalize(140),
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  descView: {
    padding: normalize(10),
  },
  nameText: {
    fontSize: FontSize.h6,
    fontFamily: FontFamily.MEDIUM,
    color: Color.black,
  },
  occupationtext: {
    fontSize: FontSize.t2,
    fontFamily: FontFamily.REGULAR,
    color: Color.calmBlack,
  },
});

export default styles;

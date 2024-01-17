import {StyleSheet} from 'react-native';
import {
  Color,
  FontFamily,
  FontSize,
  normalize,
} from '../../../../components/utils/GlobalStyles';

const styles = StyleSheet.create({
  headingdescView: {
    marginVertical: normalize(5),
    marginHorizontal: normalize(10),
  },
  headingdescText: {
    fontSize: FontSize.t1,
    fontFamily: FontFamily.MEDIUM,
    color: Color.black,
    lineHeight: normalize(16),
    textAlign: "center"
  },
  tabview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 10,
    backgroundColor: Color.backgroundColor,
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  singleTab: {
    paddingVertical: normalize(10),
    paddingHorizontal: normalize(40),
    borderRadius: 10,
    backgroundColor: Color.lightBlue,
  },
  tabHihg: {
    backgroundColor: Color.primaryBlue,
  },
  tabText: {
    fontSize: FontSize.h6,
    fontFamily: FontFamily.BOLD,
    color: Color.colorWhite,
  },
});

export default styles;

import {StyleSheet} from 'react-native';
import {Color, FontFamily} from '../../../../components/utils/GlobalStyles';

const styles = StyleSheet.create({
  signUpLogin: {
    flex: 1,
    backgroundColor: Color.colorWhite,
  },
  imageView: {
    flex: 4,
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  actionView: {
    flex: 2,
    marginTop: 20,
  },
  breakTheIce: {
    fontSize: 27,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.calmBlack,
    // fontWeight: '700',
    textAlign: 'center',
    marginVertical: 20,
  },
  buttonTouch: {
    paddingVertical: 15,
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
  registorTouch: {
    borderWidth: 1,
    borderColor: Color.primaryBlue,
  },
  loginTouch: {
    borderWidth: 3,
    borderColor: Color.primaryBlue,
    backgroundColor: Color.primaryBlue,
  },
  signUpText: {
    fontSize: 18,
    color: Color.primaryBlue,
    fontWeight: '700',
    fontFamily: FontFamily.BOLD,
  },
});

export default styles;

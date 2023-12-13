import {StyleSheet} from 'react-native';
import {Color, FontFamily} from '../../../../components/utils/GlobalStyles';

const styles = StyleSheet.create({
  loginView: {
    flex: 1,
    marginHorizontal: 20,
  },
  headingView: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoimage: {
    height: 120,
    width: 200,
  },
  inputView: {
    flex: 2,
  },
  actionView: {
    flex: 2,
  },
  headingText: {
    fontSize: 25,
    color: Color.calmBlack,
    fontFamily: FontFamily.BOLD,
  },
  descText: {
    fontSize: 20,
    color: Color.calmBlack,
    fontFamily: FontFamily.SEMI_BOLD,
    marginVertical: 10,
  },
  forgotText: {
    fontSize: 16,
    color: Color.primaryBlue,
    fontFamily: FontFamily.MEDIUM,
    // marginVertical: 10,
  },
  buttonTouch: {
    paddingVertical: 15,
    marginVertical: 30,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  loginTouch: {
    borderWidth: 3,
    borderColor: Color.primaryBlue,
    backgroundColor: Color.primaryBlue,
  },
  loginText: {
    fontSize: 20,
    fontFamily: FontFamily.BOLD,
    color: Color.colorWhite,
  },
  orContinueText: {
    fontSize: 16,
    fontFamily: FontFamily.REGULAR,
    color: Color.calmBlack,
    textAlign: 'center',
  },
  actionImages: {
    height: 60,
    width: 60,
  },
  actionTouch: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginTop: 30,
  },
  dontHaveView: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 30,
  },
  donthavetext: {
    fontSize: 17,
    fontFamily: FontFamily.MEDIUM,
    color: Color.calmBlack,
    textAlign: 'center',
    fontWeight: '600',
  },
  highlight: {
    color: Color.primaryBlue,
  },
});

export default styles;

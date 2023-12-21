import {StyleSheet} from 'react-native';
import {Color, FontFamily} from '../../../../components/utils/GlobalStyles';

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
    height: 300,
    width: '100%',
    resizeMode: 'contain',
  },
  secondView: {
    flex: 1,
  },
  buttonTouch: {
    paddingVertical: 8,
    marginHorizontal: 30,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Color.primaryBlue,

  },
  loginText: {
    fontSize: 20,
    fontFamily: FontFamily.BOLD,
    color: Color.colorWhite,
  },
  infoView: {
    alignItems: 'center',
    marginBottom: 30
  },
  headingText: {
    fontSize: 25,
    fontFamily: FontFamily.BOLD,
    textAlign: 'center',
    marginVertical: 20
  },
  subHeadingText: {
    fontSize: 20,
    fontFamily: FontFamily.MEDIUM,
    textAlign: 'center',
  },
  leaveButtonView:{
    justifyContent: 'flex-end',
  }
});

export default styles;

import {StyleSheet} from 'react-native';
import {
  Color,
  FontFamily,
  FontSize,
  normalize,
} from '../../../components/utils/GlobalStyles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    width: '100%',
  },
  bottomBackView: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    left: 0,
  },
  backImageStyle: {
    resizeMode: 'cover',
    width: '100%',
  },
  firstView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circularDashedLoader: {
    width: 220,
    height: 220,
    borderRadius: 110,
    borderWidth: 10,
    borderColor: '#3498db',
    borderStyle: 'dashed',
    justifyContent: 'center',
    alignItems: 'center',
  },
  eventStartText: {
    fontSize: FontSize.h6,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.calmBlack,
    marginBottom: normalize(10),
    textAlign: 'center',
  },
  secondView: {
    flex: 1,
    justifyContent: 'space-around',
  },
  dashedCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: Color.primaryBlue,
    marginRight: 10,
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 15,
    marginHorizontal: normalize(20),
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
  joinTouch: {
    backgroundColor: Color.primaryBlue,
  },
  waitingText: {
    fontSize: FontSize.h6,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.calmBlack,
    textAlign: 'center',
    marginHorizontal: 20,
  },

  countDounView: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  counttext: {
    fontSize: FontSize.large,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.calmBlack,
    textAlign: 'center',
  },
});

export default styles;

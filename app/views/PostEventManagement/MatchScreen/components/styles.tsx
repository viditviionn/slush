import {StyleSheet} from 'react-native';
import {
  Color,
  FontFamily,
  FontSize,
  normalize,
} from '../../../../components/utils/GlobalStyles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    margin: 20,
  },
  headingView: {
    flex: 1,
    marginHorizontal: 20,
  },
  headingtext: {
    fontSize: 36,
    fontFamily: FontFamily.SEMI_BOLD,
    textAlign: 'center',
  },
  highlightText: {
    color: Color.primaryBlue,
  },
  midSectionView: {
    flex: 3,
  },
  bottomSectionView: {
    flex: 1,
  },
  backgroundImagestyle: {
    resizeMode: 'cover',
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  avatarView: {},
  profileImageStyle: {
    height: 160,
    width: 160,
    borderRadius: 150,
  },
  userName: {
    fontSize: FontSize.h1,
    fontFamily: FontFamily.SEMI_BOLD,
    textAlign: 'center',
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
  leaveText: {
    fontSize: 20,
    fontFamily: FontFamily.BOLD,
    color: Color.colorWhite,
  },
  heartFillView: {
    position: 'absolute',
    top: 0,
    bottom: normalize(20),
    left: 0,
    right: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  heartFillImageStyle: {
    height: normalize(110),
    width: normalize(110),
  },
  sayHiButton: {},
  viewMatchesButton: {
    backgroundColor: Color.darkBlue,
  },
});

export default styles;

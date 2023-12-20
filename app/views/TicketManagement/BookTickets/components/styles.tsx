import {StyleSheet} from 'react-native';
import {
  Color,
  FontFamily,
  FontSize,
} from '../../../../components/utils/GlobalStyles';

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  firstView: {
    // flex: 1,
    alignItems: 'center',
  },
  ticketHeaderImageStyle: {
    height: 300,
    resizeMode: 'contain',
  },
  secondView: {
    flex: 1,
    margin: 20,
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
  detailView: {
    flex: 1.5,
  },
  HeadingText: {
    fontSize: 22,
    fontFamily: FontFamily.BOLD,
    color: Color.darkBlue,
  },
  detailText: {
    fontSize: 16,
    fontFamily: FontFamily.MEDIUM,
    color: Color.calmBlack,
  },
  participantsView: {
    flex: 1,
    marginVertical: 20,
  },
  buttonTouch: {
    paddingVertical: 8,
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
  loginTouch: {
    borderWidth: 3,
    borderColor: Color.primaryBlue,
    backgroundColor: Color.primaryBlue,
  },
  dashedCircle: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderWidth: 2,
    borderStyle: 'dashed',
    borderColor: Color.primaryBlue,
  },
  avatarView: {
    flexDirection: 'row',
    marginTop: 15,
  },
});

export default styles;

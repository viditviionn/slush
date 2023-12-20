import {StyleSheet} from 'react-native';
import {
  Color,
  FontFamily,
  normalize,
} from '../../../components/utils/GlobalStyles';

const styles = StyleSheet.create({
  mainContainer: {
    padding: 20,
    minHeight: '100%',
    marginBottom: 20,
  },
  profileView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profileImage: {
    height: 60,
    width: 60,
    borderRadius: 60,
    margin: 10,
  },
  nameView: {},
  profilenameText: {
    fontSize: 24,
    fontFamily: FontFamily.BOLD,
    color: Color.calmBlack,
  },
  profiledescText: {
    fontSize: 20,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.calmBlack,
  },
  locationView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  locationImage: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
  locationText: {
    fontSize: 20,
    fontFamily: FontFamily.MEDIUM,
    color: Color.primaryBlue,
    marginLeft: 10,
  },
  myEventsView: {},
  myEventHeading: {},
  headingText: {
    fontSize: 24,
    fontFamily: FontFamily.BOLD,
    color: Color.calmBlack,
  },
  upcomingEventsView: {
    marginBottom: 20,
    flex: 1,
  },
  upcomingEventsHeadingView: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  viewAllText: {
    fontSize: 20,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.calmBlack,
  },
  nextEventView: {
    backgroundColor: Color.lightBlue,
    borderRadius: 10,
  },
  nextEventHeadinText: {
    fontSize: 20,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.calmBlack,
    textAlign: 'center',
  },
  countWrap: {},
  nextEventButtonView: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  nextEventButton: {
    width: normalize(140),
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginVertical: 10,
    borderRadius: 10,
  },
  unableButton: {
    backgroundColor: Color.calmBlack,
  },
  joinButton: {
    backgroundColor: Color.primaryBlue
  },
  nextEventButtonText: {
    fontSize: normalize(16),
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.colorWhite,
    textAlign: 'center',
  },
});

export default styles;

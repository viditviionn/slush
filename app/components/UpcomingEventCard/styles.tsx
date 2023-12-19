import {StyleSheet} from 'react-native';
import {Color, FontFamily} from '../utils/GlobalStyles';

const styles = StyleSheet.create({
  mainContainer: {
    margin: 10,
    borderRadius: 20,
    shadowColor: '#a3a3a3',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,

    elevation: 20,

    backgroundColor: '#fff',
    marginBottom: 20,
    flex: 1,
  },
  imageView: {},
  eventImageStyle: {
    height: 180,
    width: '100%',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  descView: {
    margin: 15,
  },
  titleView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 20,
    fontFamily: FontFamily.BOLD,
    // color: Color.calmBlack,
  },
  locationText: {
    fontSize: 20,
    fontFamily: FontFamily.BOLD,
    // color: Color.calmBlack,
  },
  titleTextView: {
    width: '50%',
  },
  locationView: {
    flexDirection: 'row',
    width: '50%',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  locationImage: {},
  timeText: {
    fontSize: 18,
    fontFamily: FontFamily.SEMI_BOLD,
    // color: Color.calmBlack,
  },
  placesRemainText: {
    fontSize: 16,
    fontFamily: FontFamily.MEDIUM,
    marginTop: 5,
  },
  availableView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  genderView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 10,
    marginVertical: 10,
  },
  genderImage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    marginRight: 5,
  },
  availabiltyText: {
    fontSize: 18,
    fontFamily: FontFamily.SEMI_BOLD,
    // color: Color.calmBlack,
    marginTop: 5,
  },
  genderWrap: {
    flexDirection: 'row',
    width: '70%',
    flexWrap: 'wrap',
  },
  interestView: {
    alignItems: 'center',
    backgroundColor: Color.primaryBlue,
    paddingVertical: 10,
    paddingHorizontal: 18,
    borderRadius: 25,
  },
  interestText: {
    fontSize: 18,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.colorWhite,
  },
});

export default styles;

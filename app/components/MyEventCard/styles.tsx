import {StyleSheet} from 'react-native';
import {Color, FontFamily} from '../utils/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 10,
    backgroundColor: Color.colorWhite,
    borderRadius: 10,

    shadowColor: '#d4ecfc',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  myEventImage: {
    height: 100,
    width: 120,
    borderRadius: 10,
  },
  eventName: {
    fontSize: 20,
    fontFamily: FontFamily.BOLD,
    color: Color.black,
    // textAlign: 'center',
  },
  descView: {
    marginHorizontal: 20,
    justifyContent: 'space-around',
  },
  dateView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  timeIcon: {
    height: 20,
    width: 20,
  },
  dateText: {
    fontSize: 17,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.black,
    margin: 5,
  },
});

export default styles;

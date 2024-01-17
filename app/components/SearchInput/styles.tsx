import {StyleSheet} from 'react-native';
import {Color, normalize} from '../utils/GlobalStyles';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: Color.backgroundColor,
    borderRadius: 10,
    paddingHorizontal: 15,
    paddingVertical: 5,
    margin: 10,
  },
  icon: {
    width: 25,
    height: 25,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: normalize(30),
  },
});

export default styles;

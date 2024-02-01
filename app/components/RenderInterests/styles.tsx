import {StyleSheet} from 'react-native';
import {Color, FontSize} from '../utils/GlobalStyles';

const styles = StyleSheet.create({
  interestView: {
    padding: 10,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginRight: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Color.primaryBlue,
  },
  interestText: {
    fontSize: FontSize.t1,
    color: Color.primaryBlue,
    fontWeight: '600'
  },
});

export default styles;

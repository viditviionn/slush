import {StyleSheet} from 'react-native';
import {
  Color,
  FontFamily,
  FontSize,
  normalize,
} from '../../../../components/utils/GlobalStyles';

const styles = StyleSheet.create({
  bottomSection: {
    margin: normalize(10),
  },
  nameSection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  detailView: {
    width: '60%',
  },
  actionView: {
    width: '40%',
  },
  nameText: {
    fontSize: FontSize.h5,
    color: Color.black,
  },
  jobText: {
    fontSize: FontSize.t1,
    color: Color.calmBlack,
  },
  locationText: {
    fontSize: FontSize.t1,
    color: Color.calmBlack,
  },
  actionButton: {
    margin: normalize(5),
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 5,
    alignItems: 'center',
    backgroundColor: Color.primaryBlue,
  },
  actionButtonText: {
    fontSize: FontSize.t1,
    color: Color.colorWhite,
    fontWeight: '600',
    textAlign: 'center',
  },
  aboutSection: {
    backgroundColor: Color.lightBlue2,
    padding: 10,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 10,
    overflow: 'hidden',
  },
  interestSection: {
    backgroundColor: Color.lightBlue2,
    padding: 10,
    paddingVertical: 20,
    borderRadius: 10,
    marginTop: 10,
    overflow: 'hidden',
  },
  aboutMeHeadingText: {
    fontSize: FontSize.h6,
    color: Color.black,
    fontWeight: '600',
    marginBottom: 10,
  },
  aboutMeText: {
    fontSize: FontSize.t1,
    color: Color.calmBlack,
  },
  imageStyle: {
    position: 'absolute',
    height: 130,
    width: 100,
    opacity: 0.3,
    right: 0,
    tintColor: Color.primaryBlue,
  },
  imageStyle2: {
    position: 'absolute',
    height: 160,
    width: 100,
    opacity: 0.3,
    tintColor: Color.primaryBlue,
    transform: [{ rotate: '90deg'}],
    right: 20,
  },
  interestHeadingText: {
    fontSize: FontSize.h6,
    color: Color.black,
    fontWeight: '600',
    marginBottom: 10,
  },
});

export default styles;

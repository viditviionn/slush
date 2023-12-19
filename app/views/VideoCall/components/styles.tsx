import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  button: {
    paddingHorizontal: 25,
    paddingVertical: 4,
    fontWeight: 'bold',
    color: '#ffffff',
    backgroundColor: '#0055cc',
    margin: 5,
  },
  main: {
    flex: 1,
    alignItems: 'center',
  },
  scroll: {
    flex: 1,
    backgroundColor: '#ddeeff',
    width: '100%',
    height: '100%',
  },
  scrollContainer: {
    alignItems: 'center',
    flex: 1,
  },
  videoView: {
    width: '100%',
    height: height,
  },
  btnContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 50,
    zIndex: 10,
  },
  head: {fontSize: 20},
  info: {
    backgroundColor: '#ffffe0',
    color: '#0000ff',
  },

  firstView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  secondView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '90%',
  },
  likedislikeView: {
    padding: 10,
    borderRadius: 10,
  },
  endCallImage: {
    height: 80,
    width: 80,
  },
  likedislikeImageStyle: {
    height: 30,
    width: 30,
  },
  secondImageView: {
    borderRadius: 20,
  },
  secondViewImages: {
    height: 50,
    width: 50,
  },
});

export default styles;

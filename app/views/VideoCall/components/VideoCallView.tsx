import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {RtcSurfaceView} from 'react-native-agora';
import styles from './styles';
import {images} from '../../../assets/images';

const VideoCallView = (props: any) => {
  const {join, leave, isJoined, remoteUid, message} = props;
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.btnContainer}>
        {/* <Text onPress={join} style={styles.button}>
          Join
        </Text>
        <Text onPress={leave} style={styles.button}>
          Leave
        </Text> */}
        <View style={styles.firstView}>
          <View style={[styles.likedislikeView, {backgroundColor: '#F61A00'}]}>
            <Image
              source={images.dislike}
              style={styles.likedislikeImageStyle}
            />
          </View>
          <TouchableOpacity onPress={leave}>
            <Image source={images.endCall} style={styles.endCallImage} />
          </TouchableOpacity>
          <View style={[styles.likedislikeView, {backgroundColor: '#AAF76C'}]}>
            <Image source={images.like} style={styles.likedislikeImageStyle} />
          </View>
        </View>
        <View style={styles.secondView}>
          <View style={styles.secondImageView}>
            <Image source={images.mic} style={styles.secondViewImages} />
          </View>
          <View style={styles.secondImageView}>
            <Image source={images.video} style={styles.secondViewImages} />
          </View>
        </View>
      </View>
      <ScrollView
        style={styles.scroll}
        contentContainerStyle={styles.scrollContainer}>
        {isJoined && remoteUid !== 0 ? (
          <React.Fragment key={remoteUid}>
            <RtcSurfaceView
              canvas={{uid: remoteUid}}
              style={styles.videoView}
            />
          </React.Fragment>
        ) : (
          <Text>Waiting for a remote user to join</Text>
        )}
        <Text style={styles.info}>{message}</Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default VideoCallView;

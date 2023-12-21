import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {RtcSurfaceView} from 'react-native-agora';
import styles from './styles';
import {images} from '../../../assets/images';

const VideoCallView = (props: any) => {
  const {join, leave, isJoined, remoteUid, message} = props;
  const CountdownTimer = () => {
    // 3 minutes in seconds
    const initialTime = 3 * 60;

    // State to keep track of remaining time
    const [timeLeft, setTimeLeft] = useState(initialTime);

    useEffect(() => {
      // Exit early when we reach 0
      if (timeLeft === 0) {
        leave();
        return;
      }

      // Save interval id to clear the interval when the component unmounts
      const intervalId = setInterval(() => {
        setTimeLeft(timeLeft - 1);
      }, 1000);

      // Clear interval on re-render to avoid memory leaks
      return () => clearInterval(intervalId);
      // Add timeLeft as a dependency to re-run the effect when we update it
    }, [timeLeft]);

    return (
      <View>
        <Text style={styles.countText}>{formatTime(timeLeft)}</Text>
      </View>
    );
  };

  // Helper function to format time in MM:SS format
  const formatTime = (time: any) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(
      2,
      '0',
    )}`;
  };
  return (
    <SafeAreaView style={styles.main}>
      <View style={styles.timerView}>
        <CountdownTimer />
      </View>
      <View style={styles.btnContainer}>
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

import {
  View,
  Text,
  Image,
  ActivityIndicator,
  TouchableOpacity,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Header from '../../../components/Header';
import {images} from '../../../assets/images';
import * as Animatable from 'react-native-animatable';

const WaitingView = (props: any) => {
  const {eventData} = props?.route?.params;
  const {onVideoCall} = props;
  console.log('route?.params: ', props?.route?.params);
  const [date, setDate] = useState('0');
  console.log('date: ', date);
  console.log('eventData: ', eventData);
  const CountDown = (count: any) => {
    return (
      <View style={styles.countDounView}>
        <View style={{position: 'absolute'}}>
          <Animatable.View
            animation="rotate"
            iterationCount="infinite"
            easing="linear"
            duration={5000}
            style={styles.circularDashedLoader}></Animatable.View>
        </View>
        <Text style={styles.counttext}>{date}</Text>
      </View>
    );
  };
  let countdownInterval: any;
  useEffect(() => {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval);
  }, [eventData?.startsAt]);
  function updateCountdown() {
    // Convert timestamp to milliseconds
    const timestampInMillis = eventData?.startsAt * 1000;

    // Create a new Date object
    const eventDate: any = new Date(timestampInMillis);

    // Get the current date
    const currentDate: any = new Date();

    // Calculate the difference in milliseconds
    const difference = eventDate - currentDate;

    // Check if the event has already occurred
    if (difference <= 0) {
      console.log('Event has already occurred.');
      setDate('0');
      onVideoCall();
      clearInterval(countdownInterval);
      return;
    }

    // Calculate days, hours, and minutes
    const minutes = Math.floor(difference / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);
    // Format the result
    function formatTime(value: number, unit: string) {
      // Add leading zero if the value is a single digit
      return value < 10 ? `${value}${unit}` : `${value}${unit}`;
    }
    let formattedTime = '';

    if (minutes >= 1) {
      formattedTime = `${formatTime(minutes, 'm')}`;
    } else {
      formattedTime = `${formatTime(seconds, 's')}`;
    }
    setDate(formattedTime);
  }
  return (
    <View style={styles.mainContainer}>
      <Header HeaderText={'Waiting Room'} />
      <View style={{height: 100, justifyContent: 'center'}}>
        <Text style={styles.eventStartText}>The event is starting in..</Text>
      </View>
      <View style={styles.firstView}>
        <CountDown />
      </View>
      <View style={styles.secondView}>
        <Text style={styles.waitingText}>
          Waiting and not sure what to do? Check out the Event guide below.
        </Text>
        <View style={styles.avatarView}>
          {eventData?.participants?.map((item: any, index: any) => {
            console.log('item: ', item?.user?.profilePictures[0]?.key);
            return (
              <View key={index} style={styles.dashedCircle}>
                {item?.user?.profilePictures[0]?.key && (
                  <Image
                    source={{uri: item?.user?.profilePictures[0]?.key}}
                    style={{
                      height: 50,
                      width: 50,
                      resizeMode: 'cover',
                      zIndex: 100,
                      borderRadius: 50,
                    }}
                  />
                )}
              </View>
            );
          })}
          {/* <View style={styles.dashedCircle}></View>
          <View style={styles.dashedCircle}></View>
          <View style={styles.dashedCircle}></View>
          <View style={styles.dashedCircle}></View> */}
        </View>
        <TouchableOpacity style={[styles.buttonTouch, styles.joinTouch]}>
          <Text style={styles.loginText}>Event Guide</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomBackView}>
        <Image source={images.Rectangle} style={styles.backImageStyle} />
      </View>
    </View>
  );
};

export default WaitingView;

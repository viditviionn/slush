import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Header from '../../../../components/Header';
import {images} from '../../../../assets/images';
import {getFormattedDate} from '../../../../components/utils/constants';

const ViewTicketsView = (props: any) => {
  const {detailData, handleJoinEventPress} = props;
  const [date, setDate] = useState('00-00-00');
  const [timeDifference, setTimeDifference] = useState<any>(0);
  var countdownInterval: any;
  useEffect(() => {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval);
  }, [detailData?.startsAt]);
  function updateCountdown() {
    // Convert timestamp to milliseconds
    const timestampInMillis = detailData?.startsAt * 1000;

    // Create a new Date object
    const eventDate: any = new Date(timestampInMillis);

    // Get the current date
    const currentDate: any = new Date();

    // Calculate the difference in milliseconds
    const difference = eventDate - currentDate;
    setTimeDifference(difference);

    // Check if the event has already occurred
    if (difference <= 0) {
      console.log('Event has already occurred.');
      setDate('00-00-00');
      clearInterval(countdownInterval);
      return;
    }

    // Calculate days, hours, and minutes
    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60),
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

    // Format the result
    function formatNumber(number: any) {
      // Add leading zero if the number is a single digit
      return number < 10 ? `0${number}` : `${number}`;
    }
    const formattedTime = `${formatNumber(days)}-${formatNumber(
      hours,
    )}-${formatNumber(minutes)}`;
    setDate(formattedTime);
  }
  const BlueSquareDigit = (props: any) => {
    return (
      <View style={styles.textcontainer}>
        <View style={styles.digitContainer}>
          <Text style={styles.digit}>{props?.digit}</Text>
        </View>
      </View>
    );
  };
  const CountView = React.memo(({date}: any) => {
    return (
      <View style={styles.countView}>
        <View style={styles.rowContainer}>
          {date.split('-').map((count: any, index: any) => {
            return (
              <View style={{flexDirection: 'row'}} key={index}>
                {count.split('').map((digit: any, index: any) => {
                  return (
                    <View key={index}>
                      <BlueSquareDigit digit={digit} index={index} />
                    </View>
                  );
                })}
              </View>
            );
          })}
        </View>
        <View style={styles.remainingView}>
          <Text style={styles.remainingtext}>Days</Text>
          <Text style={styles.remainingtext}>Hours</Text>
          <Text style={styles.remainingtext}>Minutes</Text>
        </View>
      </View>
    );
  });
  return (
    <View style={styles.mainContainer}>
      <Header HeaderText={'Ticket'} />
      <View style={styles.container}>
        <View style={styles.firstView}>
          <Image
            source={images.ticketHeaderImage}
            style={styles.ticketHeaderImageStyle}
          />
        </View>
        <View style={styles.secondView}>
          <View style={styles.descView}>
            <View style={styles.titleView}>
              <Text style={styles.titletext}>{detailData?.title}</Text>
              <Text style={styles.typeText}>FREE</Text>
            </View>
            <Text style={styles.locationText}>{detailData?.address}</Text>
            <View style={styles.timeView}>
              <View style={styles.dateView}>
                <Image source={images.calender} style={styles.timeIcon} />
                <Text style={styles.dateText}>
                  {getFormattedDate(detailData?.startsAt, 'date')}
                </Text>
              </View>
              <View style={styles.dateView}>
                <Image source={images.clock} style={styles.timeIcon} />
                <Text style={styles.dateText}>
                  {getFormattedDate(detailData?.startsAt, 'time')}
                </Text>
              </View>
            </View>
          </View>
          <CountView date={date} />
          <View>
            <TouchableOpacity
              style={[
                styles.buttonTouch,
                styles.joinTouch,
                timeDifference / 1000 >= 960 && styles.disable,
              ]}
              onPress={() => handleJoinEventPress(detailData)}
              disabled={timeDifference / 1000 >= 960}
            >
              <Text style={styles.loginText}>Join Event</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={[styles.buttonTouch, styles.cancelTouch]}
              onPress={() => {}}>
              <Text style={styles.loginText}>Cancel Event</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ViewTicketsView;

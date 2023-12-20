import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import styles from './styles';

const CountView = React.memo((props: any) => {
  const {startsAt, setTimeDifference} = props;
  const [date, setDate] = useState('00-00-00');
  var countdownInterval: any;

  useEffect(() => {
    updateCountdown();
    countdownInterval = setInterval(updateCountdown, 1000);
    return () => clearInterval(countdownInterval);
  }, [startsAt]);
  function updateCountdown() {
    // Convert timestamp to milliseconds
    const timestampInMillis = startsAt * 1000;

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
  if (isNaN(Date.parse(date))) {
    // Render some placeholder or return null if the date is invalid
    setDate('00-00-00');
    return;
  }
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

export default CountView;

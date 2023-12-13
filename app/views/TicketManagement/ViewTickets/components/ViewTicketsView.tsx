import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import Header from '../../../../components/Header';
import {images} from '../../../../assets/images';
import {getFormattedDate} from '../../../../components/utils/constants';

const ViewTicketsView = () => {
  const date = '02-06-23';
  const BlueSquareDigit = (props: any) => {
    return (
      <View style={styles.textcontainer}>
        <View style={styles.digitContainer}>
          <Text style={styles.digit}>{props?.digit}</Text>
        </View>
      </View>
    );
  };
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
              <Text style={styles.titletext}>Upto 5 dates</Text>
              <Text style={styles.typeText}>FREE</Text>
            </View>
            <Text style={styles.locationText}>London</Text>
            <View style={styles.timeView}>
              <View style={styles.dateView}>
                <Image source={images.calender} style={styles.timeIcon} />
                <Text style={styles.dateText}>
                  {getFormattedDate(123123123123, 'date')}
                </Text>
              </View>
              <View style={styles.dateView}>
                <Image source={images.clock} style={styles.timeIcon} />
                <Text style={styles.dateText}>
                  {getFormattedDate(123123123123, 'time')}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.countView}>
            <View style={styles.rowContainer}>
              {date.split('-').map((count, index) => {
                return (
                  <View style={{flexDirection: 'row'}}>
                    {count.split('').map((digit: any) => {
                      return (
                        <View style={{}}>
                          <BlueSquareDigit
                            key={index}
                            digit={digit}
                            index={index}
                          />
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
          <View>
            <TouchableOpacity
              style={[styles.buttonTouch, styles.loginTouch]}
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

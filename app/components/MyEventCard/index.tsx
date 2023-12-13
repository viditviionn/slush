import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {images} from '../../assets/images';
import {getFormattedDate} from '../utils/constants';

const MyEventCard = (props: any) => {
  const {item, handleMyEventPress} = props;
  console.log('item: MyEventCard', item);
  return (
    <TouchableOpacity
      onPress={() => handleMyEventPress(item?.eventId)}
      style={styles.container}>
      <Image source={images.myEventsImage1} style={styles.myEventImage} />
      <View style={styles.descView}>
        <Text style={styles.eventName}>{item?.title}</Text>
        <View style={styles.dateView}>
          <Image source={images.calender} style={styles.timeIcon} />
          <Text style={styles.dateText}>
            {getFormattedDate(item?.endsAt, 'date')}
          </Text>
        </View>
        <View style={styles.dateView}>
          <Image source={images.clock} style={styles.timeIcon} />
          <Text style={styles.dateText}>
            {getFormattedDate(item?.endsAt, 'time')}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MyEventCard;

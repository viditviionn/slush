import {Image, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import styles from './styles';
import {images} from '../../assets/images';
import {getFormattedDate} from '../utils/constants';

const UpcomingEventCard = (props: any) => {
  const {item, handleUpcomingEventPress} = props;
  return (
    <TouchableOpacity
      style={[styles.mainContainer]}
      onPress={() => handleUpcomingEventPress(item?.eventId)}>
      <View style={styles.imageView}>
        <Image
          source={{uri: item?.coverImage}}
          style={styles.eventImageStyle}
        />
      </View>
      <View style={styles.descView}>
        <View style={styles.titleView}>
          <View style={styles.titleTextView}>
            <Text style={styles.titleText}>{item?.title}</Text>
          </View>
          <View style={styles.locationView}>
            <Image
              source={images.location_black}
              style={styles.locationImage}
            />
            <Text style={styles.locationText}>{item?.address}</Text>
          </View>
        </View>
        <Text style={styles.timeText}>{`Time: ${getFormattedDate(
          item?.startsAt,
          'time',
        )}`}</Text>
        <Text style={styles.timeText}>
          Age Group: {item?.minAge}-{item?.maxAge}
        </Text>
        {/* <Text style={styles.placesRemainText}>Places remaining:</Text>
        <View style={styles.availableView}>
          <View style={styles.genderWrap}>
            <View style={styles.genderView}>
              <Image source={images.male} style={styles.genderImage} />
              <Text style={styles.availabiltyText}>Available</Text>
            </View>
            <View style={styles.genderView}>
              <Image source={images.female} style={styles.genderImage} />
              <Text style={styles.availabiltyText}>Available</Text>
            </View>
          </View>
          <View style={styles.interestView}>
            <Text style={styles.interestText}>{item?.gender}</Text>
          </View>
        </View> */}
      </View>
    </TouchableOpacity>
  );
};

export default UpcomingEventCard;

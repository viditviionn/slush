import {View, Text, Image} from 'react-native';
import React from 'react';
import styles from './styles';
import {images} from '../../assets/images';

const MathcesEmptyComponent = () => {
  return (
    <View style={styles.emptyWarp}>
      <View style={styles.imageView}>
        <Image style={styles.imageStyle} source={images.noMatches} />
      </View>
      <View style={styles.secondView}>
        <Text style={styles.secondHEadingtext}>No-one showing? </Text>
        <Text style={styles.secondDesctext}>
          Attend more events to increase your chances of matching with others{' '}
        </Text>
        <Text style={styles.OrText}>OR </Text>
        <Text style={styles.secondDesctext}>
          Swipe and match through the video feed.{' '}
        </Text>
      </View>
    </View>
  );
};

export default MathcesEmptyComponent;

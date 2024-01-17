import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';

const MatchCard = (props: any) => {
  const {item} = props;
  console.log('item: ', item);
  return (
    <TouchableOpacity style={styles.cardwrap}>
      <View style={styles.imageView}>
        <Image source={{uri: item?.profileImage}} style={styles.imageStyle}/>
      </View>
      <View style={styles.descView}>
        <Text style={styles.nameText}>{item?.name}, {item?.age}</Text>
        <Text style={styles.occupationtext}>{item?.occupation}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default MatchCard;

import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import styles from './styles';
import {formatMessageTime} from '../utils/constants';

const MessageCard = (props: any) => {
  const {item} = props;
  console.log('item: ', item);
  console.log(
    'formatMessageTime(item?.time): ',
    formatMessageTime(item?.lastMessageTime),
  );

  return (
    <TouchableOpacity style={styles.cardWrap}>
      <View style={styles.imageView}>
        <Image
          source={{uri: item?.profileImage}}
          style={styles.profileImageStyle}
        />
      </View>
      <View style={styles.secondView}>
        <Text style={styles.nameText} numberOfLines={1}>{item?.name}</Text>
        <Text style={styles.lasMsgText} numberOfLines={1}>{item?.lastMessage}</Text>
      </View>
      <View style={styles.thirdView}>
        <Text style={styles.timeText}>
          {formatMessageTime(item?.lastMessageTime)}
        </Text>
        <View style={styles.countTextView}>
          <Text style={styles.countText}>{item?.messageCount}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MessageCard;

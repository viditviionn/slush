import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const RenderInterests = (props: any) => {
  const {item} = props;
  console.log('item: ', item);
  return (
    <View style={styles.interestView}>
      <Text style={styles.interestText}>{item}</Text>
    </View>
  );
};

export default RenderInterests;

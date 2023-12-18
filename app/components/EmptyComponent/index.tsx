import {View, Text} from 'react-native';
import React from 'react';
import styles from './styles';

const EmptyComponent = (props: any) => {
  const {message} = props;
  return (
    <View style={styles.emptyView}>
      <Text style={styles.emptyText}>{message}</Text>
    </View>
  );
};

export default EmptyComponent;

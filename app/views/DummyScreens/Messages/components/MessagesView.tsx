import {View, Text} from 'react-native';
import React from 'react';
import Header from '../../../../components/Header';
import SearchInput from '../../../../components/SearchInput';
import styles from './styles';

const MessagesView = () => {
  return (
    <View style={styles.container}>
      <Header HeaderText={'Messages'} />
      <SearchInput />
    </View>
  );
};

export default MessagesView;

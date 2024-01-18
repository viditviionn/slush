import {View, Text, FlatList, ScrollView} from 'react-native';
import React from 'react';
import Header from '../../../../components/Header';
import SearchInput from '../../../../components/SearchInput';
import styles from './styles';
import {DUMMY_MESSAGE_DATA} from '../../../../components/utils/Dummy';
import MessageCard from '../../../../components/MessageCard';

const MessagesView = () => {
  return (
    <View style={styles.container}>
      <Header HeaderText={'Messages'} />
      <SearchInput />
      <FlatList 
        data={DUMMY_MESSAGE_DATA}
        contentContainerStyle={{flex: 1}}
        renderItem={({item}) => <MessageCard item={item} />}
      />
    </View>
  );
};

export default MessagesView;

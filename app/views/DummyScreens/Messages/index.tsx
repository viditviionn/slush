import {View, Text} from 'react-native';
import React from 'react';
import MessagesView from './components/MessagesView';

const Messages = () => {
  return (
    <View style={{flex: 1}}>
      <MessagesView />
    </View>
  );
};

export default Messages;

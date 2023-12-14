import {View, Text} from 'react-native';
import React from 'react';
import WaitingView from './components/WaitingView';

const WaitingRoom = ({navigation, route}: any) => {
  const onVideoCall = () => {
    navigation.navigate('VideoCall');
  };
  return (
    <WaitingView
      navigation={navigation}
      route={route}
      onVideoCall={onVideoCall}
    />
  );
};

export default WaitingRoom;

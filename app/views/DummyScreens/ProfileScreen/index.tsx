import {View, Text} from 'react-native';
import React from 'react';
import ProfileView from './components/ProfileView';

const ProfileScreen = () => {
  return (
    <View style={{flex: 1}}>
      <ProfileView />
    </View>
  );
};

export default ProfileScreen;

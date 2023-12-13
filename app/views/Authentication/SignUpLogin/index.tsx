import {View, Text} from 'react-native';
import React from 'react';
import SignUpLoginView from './components/SignUpLoginView';

const SignUpLogin = ({navigation}: any) => {
  const handleLoginpress = () => {
    navigation.navigate('LoginScreen');
  };
  return <SignUpLoginView handleLoginpress={handleLoginpress} />;
};

export default SignUpLogin;

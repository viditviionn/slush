import {View, Text, Alert} from 'react-native';
import React, {useState} from 'react';
import LoginView from './components/LoginView';
import {apiService, setHeader} from '../../../components/utils/apiService';
import AsyncStorage from '@react-native-async-storage/async-storage';

const LoginScreen = ({navigation}: any) => {
  const [loginParams, setloginParams] = useState({
    email: '',
    password: '',
  });
  const handleLoginPress = async () => {
    try {
      const response = await apiService('POST', '/auth/login', loginParams);
      console.log(
        'accessToken: ',
        response?.data?.data?.authenticate?.accessToken,
      );
      if (response.status === 201) {
        const userToken = response?.data?.data?.authenticate?.accessToken;
        console.log('userToken: ', userToken);
        await setHeader('token', userToken);
        await AsyncStorage.setItem('userToken', userToken);
        await AsyncStorage.setItem(
          'userData',
          JSON.stringify(response?.data?.data),
        );
        navigation.navigate('Dashboard');
      } else {
        Alert.alert(response.data.message);
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  return (
    <LoginView
      loginParams={loginParams}
      setloginParams={setloginParams}
      handleLoginPress={handleLoginPress}
    />
  );
};

export default LoginScreen;

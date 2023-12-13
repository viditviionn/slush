import {Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SignUpLogin from '../views/Authentication/SignUpLogin';
import LoginScreen from '../views/Authentication/Login';
import Dashboard from '../views/Dashboard';
import ViewTickets from '../views/TicketManagement/ViewTickets';
import BookTickets from '../views/TicketManagement/BookTickets';

const Stack = createNativeStackNavigator();

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen
          name="SignUpLogin"
          component={SignUpLogin}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="ViewTickets"
          component={ViewTickets}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookTickets"
          component={BookTickets}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

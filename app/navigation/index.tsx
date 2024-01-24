import {Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import SignUpLogin from '../views/Authentication/SignUpLogin';
import LoginScreen from '../views/Authentication/Login';
import Dashboard from '../views/Dashboard';
import ViewTickets from '../views/TicketManagement/ViewTickets';
import BookTickets from '../views/TicketManagement/BookTickets';
import WaitingRoom from '../views/WaitingRoom';
import VideoCall from '../views/VideoCall';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Matches from '../views/DummyScreens/Matches';
import Messages from '../views/DummyScreens/Messages';
import ProfileScreen from '../views/DummyScreens/ProfileScreen';
import DummyScreen4 from '../views/DummyScreens/DummyScreens4';
import MyTabScreen from './MyTab';
import {createStackNavigator} from '@react-navigation/stack';
import EventEndedScreen from '../views/PostEventManagement/EventEndedScreen';
import MatchScreen from '../views/PostEventManagement/MatchScreen';

const Stack = createStackNavigator();
const HomeStack = createStackNavigator();
// const Stack = createNativeStackNavigator();
// const HomeStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeScreens = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Home"
        component={Dashboard}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="ViewTickets"
        component={ViewTickets}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="BookTickets"
        component={BookTickets}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="WaitingRoom"
        component={WaitingRoom}
        options={{headerShown: false}}
      />
      <HomeStack.Screen
        name="VideoCall"
        component={VideoCall}
        options={{headerShown: false}}
      />
      {/* <HomeStack.Screen
        name="EventEndedScreen"
        component={EventEndedScreen}
        options={{headerShown: false}}
      /> */}
    </HomeStack.Navigator>
  );
};

function MyTabBar() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBar={props => <MyTabScreen {...props} />}>
      <Tab.Screen
        name="HomeScreen"
        component={HomeScreens}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="Matches"
        component={Matches}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="DummyScreen2"
        component={Messages}
        options={{headerShown: false}}
      />
      <Tab.Screen
        name="ProfileScreen"
        component={ProfileScreen}
        options={{headerShown: false}}
      />
    </Tab.Navigator>
  );
}

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
          component={MyTabBar}
          options={{headerShown: false}}
        />
        {/* <Stack.Screen
          name="EventEndedScreen"
          component={EventEndedScreen}
          options={{headerShown: false}}
        /> */}
        {/* <Stack.Screen
          name="MatchScreen"
          component={MatchScreen}
          options={{headerShown: false}}
        /> */}
        {/*<Stack.Screen
          name="ViewTickets"
          component={ViewTickets}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="BookTickets"
          component={BookTickets}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="WaitingRoom"
          component={WaitingRoom}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="VideoCall"
          component={VideoCall}
          options={{headerShown: false}}
        /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;

import {View, Text, Alert} from 'react-native';
import React, {useEffect, useState} from 'react';
import DashboardView from './components/DashboardView';
import {Color} from '../../components/utils/GlobalStyles';
import {apiService} from '../../components/utils/apiService';
import {TIMESTAMPINSECONDS} from '../../components/utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Dashboard = ({navigation}: any) => {
  const [upcomingEventData, setUpcomingEventData] = useState();
  const [myEventData, setMyEventData] = useState<any>();
  const [nextEvent, setNextEvent] = useState<any>();
  const [popularEventData, setPopularEventData] = useState();
  const [userData, setUserData] = useState<any>();
  const loadingRef = false;
  const [timeDifference, setTimeDifference] = useState<any>(0);

  useEffect(() => {
    getEvents();
    getUserData();
  }, []);
  const getEvents = async () => {
    try {
      const responseForUpcoming = await apiService(
        'GET',
        `/events?date=${TIMESTAMPINSECONDS}&distance=50000&events=upcoming&page=1&limit=100`,
        '',
      );
      const responseForMyEvents = await apiService(
        'GET',
        `/events?date=${TIMESTAMPINSECONDS}&distance=50000&events=me&page=1&limit=100`,
        '',
      );
      const responseForPopularEvents = await apiService(
        'GET',
        `/events?date=${TIMESTAMPINSECONDS}&distance=50000&events=popular&page=1&limit=100`,
        '',
      );
      console.log('responseForUpcoming?.data: ', responseForUpcoming);
      if (responseForUpcoming.status === 200) {
        setUpcomingEventData(responseForUpcoming?.data?.data?.items);
      }
      if (responseForMyEvents.status === 200) {
        setMyEventData(responseForMyEvents?.data?.data?.items);
        if (responseForMyEvents?.data?.data?.items?.length > 0) {
          setNextEvent(responseForMyEvents?.data?.data?.items[0]);
        } else {
          setNextEvent({});
        }
      }
      if (responseForPopularEvents.status === 200) {
        setPopularEventData(responseForPopularEvents?.data?.data?.items);
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };
  const getUserData = async () => {
    const data: any = await AsyncStorage.getItem('userData');
    setUserData(JSON.parse(data));
  };
  const handleMyEventPress = (eventId: any) => {
    console.log(eventId);
    navigation.navigate('ViewTickets', {eventId: eventId});
  };
  const handleUpcomingEventPress = (eventId: any) => {
    const isEventPresent = myEventData.some(
      (event: any) => event.eventId === eventId,
    );
    console.log('isEventPresent: ', isEventPresent);

    if (isEventPresent) {
      navigation.navigate('ViewTickets', {eventId: eventId});
    } else {
      navigation.navigate('BookTickets', {eventId: eventId});
    }
  };
  const onRefresh = () => {
    getEvents();
  };
  const handleJoinEventPress = (data: any, eventId: any) => {
    navigation.navigate('WaitingRoom', {eventData: data, eventId: eventId});
  };
  return (
    <View
      style={{
        backgroundColor: Color.backgroundColor,
      }}>
      <DashboardView
        userData={userData}
        upcomingEventData={upcomingEventData}
        myEventData={myEventData}
        popularEventData={popularEventData}
        handleMyEventPress={handleMyEventPress}
        handleUpcomingEventPress={handleUpcomingEventPress}
        loadingRef={loadingRef}
        onRefresh={onRefresh}
        timeDifference={timeDifference}
        setTimeDifference={setTimeDifference}
        nextEvent={nextEvent}
        handleJoinEventPress={handleJoinEventPress}
      />
    </View>
  );
};

export default Dashboard;

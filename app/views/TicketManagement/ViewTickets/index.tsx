import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import ViewTicketsView from './components/ViewTicketsView';
import {apiService} from '../../../components/utils/apiService';

const ViewTickets = ({navigation, route}: any) => {
  const {eventId} = route?.params;
  const [detailData, setdetailData] = useState();
  useEffect(() => {
    getEventDetail();
  }, []);
  const getEventDetail = async () => {
    try {
      const response = await apiService('GET', `/events/${eventId}`, '');
      console.log('response: ', response?.data?.data);
      if (response?.status === 200) {
        setdetailData(response?.data?.data);
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };
  const handleJoinEventPress = (data: any) => {
    navigation.navigate('WaitingRoom', {eventData: data, eventId: eventId});
  };
  return (
    <ViewTicketsView
      detailData={detailData}
      handleJoinEventPress={handleJoinEventPress}
    />
  );
};

export default ViewTickets;

import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import BookTicketsView from './components/BookTicketsView';
import {apiService} from '../../../components/utils/apiService';

const BookTickets = ({navigation, route}: any) => {
  const {eventId} = route?.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [isTicketBookedModalVisible, setTicketBookedModalVisible] =
    useState(false);

  const [detailData, setdetailData] = useState();
  useEffect(() => {
    getEventDetail();
  }, []);
  const getEventDetail = async () => {
    try {
      const response = await apiService('GET', `/events/${eventId}`, '');
      console.log('response: ', response?.data);
      if (response?.status === 200) {
        setdetailData(response?.data?.data);
      }
    } catch (error) {
      console.log('error: ', error);
    }
  };

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
    setTicketBookedModalVisible(!isTicketBookedModalVisible);
  };

  const handleYesPress = async () => {
    // Add your logic for 'Yes' button press here
    console.log('eventId: ', typeof JSON.stringify(eventId));
    const params = {
      eventId: eventId,
    };
    const response = await apiService('POST', '/events/book', params);
    console.log('response: ', response);
    if (response.status === 201) {
      setTicketBookedModalVisible(true);
      setModalVisible(false);
    }
  };
  const handleHomePress = () => {
    navigation.navigate('Dashboard');
  };
  const handleViewDeatailPress = () => {
    setTicketBookedModalVisible(false);
    navigation.navigate('ViewTickets', {eventId: eventId});
  };
  const handleNoPress = () => {
    // Add your logic for 'No' button press here
    setModalVisible(false);
    setTicketBookedModalVisible(false);
  };
  const handleBookNowPress = () => {
    setModalVisible(true);
  };

  return (
    <BookTicketsView
      isModalVisible={isModalVisible}
      setModalVisible={setModalVisible}
      toggleModal={toggleModal}
      handleYesPress={handleYesPress}
      handleNoPress={handleNoPress}
      handleBookNowPress={handleBookNowPress}
      isTicketBookedModalVisible={isTicketBookedModalVisible}
      setTicketBookedModalVisible={setTicketBookedModalVisible}
      handleHomePress={handleHomePress}
      handleViewDeatailPress={handleViewDeatailPress}
      detailData={detailData}
    />
  );
};

export default BookTickets;

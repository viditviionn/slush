import {View, Text} from 'react-native';
import React, {useState} from 'react';
import BookTicketsView from './components/BookTicketsView';
import {apiService} from '../../../components/utils/apiService';

const BookTickets = ({navigation, route}: any) => {
  const {eventId} = route?.params;
  const [isModalVisible, setModalVisible] = useState(false);
  const [isTicketBookedModalVisible, setTicketBookedModalVisible] =
    useState(false);

  const toggleModal = () => {
    console.log('dasdas');
    setModalVisible(!isModalVisible);
    setTicketBookedModalVisible(!isTicketBookedModalVisible);
  };

  const handleYesPress = async () => {
    // Add your logic for 'Yes' button press here
    console.log('eventId: ',typeof JSON.stringify(eventId));
    const params = {
      eventId: eventId,
    };
    const response = await apiService('POST', '/events/book', params);
    console.log('response: ', response);
    if(response.status === 201) {
      setTicketBookedModalVisible(true);
      setModalVisible(false);
    }
  };
  const handleHomePress = () => {
    navigation.navigate('Dashboard');
  };
  const handleViewDeatailPress = () => {
    // navigation.navigate('Dashboard');
    setTicketBookedModalVisible(false);
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
    />
  );
};

export default BookTickets;

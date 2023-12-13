import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Header from '../../../../components/Header';
import styles from './styles';
import {images} from '../../../../assets/images';
import {getFormattedDate} from '../../../../components/utils/constants';
import ConfirmBoookingModal from '../../../../components/Modals/ConfirmBookingModal.tsx';
import TicketBookedModal from '../../../../components/Modals/TicketBookedModal.tsx';
const BookTicketsView = (props: any) => {
  const {
    isModalVisible,
    setModalVisible,
    toggleModal,
    handleYesPress,
    handleNoPress,
    handleBookNowPress,
    isTicketBookedModalVisible,
    setTicketBookedModalVisible,
    handleHomePress,
    handleViewDeatailPress,
  } = props;
  return (
    <View style={styles.mainContainer}>
      {/* <Header HeaderText={'Ticket'} /> */}
      <View style={styles.container}>
        <View style={styles.firstView}>
          <Image
            source={images.eventImage1}
            style={styles.ticketHeaderImageStyle}
          />
        </View>
        <View style={styles.secondView}>
          <View style={styles.descView}>
            <View style={styles.titleView}>
              <Text style={styles.titletext}>Upto 5 dates</Text>
              <Text style={styles.typeText}>FREE</Text>
            </View>
            <Text style={styles.locationText}>London</Text>
            <View style={styles.timeView}>
              <View style={styles.dateView}>
                <Image source={images.calender} style={styles.timeIcon} />
                <Text style={styles.dateText}>
                  {getFormattedDate(123123123123, 'date')}
                </Text>
              </View>
              <View style={styles.dateView}>
                <Image source={images.clock} style={styles.timeIcon} />
                <Text style={styles.dateText}>
                  {getFormattedDate(123123123123, 'time')}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.detailView}>
            <Text style={styles.HeadingText}>Event Detail</Text>
            <Text style={styles.detailText}>
              You will virtually meet up to 10 different people. Each date will
              last 3 minutes and you will have an opportunity to decide whether
              or not you like the person. If you both like eachother, you will
              match at the end of the session and can continue your
              conversation. Most importantly, have fun!
            </Text>
          </View>
          <View style={styles.participantsView}>
            <Text style={styles.HeadingText}>Event Participants</Text>
            <View style={styles.avatarView}>
              <View style={styles.dashedCircle}></View>
              <View style={styles.dashedCircle}></View>
              <View style={styles.dashedCircle}></View>
              <View style={styles.dashedCircle}></View>
              <View style={styles.dashedCircle}></View>
              <View style={styles.dashedCircle}></View>
            </View>
          </View>
          <TouchableOpacity
            style={[styles.buttonTouch, styles.loginTouch]}
            onPress={() => handleBookNowPress()}>
            <Text style={styles.loginText}>Book Now</Text>
          </TouchableOpacity>
        </View>
        <ConfirmBoookingModal
          isModalVisible={isModalVisible}
          setModalVisible={setModalVisible}
          toggleModal={toggleModal}
          handleYesPress={handleYesPress}
          handleNoPress={handleNoPress}
        />
        <TicketBookedModal
          isModalVisible={isTicketBookedModalVisible}
          setModalVisible={setTicketBookedModalVisible}
          toggleModal={toggleModal}
          handleHomePress={handleHomePress}
          handleViewDeatailPress={handleViewDeatailPress}
        />
      </View>
    </View>
  );
};

export default BookTicketsView;

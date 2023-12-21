import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
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
    detailData,
  } = props;
  console.log('detailData: ', detailData);
  return (
    <ScrollView style={styles.mainContainer}>
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
              <Text style={styles.titletext}>{detailData?.title}</Text>
              <Text style={styles.typeText}>
                {detailData?.isFree ? 'FREE' : 'PAID'}
              </Text>
            </View>
            <Text style={styles.locationText}>{detailData?.address}</Text>
            <View style={styles.timeView}>
              <View style={styles.dateView}>
                <Image source={images.calender} style={styles.timeIcon} />
                <Text style={styles.dateText}>
                  {getFormattedDate(detailData?.startsAt, 'date')}
                </Text>
              </View>
              <View style={styles.dateView}>
                <Image source={images.clock} style={styles.timeIcon} />
                <Text style={styles.dateText}>
                  {getFormattedDate(detailData?.startsAt, 'time')}
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.detailView}>
            <Text style={styles.HeadingText}>Event Detail</Text>
            <Text style={styles.detailText}>{detailData?.description}</Text>
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
    </ScrollView>
  );
};

export default BookTicketsView;

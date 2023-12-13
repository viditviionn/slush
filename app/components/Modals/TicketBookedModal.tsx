import React, {useState} from 'react';
import {
  View,
  Text,
  Modal,
  StyleSheet,
  TouchableOpacity,
  Image,
} from 'react-native';
import {Color, FontFamily, FontSize} from '../utils/GlobalStyles';
import {images} from '../../assets/images';

const TicketBookedModal = (props: any) => {
  const {isModalVisible, toggleModal, handleHomePress, handleViewDeatailPress} =
    props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Image source={images.ticketBookedImage} />
          <Text style={styles.heading}>Ticket Booked</Text>
          <Text style={styles.subheading}>
            Your event has been booked successfully!
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleHomePress}
              style={[styles.buttonView, styles.blueBackground]}>
              <Text style={[styles.button, styles.whiteText]}>Home</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleViewDeatailPress}
              style={styles.buttonView}>
              <Text style={[styles.button, styles.blueText]}>View Ticket</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContent: {
    padding: 20,
    marginHorizontal: 20,
    borderRadius: 20,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    fontSize: FontSize.h4,
    fontFamily: FontFamily.SEMI_BOLD,
    marginBottom: 10,
    textAlign: 'center',
  },
  subheading: {
    fontSize: FontSize.h6,
    fontFamily: FontFamily.MEDIUM,
    textAlign: 'center',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    marginTop: 15,
  },
  button: {
    fontSize: FontSize.h6,
    fontFamily: FontFamily.SEMI_BOLD,
    color: Color.black,
  },
  whiteText: {
    color: Color.colorWhite,
  },
  blueText: {
    color: Color.primaryBlue,
  },
  buttonView: {
    paddingVertical: 10,
    width: '90%',
    marginVertical: 5,
    marginHorizontal: 10,
    borderRadius: 10,
    backgroundColor: Color.colorWhite,
    alignItems: 'center',
    shadowColor: Color.calmBlack,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10,
  },
  blueBackground: {
    backgroundColor: Color.primaryBlue,
  },
});

export default TicketBookedModal;

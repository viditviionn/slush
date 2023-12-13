import React, {useState} from 'react';
import {View, Text, Modal, StyleSheet, TouchableOpacity} from 'react-native';
import {Color, FontFamily, FontSize} from '../utils/GlobalStyles';

const ConfirmBoookingModal = (props: any) => {
  const {
    isModalVisible,
    setModalVisible,
    toggleModal,
    handleYesPress,
    handleNoPress,
  } = props;
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isModalVisible}
      onRequestClose={toggleModal}>
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.heading}>Confirm your booking</Text>
          <Text style={styles.subheading}>
            Please confirm you would like to book this event.
          </Text>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              onPress={handleNoPress}
              style={styles.buttonView}>
              <Text style={[styles.button, styles.blueText]}>Cancel</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={ handleYesPress}
              style={[styles.buttonView, styles.blueBackground]}>
              <Text style={[styles.button, styles.whiteText]}>Book</Text>
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
    alignItems: 'center',
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
    marginBottom: 20,
    textAlign: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
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
    paddingHorizontal: 40,
    marginHorizontal: 15,
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

export default ConfirmBoookingModal;

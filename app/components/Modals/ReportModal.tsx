import {
  View,
  Text,
  Modal,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import React from 'react';
import {Color, FontFamily, normalize} from '../utils/GlobalStyles';
import {images} from '../../assets/images';

const ReportModal = ({
  isVisible,
  onClose,
  handleOptionPress,
  optionArray,
}: any) => {
  return (
    <Modal animationType="slide" transparent={true} visible={isVisible}>
      <View style={styles.backdrop}>
        <View style={styles.modalView}>
          <Text style={styles.modalheadingText}>Is everything OK?</Text>
          <Text style={styles.modalSubText}>
            You had left the date early and we just wanted to check everything
            is okay. Why did you leave the date early?
          </Text>
          <View style={styles.optionWrap}>
            {optionArray?.map((item: any) => {
              console.log('item: ', item);
              return (
                <View key={item?.id} style={styles.optionView}>
                  <TouchableOpacity
                    onPress={() => handleOptionPress(item)}
                    style={styles.tickView}>
                    {item?.isSelected && (
                      <Image source={images.tick} style={styles.ticjImage} />
                    )}
                  </TouchableOpacity>
                  <Text style={styles.optionText}>{item?.text}</Text>
                </View>
              );
            })}
          </View>
          <TouchableOpacity
            style={styles.buttonTouch}
            onPress={() => onClose()}>
            <Text style={styles.submitText}>Submit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  backdrop: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.5)', // Faded backdrop
  },
  modalView: {
    backgroundColor: 'white',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
  },
  buttonTouch: {
    paddingVertical: 8,
    marginHorizontal: 30,
    margin: 5,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    backgroundColor: Color.primaryBlue,
  },
  submitText: {
    fontSize: 20,
    fontFamily: FontFamily.BOLD,
    color: Color.colorWhite,
  },
  modalheadingText: {
    fontSize: 25,
    fontFamily: FontFamily.SEMI_BOLD,
    textAlign: 'center',
  },
  modalSubText: {
    fontSize: 20,
    fontFamily: FontFamily.REGULAR,
    textAlign: 'center',
  },
  optionWrap: {
    marginVertical: normalize(30),
  },
  optionView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
  },
  tickView: {
    backgroundColor: Color.primaryBlue,
    height: normalize(25),
    width: normalize(25),
    marginRight: normalize(10),
    borderRadius: normalize(25),
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionText: {
    fontSize: 20,
    fontFamily: FontFamily.REGULAR,
  },
  ticjImage: {
    height: 22,
    width: 22,
    tintColor: Color.colorWhite,
  },
});

export default ReportModal;

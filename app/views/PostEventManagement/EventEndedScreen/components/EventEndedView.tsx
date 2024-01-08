import {View, Text, ScrollView, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {images} from '../../../../assets/images';
import styles from './styles';
import Header from '../../../../components/Header';
import ReportModal from '../../../../components/Modals/ReportModal';

const EventEndedView = (props: any) => {
  const {handleOptionPress, optionArray} = props;
  const [modalVisible, setModalVisible] = useState(true);

  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      <Header HeaderText={'Finished'} />
      <View style={styles.container}>
        <View style={styles.firstView}>
          <Image
            source={images.headerImage1}
            style={styles.ticketHeaderImageStyle}
          />
        </View>
        <View style={styles.secondView}>
          <View style={styles.infoView}>
            <Text style={styles.headingText}>The event has now ended</Text>
            <Text style={styles.subHeadingText}>
              We hope you had a great time and met some lovely people. Please
              press ‘leave’ below to see whether you had matched with anyone!
            </Text>
          </View>
          <View style={styles.leaveButtonView}>
            <TouchableOpacity
              style={styles.buttonTouch}
              onPress={() => setModalVisible(true)}>
              <Text style={styles.loginText}>Leave</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ReportModal
        isVisible={modalVisible}
        onClose={() => setModalVisible(false)}
        handleOptionPress={handleOptionPress}
        optionArray={optionArray}
      />
    </ScrollView>
  );
};

export default EventEndedView;

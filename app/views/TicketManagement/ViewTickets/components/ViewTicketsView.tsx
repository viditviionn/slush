import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import Header from '../../../../components/Header';
import {images} from '../../../../assets/images';
import {getFormattedDate} from '../../../../components/utils/constants';
import CountView from '../../../../components/CountView';

const ViewTicketsView = (props: any) => {
  const {detailData, handleJoinEventPress} = props;
  const [timeDifference, setTimeDifference] = useState<any>(0);
  return (
    <ScrollView
      style={styles.mainContainer}
      showsVerticalScrollIndicator={false}>
      <Header HeaderText={'Ticket'} />
      <View style={styles.container}>
        <View style={styles.firstView}>
          <Image
            source={images.ticketHeaderImage}
            style={styles.ticketHeaderImageStyle}
          />
        </View>
        <View style={styles.secondView}>
          <View style={styles.descView}>
            <View style={styles.titleView}>
              <Text style={styles.titletext}>{detailData?.title}</Text>
              <Text style={styles.typeText}>FREE</Text>
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
          <CountView
            startsAt={detailData?.startsAt}
            setTimeDifference={setTimeDifference}
          />
          <View>
            <TouchableOpacity
              style={[
                styles.buttonTouch,
                styles.joinTouch,
                timeDifference / 1000 >= 960 && styles.disable,
              ]}
              onPress={() => handleJoinEventPress(detailData)}
              disabled={timeDifference / 1000 >= 960}>
              <Text style={styles.loginText}>Join Event</Text>
            </TouchableOpacity>
          </View>
          <View>
            <TouchableOpacity
              style={[styles.buttonTouch, styles.cancelTouch]}
              onPress={() => {}}>
              <Text style={styles.loginText}>Cancel Event</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ViewTicketsView;

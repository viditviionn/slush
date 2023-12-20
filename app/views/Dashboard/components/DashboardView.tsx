import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React from 'react';
import styles from './styles';
import {images} from '../../../assets/images';
import MyEventCard from '../../../components/MyEventCard';
import UpcomingEventCard from '../../../components/UpcomingEventCard';
import EmptyComponent from '../../../components/EmptyComponent';
import CountView from '../../../components/CountView';

const DashboardView = (props: any) => {
  const {
    upcomingEventData,
    myEventData,
    popularEventData,
    handleMyEventPress,
    handleUpcomingEventPress,
    timeDifference,
    setTimeDifference,
    nextEvent,
  } = props;
  return (
    <ScrollView contentContainerStyle={styles.mainContainer}>
      <View style={styles.profileView}>
        <Image source={images.profileImage} style={styles.profileImage} />
        <View style={styles.nameView}>
          <Text style={styles.profilenameText}>Hi, Adam</Text>
          <Text style={styles.profiledescText}>How are you Today?</Text>
        </View>
      </View>
      {/* <View style={styles.locationView}>
        <Image source={images.location} style={styles.locationImage} />
        <Text style={styles.locationText}>London</Text>
      </View> */}
      <View style={styles.nextEventView}>
        <Text style={styles.nextEventHeadinText}>
          Your next event begins in..
        </Text>
        <View style={styles.countWrap}>
          <CountView
            startsAt={nextEvent?.startsAt}
            setTimeDifference={setTimeDifference}
          />
        </View>
        <View style={styles.nextEventButtonView}>
          <TouchableOpacity
            style={[styles.nextEventButton, styles.unableButton]}>
            <Text style={styles.nextEventButtonText}>Unable to attend</Text>
          </TouchableOpacity>
          <TouchableOpacity style={[styles.nextEventButton, styles.joinButton]}>
            <Text style={styles.nextEventButtonText}>Join</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.myEventsView}>
        <View style={styles.myEventHeading}>
          <Text style={styles.headingText}>My Events</Text>
          <View style={{marginVertical: 20}}>
            <FlatList
              data={myEventData}
              renderItem={({item}: any) => (
                <MyEventCard
                  item={item}
                  handleMyEventPress={handleMyEventPress}
                />
              )}
              ListEmptyComponent={() => (
                <EmptyComponent message={'No Events found'} />
              )}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>
      </View>
      <View style={styles.upcomingEventsView}>
        <View style={styles.upcomingEventsHeadingView}>
          <Text style={styles.headingText}>Popular Events</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={popularEventData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: any) => (
              <UpcomingEventCard
                item={item}
                handleUpcomingEventPress={handleUpcomingEventPress}
              />
            )}
            ListEmptyComponent={() => (
              <EmptyComponent message={'No Events found'} />
            )}
          />
        </View>
      </View>
      <View style={styles.upcomingEventsView}>
        <View style={styles.upcomingEventsHeadingView}>
          <Text style={styles.headingText}>Upcoming Events</Text>
          <TouchableOpacity>
            <Text style={styles.viewAllText}>View All</Text>
          </TouchableOpacity>
        </View>
        <View style={{flex: 1}}>
          <FlatList
            data={upcomingEventData}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}: any) => (
              <UpcomingEventCard
                item={item}
                handleUpcomingEventPress={handleUpcomingEventPress}
              />
            )}
            ListEmptyComponent={() => (
              <EmptyComponent message={'No Events found'} />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardView;

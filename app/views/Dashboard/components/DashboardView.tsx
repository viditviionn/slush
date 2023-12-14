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

const DashboardView = (props: any) => {
  const {
    upcomingEventData,
    myEventData,
    popularEventData,
    handleMyEventPress,
    handleUpcomingEventPress,
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
      <View style={styles.locationView}>
        <Image source={images.location} style={styles.locationImage} />
        <Text style={styles.locationText}>London</Text>
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
        <View style={{flexDirection: 'row'}}>
          <FlatList
            data={popularEventData}
            contentContainerStyle={{width: '80%'}}
            // horizontal
            renderItem={({item}: any) => (
              <UpcomingEventCard
                item={item}
                handleUpcomingEventPress={handleUpcomingEventPress}
              />
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
        <View style={{flexDirection: 'row'}}>
          <FlatList
            data={upcomingEventData}
            contentContainerStyle={{width: '80%'}}
            // horizontal
            renderItem={({item}: any) => (
              <UpcomingEventCard
                item={item}
                handleUpcomingEventPress={handleUpcomingEventPress}
              />
            )}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default DashboardView;

import {
  View,
  Text,
  Image,
  ScrollView,
  TouchableOpacity,
  FlatList,
  RefreshControl,
  Animated,
} from 'react-native';
import React, {useState} from 'react';
import styles from './styles';
import {images} from '../../../assets/images';
import MyEventCard from '../../../components/MyEventCard';
import UpcomingEventCard from '../../../components/UpcomingEventCard';
import EmptyComponent from '../../../components/EmptyComponent';
import CountView from '../../../components/CountView';
import {normalize} from '../../../components/utils/GlobalStyles';
import {isEmptyObj} from '../../../components/utils/constants';

const DashboardView = (props: any) => {
  const {
    userData,
    upcomingEventData,
    myEventData,
    popularEventData,
    handleMyEventPress,
    handleUpcomingEventPress,
    loadingRef,
    timeDifference,
    setTimeDifference,
    nextEvent,
    handleJoinEventPress,
  } = props;

  const scrollY = new Animated.Value(0);

  const threshold = normalize(10);
  const buttonOpacity = scrollY.interpolate({
    inputRange: [0, threshold], // Adjust threshold as needed
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });

  const viewHeight = scrollY.interpolate({
    inputRange: [0, threshold],
    outputRange: [normalize(55), 0], // Set these values as needed
    extrapolate: 'clamp',
  });

  return (
    <ScrollView
      contentContainerStyle={styles.mainContainer}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[1]}
      refreshControl={
        <RefreshControl
          refreshing={loadingRef}
          onRefresh={() => props.onRefresh()}
        />
      }
      onScroll={Animated.event(
        [{nativeEvent: {contentOffset: {y: scrollY}}}],
        {useNativeDriver: false}, // Set to true if not using interpolation for layout props
      )}
      scrollEventThrottle={16}>
      <View style={styles.profileView}>
        <Image source={{uri: userData?.avatar}} style={styles.profileImage} />
        <View style={styles.nameView}>
          <Text style={styles.profilenameText}>Hi, {userData?.firstName} </Text>
          <Text style={styles.profiledescText}>How are you Today?</Text>
        </View>
      </View>
      {!isEmptyObj(nextEvent) && (
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
          <Animated.View
            style={[
              styles.nextEventButtonView,
              {opacity: buttonOpacity, height: viewHeight},
            ]}>
            <TouchableOpacity
              style={[styles.nextEventButton, styles.unableButton]}>
              <Text style={styles.nextEventButtonText}>Unable to attend</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() =>
                handleJoinEventPress(nextEvent, nextEvent?.eventId)
              }
              style={[
                styles.nextEventButton,
                styles.joinButton,
                timeDifference / 1000 >= 960 && styles.disable,
              ]}
              disabled={timeDifference / 1000 >= 960}>
              <Text style={styles.nextEventButtonText}>Join</Text>
            </TouchableOpacity>
          </Animated.View>
        </View>
      )}
      {myEventData?.length > 0 ? (
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
      ) : (
        <></>
      )}
      {popularEventData?.length > 0 && (
        <View style={styles.upcomingEventsView}>
          <View style={styles.upcomingEventsHeadingView}>
            <Text style={styles.headingText}>Popular Events</Text>
            <TouchableOpacity>
              <Text style={styles.viewAllText}>View All</Text>
            </TouchableOpacity>
          </View>
          <View style={{}}>
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
      )}
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

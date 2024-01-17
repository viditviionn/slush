import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import Header from '../../../../components/Header';
import styles from './styles';
import MyMatchesTab from './MyMatchesTab';
import LikedYouTab from './LikedYouTab';

const MatchView = (props: any) => {
  const {handleTabChange, tabtype} = props;
  return (
    <View style={{flex: 1}}>
      <Header HeaderText={'My Matches'} />
      <View style={styles.tabview}>
        <TouchableOpacity
          style={[styles.singleTab, tabtype === 1 && styles.tabHihg]}
          onPress={() => handleTabChange(1)}>
          <Text style={styles.tabText}>Matches</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.singleTab, tabtype === 2 && styles.tabHihg]}
          onPress={() => handleTabChange(2)}>
          <Text style={styles.tabText}>Liked you</Text>
        </TouchableOpacity>
      </View>
      <ScrollView contentContainerStyle={{flex: 1}}>
        {tabtype === 1 ? <MyMatchesTab /> : <LikedYouTab />}
      </ScrollView>
    </View>
  );
};

export default MatchView;

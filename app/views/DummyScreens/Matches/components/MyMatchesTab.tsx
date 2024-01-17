import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {DUMMY_MATCHES} from '../../../../components/utils/Dummy';
import MatchCard from '../../../../components/MatchCard';
import styles from './styles';

const MyMatchesTab = () => {
  console.log('My Mathces');
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.headingdescView}>
        <Text style={styles.headingdescText}>This is a list of people who you have matched with during an event.</Text>
      </View>
      <FlatList
        numColumns={2}
        data={DUMMY_MATCHES}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
        renderItem={({item}) => <MatchCard item={item} />}
      />
    </View>
  );
};

export default MyMatchesTab;

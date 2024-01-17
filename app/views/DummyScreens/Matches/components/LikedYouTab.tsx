import {View, Text, FlatList} from 'react-native';
import React from 'react';
import {DUMMY_MATCHES} from '../../../../components/utils/Dummy';
import MatchCard from '../../../../components/MatchCard';
import styles from './styles';
import MathcesEmptyComponent from '../../../../components/MatchesEmptyComponent';

const LikedYouTab = () => {
  return (
    <View style={{flex: 1, alignItems: 'center'}}>
      <View style={styles.headingdescView}>
        <Text style={styles.headingdescText}>
          This is a list of people who have liked you
        </Text>
      </View>
      <FlatList
        numColumns={2}
        data={[]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{}}
        renderItem={({item}) => <MatchCard item={item} />}
        ListEmptyComponent={() => <MathcesEmptyComponent/>}
      />
    </View>
  );
};

export default LikedYouTab;

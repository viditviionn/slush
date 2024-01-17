import {View, Text} from 'react-native';
import React, {useState} from 'react';
import MatchView from './components/MatchView';

const Matches = () => {
  const [tabtype, setTabType] = useState(1);
  const handleTabChange = (type: any) => {
    setTabType(type);
  };
  return (
    <View style={{flex: 1}}>
      <MatchView handleTabChange={handleTabChange} tabtype={tabtype}/>
    </View>
  );
};

export default Matches;

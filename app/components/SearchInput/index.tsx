import {View, Text, Image, TextInput} from 'react-native';
import React from 'react';
import styles from './styles';
import { images } from '../../assets/images';

const SearchInput = (props: any) => {
  const {} = props;
  return (
    <View style={styles.container}>
      <Image
        source={images.search}
        style={styles.icon}
      />
      <TextInput
        style={styles.input} 
        placeholder="Search..." 
      />
    </View>
  );
};

export default SearchInput;

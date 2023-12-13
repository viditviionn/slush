import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import styles from './styles';

const SignUpLoginView = (props: any) => {
  const {handleLoginpress} = props;
  return (
    <View style={styles.signUpLogin}>
      <View style={styles.imageView}>
        <Image
          style={{}}
          resizeMode="cover"
          source={require('../../../../assets/images/group-1000002056.png')}
        />
      </View>
      <View style={styles.actionView}>
        <Text style={styles.breakTheIce}>{`Break the Ice `}</Text>
        <TouchableOpacity
          style={[styles.buttonTouch, styles.loginTouch]}
          onPress={() => handleLoginpress()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.buttonTouch, styles.registorTouch]}
          onPress={() => {}}>
          <Text style={styles.signUpText}>I’m new, sign me up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SignUpLoginView;

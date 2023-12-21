import {View, Text, Image, ImageBackground, TouchableOpacity} from 'react-native';
import React, {Fragment} from 'react';
import styles from './styles';
import {images} from '../../../../assets/images';

const MatchView = () => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headingView}>
        <Text style={styles.headingtext}>
          Congratulations It’s a<Text style={styles.highlightText}> match</Text>
        </Text>
      </View>
      <View style={styles.midSectionView}>
        <ImageBackground
          source={images.headerImage2}
          style={styles.backgroundImagestyle}>
          <View style={styles.avatarView}>
            <Image
              source={images.profileImage}
              style={styles.profileImageStyle}
            />
            <Text style={styles.userName}>Emma</Text>
          </View>
          <View style={styles.avatarView}>
            <Image
              source={images.profileImage}
              style={styles.profileImageStyle}
            />
            <Text style={styles.userName}>Emma</Text>
          </View>
          <View style={styles.heartFillView}>
            <Image
              source={images.heartFill}
              style={styles.heartFillImageStyle}
            />
          </View>
        </ImageBackground>
      </View>
      <View style={styles.bottomSectionView}>
        <TouchableOpacity style={[styles.buttonTouch, styles.sayHiButton]} onPress={() => {}}>
          <Text style={styles.leaveText}>Say “Hi!”</Text>
        </TouchableOpacity>
        <TouchableOpacity style={[styles.buttonTouch, styles.viewMatchesButton]} onPress={() => {}}>
          <Text style={styles.leaveText}>View matches</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MatchView;

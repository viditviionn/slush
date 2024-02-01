import {
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import Carousel from '../../../../components/Carousel';
import styles from './styles';
import {images} from '../../../../assets/images';
import {DUMMY_INTERESTS} from '../../../../components/utils/Dummy';
import RenderInterests from '../../../../components/RenderInterests';

const ProfileView = () => {
  return (
    <ScrollView contentContainerStyle={{flex: 1}}>
      <Carousel />
      <View style={styles.bottomSection}>
        <View style={styles.nameSection}>
          <View style={styles.detailView}>
            <Text style={styles.nameText}>Nirmala sitaraman, 29</Text>
            <Text style={styles.jobText}>Minister of Finance</Text>
            <Text style={styles.locationText}>India</Text>
          </View>
          <View style={styles.actionView}>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Photos/View</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.actionButton}>
              <Text style={styles.actionButtonText}>Edit Profile</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.aboutSection}>
          <Image source={images.flower} style={styles.imageStyle}></Image>
          <Text style={styles.aboutMeHeadingText}>About Me</Text>
          <Text style={styles.aboutMeText}>
            Hi, I’m Lauren! I’m not good with bios, but if you’re reading this
            you’ve already met me during an event, so let’s pick up where we
            left off!
          </Text>
        </View>
        <View style={styles.interestSection}>
          <Image source={images.flower} style={styles.imageStyle2}></Image>
          <Text style={styles.interestHeadingText}>Interests</Text>
          <FlatList
            data={DUMMY_INTERESTS}
            renderItem={({item}) => <RenderInterests item={item}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default ProfileView;

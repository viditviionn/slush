// /* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text, TouchableOpacity, Image, SafeAreaView} from 'react-native';
import {images} from '../assets/images';
import {
  Color,
  Isios,
} from '../components/utils/GlobalStyles';

const tabItems = [
  {label: 'HomeScreen', icon: images.house},
  {label: 'Matches', icon: images.heart},
  {label: 'DummyScreen2', icon: images.chat},
  {label: 'ProfileScreen', icon: images.user},
];

const MyTabScreen = ({state, descriptors, navigation}: any) => {
  return (
    <SafeAreaView
      style={{flexDirection: 'row', backgroundColor: Color.backgroundColor}}>
      {state.routes.map((route: any, index: any) => {
        const {options} = descriptors[route.key];
        const {label, icon} = tabItems[index];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });
          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };
        return (
          <TouchableOpacity
            key={index}
            onPress={onPress}
            style={{
              flex: 1,
              height: Isios ? 60 : 70,
              alignItems: 'center',
            }}>
            {label && (
              <View
                style={{
                  width: '100%',
                  margin: 5,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 2,
                }}>
                <Image
                  style={{
                    width: 30,
                    height: 30,
                    marginTop: 6,
                    marginBottom: 3,
                    tintColor: isFocused ? Color.primaryBlue : Color.calmBlack,
                  }}
                  source={icon}
                />
              </View>
            )}
          </TouchableOpacity>
        );
      })}
    </SafeAreaView>
  );
};

export default MyTabScreen;

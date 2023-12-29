/* eslint-disable react-native/no-inline-styles */
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, Image, View, TouchableOpacity, StatusBar} from 'react-native';
import styles from './styles';
import {images} from '../../assets/images';
import {Color, normalize} from '../utils/GlobalStyles';
const Header = props => {
  const {
    HeaderText,
    rightImg,
    leftImg,
    mncontainer,
    MainHeadStyle,
    imgWidth,
    imgHeight,
    leftImagestyle,
    onPressLeftIcon,
    rightImagestyle,
    bellIconIsNotVisible,
    onPressRightIcon,
    isCartVisible = true,
  } = props;
  const naviagtion = useNavigation();
  const OnpressBack = () => {
    naviagtion.goBack(null);
  };
  const onPressCart = () => {
    naviagtion.navigate('Checkout');
  };
  // function navtodrawer() {
  //     navigation.dispatch(DrawerActions.toggleDrawer());
  // }

  return (
    <View style={[styles.container, mncontainer]}>
      <StatusBar backgroundColor={Color.primaryBlue} />
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <TouchableOpacity
          onPress={() => (onPressLeftIcon ? onPressLeftIcon() : OnpressBack())}
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: normalize(10),
          }}>
          <Image
            style={[
              leftImagestyle,
              {
                width: imgWidth ? imgWidth : 38,
                height: imgHeight ? imgHeight : 38,
                tintColor: Color.calmBlack,
              },
            ]}
            source={leftImg}
          />
        </TouchableOpacity>
        <View
          style={{
            flex: 4,
            alignItems: 'center',
          }}>
          <Text style={[styles.MainHeadTxt, MainHeadStyle]}>{HeaderText}</Text>
        </View>
        {bellIconIsNotVisible ? null : (
          <TouchableOpacity
            onPress={() => (onPressRightIcon ? onPressRightIcon() : () => {})}
            style={{
              flex: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              style={[
                rightImagestyle,
                {
                  width: imgWidth ? imgWidth : 22,
                  height: imgHeight ? imgHeight : 23,
                },
              ]}
              source={rightImg}
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};
Header.defaultProps = {
  // HeaderText: 'CommonName',
  leftImg: images.backArrow,
  rightImg: '',
  centerImg: images.backArrow,
};

export default Header;

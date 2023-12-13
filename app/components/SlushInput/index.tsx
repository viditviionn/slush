import React, {Fragment} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Color, FontFamily} from '../utils/GlobalStyles';

const SlushInput = (props: any) => {
  const {
    ImgStyle,
    rightImg,
    LeftImg,
    style,
    placeholder,
    placeholderTextColor,
    value,
    onChangeText,
    keyboardType,
    maxLength,
    secureTextEntry,
    styled,
    inputText,
    inputTopLabel,
  } = props;
  const {InputContainer, InputLabel, LabelStyle, inputTopText} = Styles;
  return (
    <Fragment>
      <Text style={[inputTopText]}>{inputTopLabel}</Text>
      <View style={[InputContainer, style]}>
        {styled === 'textInputWithImage' ? (
          <TouchableOpacity>
            <Image
              source={LeftImg}
              style={[
                ImgStyle,
                {margin: 5, marginRight: 10, height: 30, width: 30},
              ]}
            />
          </TouchableOpacity>
        ) : null}
        <TextInput
          placeholder={placeholder}
          placeholderTextColor={placeholderTextColor}
          style={[InputLabel, inputText]}
          onChangeText={val => onChangeText(val)}
          value={value}
          keyboardType={keyboardType}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry}
          numberOfLines={1}
        />
        {styled === 'textInputWithImage' ? (
          <TouchableOpacity>
            <Image source={rightImg} style={[ImgStyle, {margin: 5}]} />
          </TouchableOpacity>
        ) : null}
      </View>
    </Fragment>
  );
};
SlushInput.defaultProps = {
  placeholder: 'input',
  placeholderTextColor: 'red',
  value: '',
  keyboardType: 'default',
  maxLength: 100,
  secureTextEntry: false,
  numberOfLines: 1,
};
const Styles = StyleSheet.create({
  InputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#d1d1d1',
    // backgroundColor: Color.colorWhite,
    marginVertical: 7,
    borderRadius: 10,
    paddingHorizontal: 9,
    height: 60,
    
  },
  InputLabel: {
    fontSize: 18,
    color: Color.calmBlack,
    width: '90%',
    fontFamily: FontFamily.MEDIUM
  },
  LabelStyle: {
    position: 'absolute',
    justifyContent: 'flex-end',
  },
  inputTopText: {
    color: Color.calmBlack,
    fontSize: 20,
    fontFamily: FontFamily.MEDIUM
  },
});
export default SlushInput;

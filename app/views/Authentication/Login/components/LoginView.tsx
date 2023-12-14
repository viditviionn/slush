import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react';
import styles from './styles';
import {images} from '../../../../assets/images';
import SlushInput from '../../../../components/SlushInput';
import Header from '../../../../components/Header';
import {normalize} from '../../../../components/utils/GlobalStyles';

const LoginView = (props: any) => {
  const {loginParams, setloginParams, handleLoginPress} = props;
  return (
    <ScrollView style={styles.loginView}>
      <Header />
      <View style={styles.headingView}>
        <Image source={images.slushLogo} style={styles.logoimage} />
      </View>
      <View style={styles.inputView}>
        <Text style={styles.headingText}>Login</Text>
        <Text style={styles.descText}>
          Sign in to your account with your email
        </Text>
        <SlushInput
          onChangeText={(val: any) =>
            setloginParams({
              ...loginParams,
              email: val,
            })
          }
          value={loginParams?.email}
          placeholder={'Email'}
          placeholderTextColor={'black'}
          inputTopLabel="Email"
          LeftImg={images.mail}
          styled={'textInputWithImage'}
        />
        <SlushInput
          onChangeText={(val: any) =>
            setloginParams({
              ...loginParams,
              password: val,
            })
          }
          value={loginParams?.password}
          placeholder={'Password'}
          placeholderTextColor={'black'}
          inputTopLabel="Password"
          LeftImg={images.lock}
          styled={'textInputWithImage'}
          secureTextEntry={true}
        />
      </View>
      {/* <View style={{flex: 1}}> */}
        <TouchableOpacity style={{width: '50%'}} onPress={() => {}}>
          <Text style={styles.forgotText}>Forgot Password?</Text>
        </TouchableOpacity>
      {/* </View> */}
      <View style={styles.actionView}>
        <TouchableOpacity
          style={[styles.buttonTouch, styles.loginTouch]}
          onPress={() => handleLoginPress()}>
          <Text style={styles.loginText}>Login</Text>
        </TouchableOpacity>
        <Text style={styles.orContinueText}>Or Continue With</Text>
        <View style={styles.actionTouch}>
          <TouchableOpacity>
            <Image source={images.google} style={styles.actionImages} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.facebook} style={styles.actionImages} />
          </TouchableOpacity>
          <TouchableOpacity>
            <Image source={images.apple} style={styles.actionImages} />
          </TouchableOpacity>
        </View>
        <View style={styles.dontHaveView}>
          <Text style={styles.donthavetext}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={[styles.donthavetext, styles.highlight]}>
              {' '}
              Sign up
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

export default LoginView;

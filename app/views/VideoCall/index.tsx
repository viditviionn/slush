import React, {useRef, useState, useEffect} from 'react';
import {
  Dimensions,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {PermissionsAndroid, Platform} from 'react-native';
import {
  ClientRoleType,
  createAgoraRtcEngine,
  IRtcEngine,
  RtcSurfaceView,
  ChannelProfileType,
} from 'react-native-agora';
import VideoCallView from './components/VideoCallView';
import {useFocusEffect} from '@react-navigation/native';
import {apiGetService, apiService} from '../../components/utils/apiService';

const appId = '0bb7571240b747a9809aa5eeb9774fe7';
// const channelName = '619-620-730';
// const token =
//   '007eJxTYFh/a73PmxOx5puc1NYHXN+/+X1Aw+fGD1Peqee4qbSk2usqMBgkJZmbmhsamRgkmZuYJ1paGFgmJpqmpiZZmpubpKWav/1an9oQyMiwV8qHlZEBAkF8bgYzQ0tdMyMDXXNjAwYGANCDIdA=';
// const uid = 0;

const VideoCall = ({navigation, route}: any) => {
  console.log('route: ', route);
  const {eventId} = route?.params;
  const agoraEngineRef = useRef<IRtcEngine>(); // Agora engine instance
  const [isJoined, setIsJoined] = useState(false); // Indicates if the local user has joined the channel
  const [remoteUid, setRemoteUid] = useState(0); // Uid of the remote user
  const [message, setMessage] = useState(''); // Message to the user

  function showMessage(msg: string) {
    setMessage(msg);
  }
  useEffect(() => {
    // Initialize Agora engine when the app starts
    setupVideoSDKEngine();
    getUserFixtures();
  }, []);
  // useFocusEffect(
  //   React.useCallback(() => {
  //     join();
  //     return () => {};
  //   }, [navigation]),
  // );

  const getUserFixtures = async () => {
    const responseForFixture = await apiService(
      'GET',
      `/events/${eventId}/fixtures`,
      '',
    );
    console.log('responseForFixture: ', responseForFixture);

    if (responseForFixture?.status === 200) {
      const params = {
        uid: 0,
        channelName: responseForFixture?.data?.data[0]?.channelName,
      };
      console.log(
        'responseForFixture?.data[0]?.channelName: ',
        responseForFixture?.data?.data[0]?.channelName,
      );
      console.log('params: ', params);

      const responseForRctToken = await apiGetService(
        'POST',
        `/rtc/token`,
        params,
      );
      console.log('responseForRctToken: ', responseForRctToken.data);

      if (responseForRctToken) {
        join(
          responseForRctToken?.data?.data?.token,
          responseForFixture?.data?.data[0]?.channelName,
          0,
        );
      }
    }
  };
  const getPermission = async () => {
    if (Platform.OS === 'android') {
      await PermissionsAndroid.requestMultiple([
        PermissionsAndroid.PERMISSIONS.RECORD_AUDIO,
        PermissionsAndroid.PERMISSIONS.CAMERA,
      ]);
    }
  };
  const setupVideoSDKEngine = async () => {
    try {
      // use the helper function to get permissions
      if (Platform.OS === 'android') {
        await getPermission();
      }
      agoraEngineRef.current = await createAgoraRtcEngine();
      const agoraEngine = await agoraEngineRef.current;
      agoraEngine.registerEventHandler({
        onJoinChannelSuccess: () => {
          setIsJoined(true);
        },
        onUserJoined: (_connection, Uid) => {
          showMessage('Remote user joined with uid ' + Uid);
          setRemoteUid(Uid);
        },
        onUserOffline: (_connection, Uid) => {
          showMessage('Remote user left the channel. uid: ' + Uid);
          navigation.replace('Dashboard');
          leave();
          setRemoteUid(0);
        },
      });
      agoraEngine.initialize({
        appId: appId,
        channelProfile: ChannelProfileType.ChannelProfileLiveBroadcasting,
      });
      agoraEngine.enableVideo();
    } catch (e) {
      console.log(e);
    }
  };
  const join = async (token: any, channelName: any, uid: any) => {
    console.log('isJoined: ', isJoined);
    console.log('agoraEngineRef.current: ', agoraEngineRef.current);
    if (isJoined) {
      return;
    }
    try {
      agoraEngineRef.current?.setChannelProfile(
        ChannelProfileType.ChannelProfileCommunication,
      );
      agoraEngineRef.current?.startPreview();
      agoraEngineRef.current?.joinChannel(token, channelName, uid, {
        clientRoleType: ClientRoleType.ClientRoleBroadcaster,
      });
    } catch (e) {
      console.log(e);
    }
  };
  const leave = async () => {
    try {
      agoraEngineRef.current?.leaveChannel();
      setRemoteUid(0);
      setIsJoined(false);
      showMessage('You left the channel');
      navigation.replace('Dashboard');
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <VideoCallView
      join={join}
      leave={leave}
      isJoined={isJoined}
      remoteUid={remoteUid}
      message={message}
    />
  );
};

export default VideoCall;

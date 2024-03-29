import {View, Text, ActivityIndicator, Image} from 'react-native';
import React from 'react';

export default function SplashScreen() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center',
      }}>
      <Image source={require('../../Images/Logo/Logo.png')} />
      <ActivityIndicator style={{paddingTop: 50}} color={'green'} size={35} />
    </View>
  );
}

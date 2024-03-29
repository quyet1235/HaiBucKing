import React, {useEffect, useState} from 'react';
import {StyleSheet, StatusBar, ImageBackground, View} from 'react-native';
import FirstScreen from './Screens/SplashScreen/Index';
import SplashScreen from './Screens/SplashScreen/Splash';
import {
  ConfirmOTP,
  Forgotpassword,
  Signin,
  Signup,
  Username,
} from './Screens/SigninSignup/Index';
function App(): JSX.Element {
  const [isShowSplash, setIsShowSplash] = useState(true);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsShowSplash(false);
    }, 100000000);
    return () => clearTimeout(timeout);
  }, []);
  return isShowSplash ? (
    <ImageBackground
      style={{
        flex: 1,
      }}
      source={require('./Images/Movies/Splash.jpeg')}>
      <View style={{flex: 1, backgroundColor: 'rgba(0, 0, 0, 0.8)'}}>
        <SplashScreen></SplashScreen>
      </View>
      <StatusBar backgroundColor="black" barStyle="light-content" />
    </ImageBackground>
  ) : (
    <FirstScreen></FirstScreen>
  );
}

export default App;

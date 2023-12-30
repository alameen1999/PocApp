import {View, Text} from 'react-native';
import React from 'react';
import {landingStyle} from './LandingScreen.style';
import Button from '../../components/Button/Button';
import Background from '../../components/Background/Background';

const LandingScreen = ({navigation}: NavigationProps) => {
  return (
    <Background source={require('../../assests/images/purple-background.jpg')}>
      <View style={landingStyle.container}>
        <Text style={landingStyle.content}>Inspire Innovate</Text>
        <Text style={landingStyle.text}>Engineer</Text>
        <Button btnLabel="Login" onPress={() => navigation.navigate('Login')} />
        <Button
          btnLabel="Signup"
          onPress={() => navigation.navigate('Register')}
        />
      </View>
    </Background>
  );
};

export default LandingScreen;

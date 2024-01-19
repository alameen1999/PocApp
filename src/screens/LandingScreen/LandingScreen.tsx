import {View} from 'react-native';
import React from 'react';
import {landingStyle} from './LandingScreen.style';
import Button from '../../components/Button/Button';
import Background from '../../components/Background/Background';
import TextField from '../../components/TextField/TextField';

const LandingScreen = ({navigation}: Navigation) => {
  return (
    <Background source={require('../../assests/images/purple-background.jpg')}>
      <View style={landingStyle.container}>
        <TextField style={landingStyle.content} label="Inspire Innovate" />
        <TextField style={landingStyle.text} label="Engineer" />
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

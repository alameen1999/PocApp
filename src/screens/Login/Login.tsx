import React from 'react';
import {View, Text, Alert} from 'react-native';
import {loginStyle} from './Login.style';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Background from '../../components/Background/Background';

const Login = ({navigation}: NavigationProps) => {
  return (
    <Background source={require('../../assests/images/purple-background.jpg')}>
      <View style={loginStyle.container}>
        <View style={loginStyle.card}>
          <Text style={loginStyle.cardTitle}>POC App</Text>
          <View>
            <InputField
              label="Email"
              placeholder="Enter your email address"
              keyboardType="email-address"
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              password
            />
            <Button btnLabel="Login" onPress={() => Alert.alert('LoggedIn')} />
            <Button
              btnLabel="Sign Up"
              buttonContainer={loginStyle.buttonContainer}
              buttonText={loginStyle.buttonText}
              onPress={() => navigation.navigate('Register')}
            />
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Login;

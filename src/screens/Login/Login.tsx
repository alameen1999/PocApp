import React from 'react';
import {View, Text} from 'react-native';
import {loginStyle} from './Login.style';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';

const Login = () => {
  return (
    <View style={loginStyle.container}>
      <View style={loginStyle.card}>
        <Text style={loginStyle.cardTitle}>POC App</Text>
        <View>
          <InputField placeholder="Email" keyboardType="email-address" />
          <InputField placeholder="Password" secureTextEntry={true} />
          <Button btnLabel="Login" />
          <Button
            btnLabel="Sign Up"
            buttonContainer={loginStyle.buttonContainer}
            buttonText={loginStyle.buttonText}
          />
        </View>
      </View>
    </View>
  );
};

export default Login;

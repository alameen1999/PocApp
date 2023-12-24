import React from 'react';
import {View} from 'react-native';
import {Button, Card, TextInput} from 'react-native-paper';
import {loginStyle} from './Login.style';

const Login = () => {
  return (
    <View style={loginStyle.container}>
      <Card style={loginStyle.view}>
        <Card.Title title="POC App" titleStyle={loginStyle.cardTitle} />
        <Card.Content>
          <TextInput
            label="Email"
            keyboardType="email-address"
            mode="outlined"
          />
          <TextInput label="Password" secureTextEntry={true} mode="outlined" />
          <Button mode="contained" style={loginStyle.cardButton}>
            Login
          </Button>
          <Button style={loginStyle.cardButton}>Register</Button>
        </Card.Content>
      </Card>
    </View>
  );
};

export default Login;

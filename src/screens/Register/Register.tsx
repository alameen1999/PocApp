import React from 'react';
import {View, Text, Alert} from 'react-native';
import InputField from '../../components/InputField/InputField';
import {registerStyle} from './Register.style';
import Button from '../../components/Button/Button';
import Background from '../../components/Background/Background';

const Register = ({navigation}: NavigationProps) => {
  return (
    <Background source={require('../../assests/images/purple-background.jpg')}>
      <View style={registerStyle.container}>
        <View style={registerStyle.card}>
          <Text style={registerStyle.cardTitle}>Register</Text>
          <View>
            <InputField
              label="First Name"
              placeholder="Enter your first name"
            />
            <InputField label="Last Name" placeholder="Enter your last name" />
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
            <Button
              btnLabel="Register"
              onPress={() => Alert.alert('Registered')}
            />
            <Button
              btnLabel="Already have an account?"
              buttonContainer={registerStyle.buttonContainer}
              buttonText={registerStyle.buttonText}
              onPress={() => navigation.navigate('Login')}
            />
          </View>
        </View>
      </View>
    </Background>
  );
};

export default Register;

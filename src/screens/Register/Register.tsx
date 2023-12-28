import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import InputField from '../../components/InputField/InputField';
import {registerStyle} from './Register.style';
import Button from '../../components/Button/Button';

const Register = () => {
  return (
    <SafeAreaView style={registerStyle.container}>
      <View style={registerStyle.card}>
        <Text style={registerStyle.cardTitle}>Register</Text>
        <View>
          <InputField placeholder="First Name" />
          <InputField placeholder="Last Name" />
          <InputField placeholder="Email" keyboardType="email-address" />
          <InputField placeholder="Password" secureTextEntry={true} />
          <Button btnLabel="Register" />
          <Button
            btnLabel="Already have an account?"
            buttonContainer={registerStyle.buttonContainer}
            buttonText={registerStyle.buttonText}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

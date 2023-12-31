import React from 'react';
import {View, Text, Alert} from 'react-native';
import InputField from '../../components/InputField/InputField';
import {registerStyle} from './Register.style';
import Button from '../../components/Button/Button';
import Background from '../../components/Background/Background';
import {useForm} from 'react-hook-form';
import {emailRegex} from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Register = ({navigation}: NavigationProps) => {
  const {control, handleSubmit} = useForm();

  const OnSignUpPressed = (data: any) => {
    try {
      AsyncStorage.setItem('user', JSON.stringify(data));
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };
  return (
    <Background source={require('../../assests/images/purple-background.jpg')}>
      <View style={registerStyle.container}>
        <View style={registerStyle.card}>
          <Text style={registerStyle.cardTitle}>Register</Text>
          <View>
            <InputField
              label="First Name"
              placeholder="Enter your first name"
              control={control}
              rules={{required: 'First name is required'}}
            />
            <InputField
              label="Last Name"
              placeholder="Enter your last name"
              control={control}
              rules={{required: 'Last name is required'}}
            />
            <InputField
              label="Email"
              placeholder="Enter your email address"
              keyboardType="email-address"
              control={control}
              rules={{
                required: 'Email is required',
                pattern: {value: emailRegex, message: 'Email is invalid'},
              }}
            />
            <InputField
              label="Password"
              placeholder="Enter your password"
              password
              control={control}
              rules={{
                required: 'Password is required',
                minLength: {
                  value: 8,
                  message: 'Password should be minimun 3 characters long',
                },
              }}
            />
            <Button
              btnLabel="Register"
              onPress={handleSubmit(OnSignUpPressed)}
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

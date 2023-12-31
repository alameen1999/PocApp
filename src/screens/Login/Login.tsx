import React from 'react';
import {View, Text, Alert} from 'react-native';
import {loginStyle} from './Login.style';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Background from '../../components/Background/Background';
import {useForm} from 'react-hook-form';
import {emailRegex} from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}: NavigationProps) => {
  const {control, handleSubmit} = useForm();

  const OnSignInPressed = async (data: any) => {
    try {
      let userData: string | null = await AsyncStorage.getItem('user');
      if (userData !== null) {
        let parsedData = JSON.parse(userData);
        if (
          data.Email === parsedData.Email &&
          data.Password === parsedData.Password
        ) {
          AsyncStorage.setItem(
            'user',
            JSON.stringify({...parsedData, loggedIn: true}),
          );
          Alert.alert('LoggedIn');
        } else {
          Alert.alert('Error', 'Invalid Details');
        }
      } else {
        Alert.alert('Error', 'User does not exist');
      }
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

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
              }}
            />
            <Button btnLabel="Login" onPress={handleSubmit(OnSignInPressed)} />
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

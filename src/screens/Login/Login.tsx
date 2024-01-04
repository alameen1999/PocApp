import React, {useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import {loginStyle} from './Login.style';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Background from '../../components/Background/Background';
import {useForm} from 'react-hook-form';
import {emailRegex} from '../../utils/constants';
import {useDispatch, useSelector} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Login = ({navigation}: NavigationProps) => {
  const {control, handleSubmit} = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await AsyncStorage.getItem('users');
      if (users !== null) {
        dispatch({type: 'ADD_USER', payload: JSON.parse(users)});
      }
    };

    fetchUsers();
  }, [dispatch]);

  const users = useSelector((state: any) => {
    return state.data;
  });

  const OnSignInPressed = (data: any) => {
    try {
      const foundUser = users.find((user: any) => user.email === data.email);
      if (foundUser) {
        if (foundUser.password === data.password) {
          dispatch({type: 'SET_LOGIN', payload: foundUser});
          return navigation.navigate('Home');
        } else {
          return Alert.alert('Error', 'Invalid Password');
        }
      }
      return Alert.alert('Error', 'Invalid Email');
    } catch (error) {
      return Alert.alert('Error', 'Something went wrong');
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
              name="email"
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
              name="password"
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

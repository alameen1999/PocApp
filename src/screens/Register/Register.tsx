import React from 'react';
import {View, Text, Alert} from 'react-native';
import InputField from '../../components/InputField/InputField';
import {registerStyle} from './Register.style';
import Button from '../../components/Button/Button';
import Background from '../../components/Background/Background';
import {useForm} from 'react-hook-form';
import {emailRegex} from '../../utils/constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import {useDispatch} from 'react-redux';
// import {addUser} from '../../store/store';

const Register = ({navigation}: NavigationProps) => {
  const {control, handleSubmit} = useForm();
  // const dispatch = useDispatch();

  const OnSignUpPressed = async (data: any) => {
    try {
      const existingUsersJSON = await AsyncStorage.getItem('users');
      const existingUsers = existingUsersJSON
        ? JSON.parse(existingUsersJSON)
        : [];

      const isEmailRegistered = existingUsers.some(
        (user: any) => user.email === data.email,
      );
      if (isEmailRegistered) {
        Alert.alert('Error', 'Email is already registered');
        return;
      }

      const newUsers = [...existingUsers, data];

      await AsyncStorage.setItem('users', JSON.stringify(newUsers));

      // dispatch(addUser(data));

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
              name="first_name"
              placeholder="Enter your first name"
              control={control}
              rules={{required: 'First name is required'}}
            />
            <InputField
              label="Last Name"
              name="last_name"
              placeholder="Enter your last name"
              control={control}
              rules={{required: 'Last name is required'}}
            />
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

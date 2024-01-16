import React from 'react';
import {View, Text, Alert} from 'react-native';
import InputField from '../../components/InputField/InputField';
import {registerStyle} from './Register.style';
import Button from '../../components/Button/Button';
import Background from '../../components/Background/Background';
import {useForm} from 'react-hook-form';
import {emailRegex} from '../../utils/constants';
import {useDispatch} from 'react-redux';
import {useUsers} from '../../utils/selectors';
import {modifyUser} from '../../redux/actions/actions';

const Register = ({navigation}: Navigation) => {
  const {control, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const existingUsers = useUsers();

  const OnSignUpPressed = (data: RegisterFormData) => {
    try {
      const isEmailRegistered = existingUsers.some(
        (user: User) => user.email === data.email,
      );
      if (isEmailRegistered) {
        Alert.alert('Error', 'Email is already registered');
      }
      dispatch(modifyUser(data));
      navigation.navigate('Login', {registeredEmail: data.email});
    } catch (error) {
      Alert.alert('Error', 'Something went wrong');
    }
  };

  return (
    <Background source={require('../../assests/images/purple-background.jpg')}>
      <View style={registerStyle.container}>
        <View style={registerStyle.card}>
          <Text style={registerStyle.cardTitle}>Register Form</Text>
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
                  value: 3,
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

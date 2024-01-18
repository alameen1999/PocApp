import React, {useEffect} from 'react';
import {View, Text, Alert} from 'react-native';
import {loginStyle} from './Login.style';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Background from '../../components/Background/Background';
import {useForm} from 'react-hook-form';
import {emailRegex} from '../../utils/constants';
import {useDispatch} from 'react-redux';
import {useUsers} from '../../utils/selectors';
import {login} from '../../redux/actions/actions';

const Login = ({route, navigation}: LoginProps) => {
  const {control, handleSubmit, setValue} = useForm();
  const dispatch = useDispatch();
  const users = useUsers();

  useEffect(() => {
    const registeredEmail = route.params?.registeredEmail;
    if (registeredEmail) {
      setValue('email', registeredEmail);
    }
  }, [dispatch, route, setValue]);

  const OnSignInPressed = (data: LoginFormData) => {
    setValue('password', '');
    try {
      const foundUser = users.find((user: User) => user.email === data.email);
      if (foundUser) {
        if (foundUser.password === data.password) {
          dispatch(login(foundUser));
          return;
        } else {
          return Alert.alert('Error', 'Invalid Password');
        }
      }
      return Alert.alert('Error', 'Email Does not exist');
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

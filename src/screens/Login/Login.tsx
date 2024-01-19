import React, {useEffect, useState} from 'react';
import {View, Alert} from 'react-native';
import {loginStyle} from './Login.style';
import Button from '../../components/Button/Button';
import InputField from '../../components/InputField/InputField';
import Background from '../../components/Background/Background';
import {useForm} from 'react-hook-form';
import {emailRegex} from '../../utils/constants';
import {useDispatch} from 'react-redux';
import {useGetUsers} from '../../utils/selectors';
import {login} from '../../redux/actions/actions';
import Icon from 'react-native-vector-icons/Ionicons';
import TextField from '../../components/TextField/TextField';
import {label, modal, name, placeHolder, validation} from '../../utils/label';

const Login = ({route, navigation}: LoginProps) => {
  const {control, handleSubmit, setValue} = useForm();
  const dispatch = useDispatch();
  const users = useGetUsers();
  const [hidePassword, setHidePassword] = useState(true);

  useEffect(() => {
    const registeredEmail = route.params?.registeredEmail;
    if (registeredEmail) {
      setValue('email', registeredEmail);
    }
  }, [route, setValue]);

  const OnSignInPressed = (data: LoginFormData) => {
    setValue('password', '');
    try {
      const foundUser = users.find((user: User) => user.email === data.email);
      if (foundUser) {
        if (foundUser.password === data.password) {
          dispatch(login(foundUser));
          return;
        } else {
          return Alert.alert(modal.header, modal.password);
        }
      }
      return Alert.alert(modal.header, modal.email);
    } catch (error) {
      return Alert.alert(modal.header, modal.other);
    }
  };

  return (
    <Background source={require('../../assests/images/purple-background.jpg')}>
      <View style={loginStyle.container}>
        <View style={loginStyle.card}>
          <TextField label="POC App" />
          <View>
            <InputField
              label={label.email}
              name={name.email}
              placeholder={placeHolder.email}
              keyboardType="email-address"
              control={control}
              rules={{
                required: validation.email,
                pattern: {value: emailRegex, message: validation.invalidEmail},
              }}
            />
            <View>
              <InputField
                label={label.password}
                name={name.password}
                placeholder={placeHolder.password}
                secureTextEntry={hidePassword}
                control={control}
                rules={{
                  required: validation.password,
                }}
              />
              <Icon
                name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                style={loginStyle.iconStyle}
                onPress={() => setHidePassword(!hidePassword)}
              />
            </View>
            <Button
              btnLabel={label.signIn}
              onPress={handleSubmit(OnSignInPressed)}
            />
            <Button
              btnLabel={label.signUp}
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

import React, {useState} from 'react';
import {View, Alert} from 'react-native';
import InputField from '../../components/InputField/InputField';
import {registerStyle} from './Register.style';
import Button from '../../components/Button/Button';
import Background from '../../components/Background/Background';
import {useForm} from 'react-hook-form';
import {emailRegex} from '../../utils/constants';
import {useDispatch} from 'react-redux';
import {useGetUsers} from '../../utils/selectors';
import {modifyUser} from '../../redux/actions/actions';
import Icon from 'react-native-vector-icons/Ionicons';
import TextField from '../../components/TextField/TextField';
import {label, modal, name, placeHolder, validation} from '../../utils/label';

const Register = ({navigation}: Navigation) => {
  const {control, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const existingUsers = useGetUsers();
  const [hidePassword, setHidePassword] = useState(true);

  const OnSignUpPressed = (data: RegisterFormData) => {
    try {
      const isEmailRegistered = existingUsers.some(
        (user: User) => user.email === data.email,
      );
      if (isEmailRegistered) {
        Alert.alert(modal.header, modal.emailExist);
      }
      dispatch(modifyUser(data));
      navigation.navigate('Login', {registeredEmail: data.email});
    } catch (error) {
      Alert.alert(modal.header, modal.other);
    }
  };

  return (
    <Background source={require('../../assests/images/purple-background.jpg')}>
      <View style={registerStyle.container}>
        <View style={registerStyle.card}>
          <TextField label="Register Form" />
          <View>
            <InputField
              label={label.firstName}
              name={name.firstName}
              placeholder={placeHolder.firstName}
              control={control}
              rules={{required: validation.firstName}}
            />
            <InputField
              label={label.lastName}
              name={name.lastName}
              placeholder={placeHolder.lastName}
              control={control}
              rules={{required: validation.lastName}}
            />
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
                  minLength: {
                    value: 3,
                    message: validation.invalidPassword,
                  },
                }}
              />
              <Icon
                name={hidePassword ? 'eye-off-outline' : 'eye-outline'}
                style={registerStyle.iconStyle}
                onPress={() => setHidePassword(!hidePassword)}
              />
            </View>
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

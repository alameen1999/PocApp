import React from 'react';
import {View, Alert} from 'react-native';
import Background from '../../components/Background/Background';
import Button from '../../components/Button/Button';
import {useForm} from 'react-hook-form';
import InputField from '../../components/InputField/InputField';
import {useDispatch} from 'react-redux';
import {userDetailsStyles} from './UserDetails.style';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import {useGetUsers, useLoggedInUser} from '../../utils/selectors';
import {login, modifyUser} from '../../redux/actions/actions';
import TextField from '../../components/TextField/TextField';
import {label, modal, name} from '../../utils/label';

const UserDetails = ({route, navigation}: UserDetailsProps) => {
  const {user} = route.params;
  const {control, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const loggedUser = useLoggedInUser();
  const users = useGetUsers();

  const OnUpdatePressed = async (data: UpdateFormData) => {
    try {
      if (users) {
        const foundUser = users.find((u: User) => u.email === data.email);
        if (foundUser) {
          const updatedUser = {
            ...foundUser,
            first_name: data.first_name,
            last_name: data.last_name,
          };
          if (updatedUser.email === loggedUser.email) {
            dispatch(login(updatedUser));
          }
          dispatch(modifyUser(updatedUser));
          navigation.navigate('Home');
        }
      }
    } catch (error) {
      Alert.alert(modal.header, modal.update);
    }
  };

  return (
    <>
      {loggedUser && user ? (
        <Background
          source={require('../../assests/images/purple-background.jpg')}>
          <View style={userDetailsStyles.container}>
            <View style={userDetailsStyles.card}>
              <TextField
                style={userDetailsStyles.cardTitle}
                label="Edit Form"
              />
              <View>
                <InputField
                  label={label.firstName}
                  name={name.firstName}
                  control={control}
                  defaultValue={user?.first_name}
                />
                <InputField
                  label={label.lastName}
                  name={name.lastName}
                  control={control}
                  defaultValue={user?.last_name}
                />
                <InputField
                  label={label.email}
                  name={name.email}
                  keyboardType="email-address"
                  control={control}
                  defaultValue={user?.email}
                  editable={false}
                />
                <Button
                  btnLabel="Update"
                  onPress={handleSubmit(OnUpdatePressed)}
                />
              </View>
            </View>
          </View>
        </Background>
      ) : (
        <ErrorScreen />
      )}
    </>
  );
};

export default UserDetails;

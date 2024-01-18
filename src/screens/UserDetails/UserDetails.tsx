import React from 'react';
import {View, Text, Alert} from 'react-native';
import Background from '../../components/Background/Background';
import Button from '../../components/Button/Button';
import {useForm} from 'react-hook-form';
import InputField from '../../components/InputField/InputField';
import {useDispatch} from 'react-redux';
import {userDetailsStyles} from './UserDetails.style';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import {useLoggedInUser, useUsers} from '../../utils/selectors';
import {login, modifyUser} from '../../redux/actions/actions';

const UserDetails = ({route, navigation}: UserDetailsProps) => {
  const {user} = route.params;
  const {control, handleSubmit} = useForm();
  const dispatch = useDispatch();
  const loggedUser = useLoggedInUser();
  const users = useUsers();

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
      Alert.alert('Error', 'Error updating user details');
    }
  };

  return (
    <>
      {loggedUser && user ? (
        <Background
          source={require('../../assests/images/purple-background.jpg')}>
          <View style={userDetailsStyles.container}>
            <View style={userDetailsStyles.card}>
              <Text style={userDetailsStyles.cardTitle}>Edit Form</Text>
              <View>
                <InputField
                  label="First Name"
                  name="first_name"
                  control={control}
                  defaultValue={user?.first_name}
                />
                <InputField
                  label="Last Name"
                  name="last_name"
                  control={control}
                  defaultValue={user?.last_name}
                />
                <InputField
                  label="Email"
                  name="email"
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

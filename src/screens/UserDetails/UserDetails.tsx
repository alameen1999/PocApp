import React, {useRef} from 'react';
import {View, Text, Alert, DrawerLayoutAndroid} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Background from '../../components/Background/Background';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import Drawer from '../../components/Drawer/Drawer';
import {useForm} from 'react-hook-form';
import InputField from '../../components/InputField/InputField';
import {useDispatch} from 'react-redux';
import {userDetailsStyles} from './UserDetails.style';

const UserDetails = ({route, navigation}: any) => {
  const {user} = route.params;
  const {control, handleSubmit} = useForm();
  const drawer = useRef<DrawerLayoutAndroid>(null);
  const dispatch = useDispatch();

  const OnUpdatePressed = async (data: any) => {
    try {
      let userDataString = await AsyncStorage.getItem('users');
      if (userDataString) {
        let userDataArray = JSON.parse(userDataString);
        const foundUserIndex = userDataArray.findIndex(
          (u: any) => u.email === data.email,
        );
        if (foundUserIndex !== -1) {
          userDataArray[foundUserIndex].first_name = data.first_name;
          userDataArray[foundUserIndex].last_name = data.last_name;
          var updatedUser = userDataArray[foundUserIndex];
          await AsyncStorage.setItem('users', JSON.stringify(userDataArray));
          dispatch({type: 'ADD_USER', payload: userDataArray});
          dispatch({type: 'SET_LOGIN', payload: updatedUser});
          navigation.navigate('Home');
        }
      }
    } catch (error) {
      Alert.alert('Error', 'Error updating user details');
    }
  };

  return (
    <Drawer drawer={drawer} user={user} navigation={navigation}>
      <Background
        source={require('../../assests/images/purple-background.jpg')}>
        <Header user={user} drawer={drawer} />
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
    </Drawer>
  );
};

export default UserDetails;

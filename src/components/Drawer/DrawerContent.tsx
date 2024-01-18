import React from 'react';
import {useLoggedInUser} from '../../utils/selectors';
import {Alert, Text, View} from 'react-native';
import Button from '../Button/Button';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/actions/actions';
import {drawerStyle} from './DrawerContent.style';

const DrawerContent = () => {
  const user = useLoggedInUser();
  const dispatch = useDispatch();

  const OnSignoutPressed = async () => {
    try {
      dispatch(logout());
    } catch (error) {
      Alert.alert('Error', 'Error signing out');
    }
  };

  return (
    <View style={drawerStyle.drawerContainer}>
      <View style={drawerStyle.userInfoDrawer}>
        <Text style={drawerStyle.userInfoText}>
          {`${user?.first_name} ${user?.last_name}`}
        </Text>
        <Text style={drawerStyle.userInfoText}>{user?.email}</Text>
      </View>
      <Button btnLabel="Logout" onPress={OnSignoutPressed} />
    </View>
  );
};

export default DrawerContent;

import React from 'react';
import {useLoggedInUser} from '../../utils/selectors';
import {Alert, View} from 'react-native';
import Button from '../Button/Button';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/actions/actions';
import {drawerStyle} from './DrawerContent.style';
import TextField from '../TextField/TextField';
import {modal} from '../../utils/label';

const DrawerContent = () => {
  const user = useLoggedInUser();
  const dispatch = useDispatch();

  const OnSignoutPressed = async () => {
    try {
      dispatch(logout());
    } catch (error) {
      Alert.alert(modal.header, modal.signOut);
    }
  };

  return (
    <View style={drawerStyle.drawerContainer}>
      <View style={drawerStyle.userInfoDrawer}>
        <TextField
          style={drawerStyle.userInfoText}
          label={`${user?.first_name} ${user?.last_name}`}
        />
        <TextField style={drawerStyle.userInfoText} label={user?.email} />
      </View>
      <Button btnLabel="Logout" onPress={OnSignoutPressed} />
    </View>
  );
};

export default DrawerContent;

import React, {useState} from 'react';
import {View, Text, Alert} from 'react-native';
import {headerStyle} from './Header.style';
import HamburgerIcon from 'react-native-vector-icons/FontAwesome';
import UserIcon from 'react-native-vector-icons/EvilIcons';
import {Drawer} from 'react-native-drawer-layout';
import Button from '../Button/Button';
import BackIcon from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import {logout} from '../../redux/actions/actions';

const Header = ({user, navigation, children, home}: HeaderProps) => {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const OnSignoutPressed = async () => {
    try {
      dispatch(logout());
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Error signing out');
    }
  };

  const navigationView = () => (
    <View style={headerStyle.drawerContainer}>
      <View style={headerStyle.userInfoDrawer}>
        <Text style={headerStyle.userInfoText}>
          {`${user?.first_name} ${user?.last_name}`}
        </Text>
        <Text style={headerStyle.userInfoText}>{user?.email}</Text>
      </View>
      <Button btnLabel="Logout" onPress={OnSignoutPressed} />
    </View>
  );

  return (
    <Drawer
      open={open}
      onOpen={() => setOpen(true)}
      onClose={() => setOpen(false)}
      renderDrawerContent={navigationView}>
      <View style={headerStyle.headerContainer}>
        {home ? (
          <HamburgerIcon
            name="bars"
            size={30}
            color="white"
            onPress={() => setOpen(prevOpen => !prevOpen)}
          />
        ) : (
          <BackIcon
            name="arrow-back"
            size={30}
            color="white"
            onPress={() => navigation.goBack()}
          />
        )}
        <View style={headerStyle.profileContainer}>
          <Text style={headerStyle.headerText}>{user?.first_name}</Text>
          <UserIcon name="user" size={30} color="white" />
        </View>
      </View>
      {children}
    </Drawer>
  );
};

export default Header;

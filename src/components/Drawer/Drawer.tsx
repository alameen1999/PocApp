import {View, Text, Alert, DrawerLayoutAndroid} from 'react-native';
import React from 'react';
import {drawerStyle} from './Drawer.style';
import Button from '../Button/Button';

const Drawer = ({user, drawer, navigation, children}: any) => {
  const OnSignoutPressed = async () => {
    try {
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Error sigining out');
    }
  };
  const navigationView = () => (
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
  return (
    <DrawerLayoutAndroid
      ref={drawer}
      drawerWidth={300}
      drawerPosition="left"
      renderNavigationView={navigationView}
      drawerBackgroundColor="#EED0FF">
      {children}
    </DrawerLayoutAndroid>
  );
};

export default Drawer;

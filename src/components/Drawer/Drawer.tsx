import {View, Text, Alert, DrawerLayoutAndroid} from 'react-native';
import React from 'react';
import {drawerStyle} from './Drawer.style';
import Button from '../Button/Button';
// import AsyncStorage from '@react-native-async-storage/async-storage';

const Drawer = ({user, drawer, navigation, children}: any) => {
  const OnSignoutPressed = async () => {
    try {
      // const userDataString = await AsyncStorage.getItem('users');

      // if (userDataString) {
      //   const userDataArray = JSON.parse(userDataString);

      //   const foundUserIndex = userDataArray.findIndex(
      //     (item: any) => item.email === user?.email,
      //   );

      //   if (foundUserIndex !== -1) {
      //     userDataArray[foundUserIndex].loggedIn = false;
      //     await AsyncStorage.setItem('users', JSON.stringify(userDataArray));
      //   }
      // }
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

import React, {useEffect, useRef, useState} from 'react';
import {Alert, FlatList, Text, TouchableOpacity, View} from 'react-native';
import Background from '../../components/Background/Background';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {homeStyle} from './Home.style';
import Button from '../../components/Button/Button';
import Header from '../../components/Header/Header';
import {DrawerLayoutAndroid} from 'react-native';
import Loader from '../../components/Loader/Loader';

const Home = ({navigation}: NavigationProps) => {
  const [userDetail, setUserDetail] = useState<any>();
  const [userDetails, setUserDetails] = useState<any>();
  const [userFound, setUserFound] = useState(false);
  const drawer = useRef<DrawerLayoutAndroid>(null);

  useEffect(() => {
    setTimeout(() => {
      getUserDetails();
    }, 2000);
  }, []);

  const getUserDetails = async () => {
    let userData: string | null = await AsyncStorage.getItem('users');
    if (userData) {
      let parsedData = JSON.parse(userData);
      setUserDetails(parsedData);
      const foundUser = parsedData.find((user: any) => user.loggedIn === true);
      setUserDetail(foundUser);
      setUserFound(true);
    } else {
      setUserFound(false);
    }
  };

  const OnSignoutPressed = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('users');
      if (userDataString) {
        const userDataArray = JSON.parse(userDataString);
        const foundUserIndex = userDataArray.findIndex(
          (user: any) => user.email === userDetail?.email,
        );

        if (foundUserIndex !== -1) {
          userDataArray[foundUserIndex].loggedIn = false;
          await AsyncStorage.setItem('users', JSON.stringify(userDataArray));
        }
      }
      setUserDetail('');
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Error sigining out');
    }
  };

  const navigationView = () => (
    <View style={homeStyle.drawerContainer}>
      <View style={homeStyle.userInfoDrawer}>
        <Text style={homeStyle.userInfoText}>
          {`${userDetail?.first_name} ${userDetail?.last_name}`}
        </Text>
        <Text style={homeStyle.userInfoText}>{userDetail?.email}</Text>
      </View>
      <Button btnLabel="Logout" onPress={OnSignoutPressed} />
    </View>
  );

  const navigateToUserDetails = (user: any) => {
    navigation.navigate('UserDetail', {user});
  };

  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity onPress={() => navigateToUserDetails(item)}>
      <View style={homeStyle.userContainer}>
        <View style={homeStyle.userInfoView}>
          <Text
            style={
              homeStyle.userName
            }>{`${item.first_name} ${item.last_name}`}</Text>
          <Text style={homeStyle.email}>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const keyExtractor = (item: any) => item.email;

  return (
    <>
      {userFound === false ? (
        <Loader visible={true} />
      ) : (
        <DrawerLayoutAndroid
          ref={drawer}
          drawerWidth={300}
          drawerPosition="left"
          renderNavigationView={navigationView}
          drawerBackgroundColor="#EED0FF">
          <Background
            source={require('../../assests/images/purple-background.jpg')}>
            <Header user={userDetail?.first_name} drawer={drawer} />
            <View style={homeStyle.container}>
              {userDetails && (
                <FlatList
                  style={homeStyle.userList}
                  data={userDetails}
                  renderItem={renderItem}
                  keyExtractor={keyExtractor}
                />
              )}
            </View>
          </Background>
        </DrawerLayoutAndroid>
      )}
    </>
  );
};

export default Home;

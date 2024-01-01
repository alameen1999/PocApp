import React, {useEffect, useState} from 'react';
import {Alert, Text, View} from 'react-native';
import Background from '../../components/Background/Background';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {homeStyle} from './Home.style';
import Button from '../../components/Button/Button';

const Home = ({navigation}: NavigationProps) => {
  const [userDetails, setUserDetails] = useState<any>();

  useEffect(() => {
    getUserDetails();
  });

  const getUserDetails = async () => {
    let userData: string | null = await AsyncStorage.getItem('users');
    if (userData) {
      let parsedData = JSON.parse(userData);
      const foundUser = parsedData.find((user: any) => user.loggedIn === true);
      setUserDetails(foundUser);
    }
  };

  const OnSignoutPressed = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('users');
      if (userDataString) {
        const userDataArray = JSON.parse(userDataString);
        const foundUserIndex = userDataArray.findIndex(
          (user: any) => user.Email === userDetails?.Email,
        );

        if (foundUserIndex !== -1) {
          userDataArray[foundUserIndex].loggedIn = false;
          await AsyncStorage.setItem('users', JSON.stringify(userDataArray));
        }
      }
      navigation.navigate('Login');
    } catch (error) {
      Alert.alert('Error', 'Errir sigining out');
    }
  };

  return (
    <Background source={require('../../assests/images/purple-background.jpg')}>
      <View style={homeStyle.container}>
        <Text style={homeStyle.testContent}>Welcome {userDetails?.User}</Text>
        <Button btnLabel="Logout" onPress={OnSignoutPressed} />
      </View>
    </Background>
  );
};

export default Home;

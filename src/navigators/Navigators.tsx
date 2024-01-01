import React, {useEffect, useState} from 'react';
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Home from '../screens/Home/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader/Loader';

const Stack = createNativeStackNavigator();

const Navigators = () => {
  const [initialRoute, setInitialRoute] = useState('');

  useEffect(() => {
    setTimeout(() => {
      authUser();
    }, 2000);
  }, []);

  const authUser = async () => {
    try {
      const userDataString = await AsyncStorage.getItem('users');
      if (userDataString) {
        const userDataArray = JSON.parse(userDataString);
        const foundUser = userDataArray.find(
          (user: any) => user.loggedIn === true,
        );

        if (foundUser) {
          setInitialRoute('Home');
        } else {
          setInitialRoute('Landing');
        }
      }
    } catch (error) {
      setInitialRoute('Landing');
    }
  };
  return (
    <NavigationContainer>
      {!initialRoute ? (
        <Loader visible={true} />
      ) : (
        <>
          <Stack.Navigator
            screenOptions={{headerShown: false}}
            initialRouteName={initialRoute}>
            <Stack.Screen name="Landing" component={LandingScreen} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </>
      )}
    </NavigationContainer>
  );
};

export default Navigators;

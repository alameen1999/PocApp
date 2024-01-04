import React, {useEffect, useState} from 'react';
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Home from '../screens/Home/Home';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loader from '../components/Loader/Loader';
import UserDetails from '../screens/UserDetails/UserDetails';
import {Provider} from 'react-redux';
import {store} from '../store/store';

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
      } else {
        setInitialRoute('Landing');
      }
    } catch (error) {
      setInitialRoute('Landing');
    }
  };

  return (
    <Provider store={store}>
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
              <Stack.Screen name="UserDetail" component={UserDetails} />
            </Stack.Navigator>
          </>
        )}
      </NavigationContainer>
    </Provider>
  );
};

export default Navigators;

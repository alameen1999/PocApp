import React from 'react';
import LandingScreen from '../screens/LandingScreen/LandingScreen';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '../screens/Login/Login';
import Register from '../screens/Register/Register';
import Home from '../screens/Home/Home';
import UserDetails from '../screens/UserDetails/UserDetails';
import {Provider} from 'react-redux';
import {store} from '../store/store';

const Stack = createNativeStackNavigator();

const Navigators = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{headerShown: false}}
          initialRouteName="Landing">
          <Stack.Screen name="Landing" component={LandingScreen} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="UserDetail" component={UserDetails} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default Navigators;

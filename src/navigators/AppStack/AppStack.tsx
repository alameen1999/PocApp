import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home/Home';
import UserDetails from '../../screens/UserDetails/UserDetails';

const AppStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="UserDetail" component={UserDetails} />
    </Stack.Navigator>
  );
};

export default AppStack;

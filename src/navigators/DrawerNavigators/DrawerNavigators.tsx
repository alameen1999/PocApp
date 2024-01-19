import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AppStack from '../AppStack/AppStack';
import DrawerContent from '../../components/DrawerContent/DrawerContent';

const DrawerNavigators = () => {
  const Drawer = createDrawerNavigator();
  const drawerContent = () => <DrawerContent />;
  return (
    <Drawer.Navigator
      drawerContent={drawerContent}
      screenOptions={{headerShown: false}}>
      <Drawer.Screen name="Drawer" component={AppStack} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigators;

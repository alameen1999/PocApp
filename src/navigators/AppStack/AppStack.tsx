import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../screens/Home/Home';
import UserDetails from '../../screens/UserDetails/UserDetails';
import HamburgerIcon from 'react-native-vector-icons/FontAwesome';
import {DrawerActions, useNavigation} from '@react-navigation/native';
import ProfileContent from '../../components/ProfileContent/ProfileContent';
import {colors} from '../../utils/colors';

const AppStack = () => {
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();
  const profileContent = () => <ProfileContent />;

  const headerIcon = () => (
    <HamburgerIcon
      name="bars"
      size={30}
      color={colors.TertiaryColor}
      onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
    />
  );

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {backgroundColor: colors.headerColor},
        headerTitleAlign: 'center',
        headerTitle: '',
        headerRight: profileContent,
      }}>
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerLeft: headerIcon}}
      />
      <Stack.Screen name="UserDetail" component={UserDetails} />
    </Stack.Navigator>
  );
};

export default AppStack;

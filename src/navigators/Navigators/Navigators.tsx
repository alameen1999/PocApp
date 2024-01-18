import React from 'react';
import AuthStack from '../AuthStack/AuthStack';
import {useLoggedIn} from '../../utils/selectors';
import DrawerNavigators from '../DrawerNavigators/DrawerNavigators';

const Navigators = () => {
  const isLoggedIn = useLoggedIn();
  return <>{isLoggedIn ? <DrawerNavigators /> : <AuthStack />}</>;
};

export default Navigators;

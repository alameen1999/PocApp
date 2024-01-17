import React from 'react';
import AppStack from '../AppStack/AppStack';
import AuthStack from '../AuthStack/AuthStack';
import {useLoggedIn} from '../../utils/selectors';

const StackNavigators = () => {
  const isLoggedIn = useLoggedIn();
  // console.log('islogin: ', isLoggedIn);
  return <>{isLoggedIn ? <AppStack /> : <AuthStack />}</>;
};

export default StackNavigators;

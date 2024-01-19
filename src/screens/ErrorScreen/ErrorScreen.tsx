import {View} from 'react-native';
import React from 'react';
import Button from '../../components/Button/Button';
import TextField from '../../components/TextField/TextField';

const ErrorScreen = ({navigation}: Navigation) => {
  const OnBackPressed = () => {
    navigation.goBack();
  };
  return (
    <View>
      <TextField label="Error, Try again" />
      <Button btnLabel="Go Back" onPress={OnBackPressed} />
    </View>
  );
};

export default ErrorScreen;

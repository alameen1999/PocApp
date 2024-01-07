import {View, Text} from 'react-native';
import React from 'react';
import Button from '../../components/Button/Button';

const ErrorScreen = ({navigation}: Navigation) => {
  const OnBackPressed = () => {
    navigation.goBack();
  };
  return (
    <View>
      <Text>Error, Try again</Text>
      <Button btnLabel="Go Back" onPress={OnBackPressed} />
    </View>
  );
};

export default ErrorScreen;

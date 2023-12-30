import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {buttonStyle} from './Button.style';

const Button = ({
  btnLabel,
  buttonContainer,
  buttonText,
  onPress = () => {},
}: any) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[buttonStyle.buttonContainer, buttonContainer]}>
      <Text style={[buttonStyle.buttonText, buttonText]}>{btnLabel}</Text>
    </TouchableOpacity>
  );
};

export default Button;

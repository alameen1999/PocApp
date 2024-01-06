import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {buttonStyle} from './Button.style';

const Button = ({
  btnLabel,
  buttonContainer,
  buttonText,
  onPress,
}: ButtonProps) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={[buttonStyle.buttonContainer, buttonContainer]}>
      <Text style={[buttonStyle.buttonText, buttonText]}>{btnLabel}</Text>
    </TouchableOpacity>
  );
};

export default Button;

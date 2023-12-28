import {Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {buttonStyle} from './Button.style';

const Button = ({btnLabel, buttonContainer, buttonText}: ButtonProps) => {
  return (
    <TouchableOpacity style={[buttonStyle.buttonContainer, buttonContainer]}>
      <Text style={[buttonStyle.buttonText, buttonText]}>{btnLabel}</Text>
    </TouchableOpacity>
  );
};

export default Button;

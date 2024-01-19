import {TouchableOpacity} from 'react-native';
import React from 'react';
import {buttonStyle} from './Button.style';
import TextField from '../TextField/TextField';

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
      <TextField
        style={[buttonStyle.buttonText, buttonText]}
        label={btnLabel}
      />
    </TouchableOpacity>
  );
};

export default Button;

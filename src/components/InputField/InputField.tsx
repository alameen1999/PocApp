import React from 'react';
import {TextInput} from 'react-native';
import {inputStyle} from './InputField.style';

const InputField = ({
  placeholder,
  keyboardType,
  secureTextEntry,
  onChangeText,
}: InputFieldProps) => {
  return (
    <TextInput
      style={inputStyle.input}
      placeholder={placeholder}
      keyboardType={keyboardType}
      secureTextEntry={secureTextEntry}
      onChangeText={onChangeText}
    />
  );
};

export default InputField;

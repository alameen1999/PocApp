import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {inputStyle} from './InputField.style';
import Icon from 'react-native-vector-icons/Ionicons';

const InputField = ({
  label,
  error,
  password,
  onFocus = () => {},
  ...props
}: any) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  const getBorderColor = () => {
    if (error) {
      return 'red';
    } else if (isFocused) {
      return 'rgb(101,37,131)';
    } else {
      return '#F3F4FB';
    }
  };
  return (
    <View style={inputStyle.container}>
      <Text style={inputStyle.label}>{label}</Text>
      <View
        style={[inputStyle.inputContainer, {borderColor: getBorderColor()}]}>
        <TextInput
          secureTextEntry={hidePassword}
          style={inputStyle.inputContent}
          {...props}
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => {
            setIsFocused(false);
          }}
        />
        {password && (
          <Icon
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={inputStyle.iconStyle}
            onPress={() => setHidePassword(!hidePassword)}
          />
        )}
      </View>
      {error && <Text style={inputStyle.errorContent}>{error}</Text>}
    </View>
  );
};

export default InputField;

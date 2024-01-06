import React, {useState} from 'react';
import {Text, TextInput, View} from 'react-native';
import {inputStyle} from './InputField.style';
import Icon from 'react-native-vector-icons/Ionicons';
import {Controller, FieldError} from 'react-hook-form';

const InputField = ({
  label,
  password,
  onFocus = () => {},
  control,
  rules = {},
  name,
  defaultValue,
  ...props
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);
  const [hidePassword, setHidePassword] = useState(password);

  const getBorderColor = (error: FieldError | undefined) => {
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

      <Controller
        control={control}
        name={name}
        rules={rules}
        defaultValue={defaultValue}
        render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
          <>
            <View
              style={[
                inputStyle.inputContainer,
                {borderColor: getBorderColor(error)},
              ]}>
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
                  onBlur;
                  setIsFocused(false);
                }}
                onChangeText={onChange}
                value={value}
              />
              {password && (
                <Icon
                  name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
                  style={inputStyle.iconStyle}
                  onPress={() => setHidePassword(!hidePassword)}
                />
              )}
            </View>
            {error && (
              <Text style={inputStyle.errorContent}>
                {error.message || 'Error'}
              </Text>
            )}
          </>
        )}
      />
    </View>
  );
};

export default InputField;

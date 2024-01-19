import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {inputStyle} from './InputField.style';
import {Controller, FieldError} from 'react-hook-form';
import TextField from '../TextField/TextField';
import {colors} from '../../utils/colors';

const InputField = ({
  label,
  onFocus = () => {},
  control,
  rules = {},
  name,
  defaultValue,
  ...props
}: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const getBorderColor = (error: FieldError | undefined) => {
    if (error) {
      return colors.error;
    } else if (isFocused) {
      return colors.primaryColor;
    } else {
      return colors.lightShade;
    }
  };
  return (
    <View style={inputStyle.container}>
      <TextField style={inputStyle.label} label={label} />

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
            </View>
            {error && (
              <TextField
                style={inputStyle.errorContent}
                label={error.message || 'Error'}
              />
            )}
          </>
        )}
      />
    </View>
  );
};

export default InputField;

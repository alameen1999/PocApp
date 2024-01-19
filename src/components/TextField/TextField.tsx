import {View, Text} from 'react-native';
import React from 'react';
import {textStyle} from './TextField.style';

const TextField = ({label, style}: TextFieldProps) => {
  return (
    <View>
      <Text style={style ? style : textStyle.textTitle}>{label}</Text>
    </View>
  );
};

export default TextField;

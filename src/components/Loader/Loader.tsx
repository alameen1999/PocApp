import React from 'react';
import {useWindowDimensions, View, ActivityIndicator} from 'react-native';
import {loaderStyle} from './Loader.style';
import TextField from '../TextField/TextField';
const Loader = ({visible = false}: LoaderProps) => {
  const {width, height} = useWindowDimensions();
  return (
    visible && (
      <View style={[loaderStyle.container, {height, width}]}>
        <View style={loaderStyle.loader}>
          <ActivityIndicator size="large" />
          <TextField style={loaderStyle.textStyle} labe="Loading..." />
        </View>
      </View>
    )
  );
};

export default Loader;

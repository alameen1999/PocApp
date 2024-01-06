import React from 'react';
import {useWindowDimensions, View, Text, ActivityIndicator} from 'react-native';
import {loaderStyle} from './Loader.style';
const Loader = ({visible = false}: LoaderProps) => {
  const {width, height} = useWindowDimensions();
  return (
    visible && (
      <View style={[loaderStyle.container, {height, width}]}>
        <View style={loaderStyle.loader}>
          <ActivityIndicator size="large" />
          <Text style={loaderStyle.textStyle}>Loading...</Text>
        </View>
      </View>
    )
  );
};

export default Loader;

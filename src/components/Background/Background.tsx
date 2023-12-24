import React from 'react';
import {ImageBackground, SafeAreaView} from 'react-native';
import {backgroundStyle} from './Background.style';

const Background = ({children, source}: any) => {
  return (
    <SafeAreaView style={backgroundStyle.container}>
      <ImageBackground source={source} style={backgroundStyle.imageContainer}>
        {children}
      </ImageBackground>
    </SafeAreaView>
  );
};

export default Background;

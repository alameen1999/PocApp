import React from 'react';
import {View, Text, SafeAreaView} from 'react-native';
import {headerStyle} from './Header.style';
import HamburgerIcon from 'react-native-vector-icons/FontAwesome';
import UserIcon from 'react-native-vector-icons/EvilIcons';

const Header = ({user, drawer}: any) => {
  return (
    <SafeAreaView style={headerStyle.container}>
      <View style={headerStyle.headerContainer}>
        <View style={headerStyle.iconContainer}>
          <HamburgerIcon
            name="bars"
            size={30}
            color="white"
            onPress={() => drawer.current?.openDrawer()}
          />
        </View>
        <Text style={headerStyle.headerText}>{user?.first_name}</Text>
        <UserIcon name="user" size={30} color="white" />
      </View>
    </SafeAreaView>
  );
};

export default Header;

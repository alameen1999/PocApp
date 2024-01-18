import React from 'react';
import {View, Text} from 'react-native';
import UserIcon from 'react-native-vector-icons/EvilIcons';
import {profileStyle} from './ProfileContent.style';
import {useLoggedInUser} from '../../utils/selectors';

const ProfileContent = () => {
  const user = useLoggedInUser();
  return (
    <View style={profileStyle.profileContainer}>
      <Text style={profileStyle.headerText}>{user?.first_name}</Text>
      <UserIcon name="user" size={30} color="white" />
    </View>
  );
};

export default ProfileContent;

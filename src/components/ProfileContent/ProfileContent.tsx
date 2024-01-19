import React from 'react';
import {View} from 'react-native';
import UserIcon from 'react-native-vector-icons/EvilIcons';
import {profileStyle} from './ProfileContent.style';
import {useLoggedInUser} from '../../utils/selectors';
import TextField from '../TextField/TextField';

const ProfileContent = () => {
  const user = useLoggedInUser();
  return (
    <View style={profileStyle.profileContainer}>
      <TextField style={profileStyle.headerText} label={user?.first_name} />
      <UserIcon name="user" size={30} color="white" />
    </View>
  );
};

export default ProfileContent;

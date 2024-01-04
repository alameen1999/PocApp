import React, {useRef} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Background from '../../components/Background/Background';
import {homeStyle} from './Home.style';
import Header from '../../components/Header/Header';
import {DrawerLayoutAndroid} from 'react-native';
import Drawer from '../../components/Drawer/Drawer';
import {useSelector} from 'react-redux';

const Home = ({navigation}: NavigationProps) => {
  const drawer = useRef<DrawerLayoutAndroid>(null);

  const user = useSelector((state: any) => {
    return state.loggedInUser;
  });

  const users = useSelector((state: any) => {
    return state.data;
  });

  const navigateToUserDetails = (user: any) => {
    navigation.navigate('UserDetail', {user});
  };

  const renderItem = ({item}: {item: any}) => (
    <TouchableOpacity onPress={() => navigateToUserDetails(item)}>
      <View style={homeStyle.userContainer}>
        <View style={homeStyle.userInfoView}>
          <Text
            style={
              homeStyle.userName
            }>{`${item.first_name} ${item.last_name}`}</Text>
          <Text style={homeStyle.email}>{item.email}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );

  const keyExtractor = (item: any) => item.email;

  return (
    <Drawer drawer={drawer} user={user} navigation={navigation}>
      <Background
        source={require('../../assests/images/purple-background.jpg')}>
        <Header user={user} drawer={drawer} />
        <View style={homeStyle.container}>
          {users && (
            <FlatList
              style={homeStyle.userList}
              data={users}
              renderItem={renderItem}
              keyExtractor={keyExtractor}
            />
          )}
        </View>
      </Background>
    </Drawer>
  );
};

export default Home;

import React from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Background from '../../components/Background/Background';
import {homeStyle} from './Home.style';
import Header from '../../components/Header/Header';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import {useLoggedIn, useLoggedInUser, useUsers} from '../../utils/selectors';

const Home = ({navigation}: Navigation) => {
  const loggedInUser = useLoggedInUser();
  const users = useUsers();
  const isLoggedIn = useLoggedIn();

  const navigateToUserDetails = (user: User) => {
    navigation.navigate('UserDetail', {user});
  };

  const renderItem = ({item}: {item: User}) => (
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

  const keyExtractor = (item: User) => item.email;

  return (
    <>
      {isLoggedIn ? (
        <Header user={loggedInUser} home={true} navigation={navigation}>
          <Background
            source={require('../../assests/images/purple-background.jpg')}>
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
        </Header>
      ) : (
        <ErrorScreen />
      )}
    </>
  );
};

export default Home;

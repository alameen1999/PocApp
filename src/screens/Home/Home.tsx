import React from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
import Background from '../../components/Background/Background';
import {homeStyle} from './Home.style';
import ErrorScreen from '../ErrorScreen/ErrorScreen';
import {useGetUsers, useLoggedIn} from '../../utils/selectors';
import TextField from '../../components/TextField/TextField';

const Home = ({navigation}: Navigation) => {
  const users = useGetUsers();
  const isLoggedIn = useLoggedIn();

  const navigateToUserDetails = (user: User) => {
    navigation.navigate('UserDetail', {user});
  };

  const renderItem = ({item}: {item: User}) => (
    <TouchableOpacity onPress={() => navigateToUserDetails(item)}>
      <View style={homeStyle.userContainer}>
        <View style={homeStyle.userInfoView}>
          <TextField
            style={homeStyle.userName}
            label={`${item.first_name} ${item.last_name}`}
          />
          <TextField style={homeStyle.email} label={item.email} />
        </View>
      </View>
    </TouchableOpacity>
  );

  const keyExtractor = (item: User) => item.email;

  return (
    <>
      {isLoggedIn ? (
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
      ) : (
        <ErrorScreen />
      )}
    </>
  );
};

export default Home;

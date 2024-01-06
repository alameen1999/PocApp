import {StyleSheet} from 'react-native';

export const headerStyle = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    backgroundColor: '#5A189A',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  profileContainer: {
    flexDirection: 'row',
  },
  drawerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: '#EED0FF',
  },
  userInfoDrawer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  userInfoText: {
    fontSize: 16,
    color: 'rgb(101,37,131)',
  },
});

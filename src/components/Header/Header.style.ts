import {StyleSheet} from 'react-native';

export const headerStyle = StyleSheet.create({
  container: {
    backgroundColor: '#5A189A',
  },
  headerContainer: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: '#5A189A',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerText: {
    color: 'white',
    fontSize: 20,
    fontWeight: 'bold',
  },
  iconContainer: {
    flex: 1,
  },
  drawerContainer: {
    flex: 1,
    padding: 20,
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

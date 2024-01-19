import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const homeStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 22,
  },
  testContent: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  userContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  userInfoView: {
    backgroundColor: colors.lavenderShade,
    marginTop: 10,
    paddingHorizontal: 110,
    justifyContent: 'center',
    borderRadius: 25,
    flex: 1,
    marginRight: 0,
    paddingTop: 10,
  },
  email: {
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
    paddingLeft: 30,
    paddingBottom: 10,
  },
  userName: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.primaryColor,
    marginLeft: 30,
    paddingBottom: 10,
  },
  userList: {
    paddingVertical: 0,
  },
});

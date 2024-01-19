import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const drawerStyle = StyleSheet.create({
  drawerContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.secondaryColor,
  },
  userInfoDrawer: {
    flexDirection: 'column',
    marginBottom: 20,
  },
  userInfoText: {
    fontSize: 16,
    color: colors.primaryColor,
  },
});

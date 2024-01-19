import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const landingStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
  content: {
    color: colors.primaryColor,
    fontSize: 64,
  },
  text: {
    color: colors.primaryColor,
    fontSize: 64,
    marginBottom: 40,
  },
});

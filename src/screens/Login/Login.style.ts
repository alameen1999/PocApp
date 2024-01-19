import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const loginStyle = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card: {
    borderWidth: 1,
    borderColor: colors.TertiaryColor,
    backgroundColor: colors.TertiaryColor,
    borderRadius: 8,
    margin: 16,
    padding: 16,
    width: '80%',
  },
  buttonContainer: {
    backgroundColor: colors.TertiaryColor,
  },
  buttonText: {
    color: colors.primaryColor,
  },
  iconStyle: {
    position: 'absolute',
    right: 10,
    top: 40,
    fontSize: 22,
    color: colors.primaryColor,
  },
});

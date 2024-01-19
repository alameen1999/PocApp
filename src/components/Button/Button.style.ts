import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const buttonStyle = StyleSheet.create({
  buttonContainer: {
    backgroundColor: colors.primaryColor,
    paddingVertical: 12,
    borderRadius: 8,
    marginBottom: 8,
  },
  buttonText: {
    textAlign: 'center',
    color: '#FFFFFF',
    fontWeight: '700',
  },
});

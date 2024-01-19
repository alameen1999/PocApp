import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const inputStyle = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: colors.primaryColor,
  },
  inputContainer: {
    height: 45,
    backgroundColor: colors.lightShade,
    flexDirection: 'row',
    marginHorizontal: 0,
    borderWidth: 0.5,
    alignItems: 'center',
  },
  inputContent: {
    flex: 1,
    textDecorationLine: 'none',
  },
  errorContent: {
    color: colors.error,
    fontSize: 12,
    marginTop: 7,
  },
});

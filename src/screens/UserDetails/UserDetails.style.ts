import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const userDetailsStyles = StyleSheet.create({
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
  cardTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: colors.primaryColor,
  },
});

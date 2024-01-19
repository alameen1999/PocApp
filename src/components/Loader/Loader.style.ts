import {StyleSheet} from 'react-native';
import {colors} from '../../utils/colors';

export const loaderStyle = StyleSheet.create({
  loader: {
    height: 70,
    backgroundColor: colors.TertiaryColor,
    marginHorizontal: 50,
    borderRadius: 5,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  container: {
    position: 'absolute',
    zIndex: 10,
    backgroundColor: 'rgba(0,0,0,0.5)',
    justifyContent: 'center',
  },
  textStyle: {
    marginLeft: 10,
    fontSize: 16,
  },
});

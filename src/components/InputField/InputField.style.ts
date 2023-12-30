import {StyleSheet} from 'react-native';

export const inputStyle = StyleSheet.create({
  container: {
    marginBottom: 20,
  },
  label: {
    marginVertical: 5,
    fontSize: 14,
    color: 'rgb(101,37,131)',
  },
  inputContainer: {
    height: 45,
    backgroundColor: '#F3F4FB',
    flexDirection: 'row',
    marginHorizontal: 0,
    borderWidth: 0.5,
    alignItems: 'center',
  },
  inputContent: {
    flex: 1,
    color: 'rgb(101,37,131)',
    textDecorationLine: 'none',
  },
  errorContent: {
    color: 'red',
    fontSize: 12,
    marginTop: 7,
  },
  iconStyle: {
    fontSize: 22,
    color: 'rgb(101,37,131)',
    marginHorizontal: 5,
  },
});

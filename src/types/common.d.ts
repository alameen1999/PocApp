type ButtonProps = {
  btnLabel: string;
  buttonContainer?: ViewStyle;
  buttonText?: TextStyle;
  Press: () => void;
};

type BackgroundProps = {
  children?: React.ReactNode;
  source: ImageSourcePropType;
};

type InputFieldProps = {
  label: string;
  onChangeText?: (text: string) => void;
};

type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
};

type NavigationProps = NativeStackScreenProps<RootStackParamList>;

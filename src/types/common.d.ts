type ButtonProps = {
  btnLabel: string;
  buttonContainer?: ViewStyle;
  buttonText?: TextStyle;
};

type BackgroundProps = {
  children?: React.ReactNode;
  source: ImageSourcePropType;
};

type InputFieldProps = {
  placeholder?: string;
  keyboardType?: TextInputProps['keyboardType'];
  secureTextEntry?: boolean;
  onChangeText?: (text: string) => void;
};

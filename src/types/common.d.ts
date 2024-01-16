// Common Types
type RootStackParamList = {
  Landing: undefined;
  Login: undefined;
  Register: undefined;
  Home: undefined;
  UserDetail: undefined;
};

type Navigation = NativeStackScreenProps<RootStackParamList>;

type User = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

type LoginFormData = FieldValues & {
  email: string;
  password: string;
};

type RegisterFormData = FieldValues & {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

type UpdateFormData = FieldValues & {
  first_name: string;
  last_name: string;
  email: string;
};

type State = {
  users: User[];
  isLoggedIn: boolean;
  user: any;
};

type Action = {
  type: string;
  payload: any;
};

// Component Types
type BackgroundProps = {
  children?: React.ReactNode;
  source: ImageSourcePropType;
};

type ButtonProps = {
  btnLabel: string;
  buttonContainer?: ViewStyle;
  buttonText?: TextStyle;
  onPress: () => void;
};

type HeaderProps = {
  user?: User;
  navigation: Navigation;
  children: ReactNode;
  home?: boolean;
};

type InputFieldProps = {
  label: string;
  password?: boolean;
  onFocus?: () => void;
  control: Control<FieldValues>;
  rules?: object;
  name: string;
  defaultValue?: string;
  placeholder?: string;
  keyboardType?: KeyboardTypeOptions;
  editable?: boolean;
};

type LoaderProps = {
  visible: boolean;
};

// Reducer Type
type ReducerProps = {
  state?: State;
  action: Action;
};

// Screen Types
type LoginProps = {
  route: any;
  navigation: Navigation;
};

type UserDetailsProps = {
  route: any;
  navigation: Navigation;
};

import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  SignUpScreen: undefined;
  PasswordScreen: {
    data: { firstName: string; lastName: string; email: string };
  };
  // Add other screens here
};

export type PasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "PasswordScreen"
>;
export type PasswordScreenRouteProp = RouteProp<
  RootStackParamList,
  "PasswordScreen"
>;

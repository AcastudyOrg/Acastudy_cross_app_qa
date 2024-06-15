import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RouteProp } from "@react-navigation/native";

export type RootStackParamList = {
  SignUpScreen: undefined;
  SignInScreen: {
    data?: {
      email: string;
      password: string;
    };
  };
  VerifyEmailScreen: {
    data: {
      firstName: string;
      lastName: string;
      email: string;
    };
  };
  VerifyForgotEmailScreen: {
    data: {
      email: string;
    };
  };
  PasswordScreen: {
    data: {
      firstName: string;
      lastName: string;
      email: string;
      otpCode?: string;
    };
  };
  SetNewForgotPasswordScreen: {
    data: {
      email: string;
      otpCode?: string;
    };
  };
  WelcomeScreen: {
    data: {
      firstName: string;
      lastName: string;
      email: string;
      selectedImage: string | ImageSourcePropType;
      username: string;
      password: string;
      otpCode?: string;
    };
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

export type VerifyEmailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "VerifyEmailScreen"
>;
export type VerifyEmailScreenRouteProp = RouteProp<
  RootStackParamList,
  "VerifyEmailScreen"
>;

export type SetNewForgotPasswordScreenNavigationProp =
  NativeStackNavigationProp<RootStackParamList, "SetNewForgotPasswordScreen">;
export type SetNewForgotPasswordScreenRouteProp = RouteProp<
  RootStackParamList,
  "SetNewForgotPasswordScreen"
>;

export type VerifyForgotEmailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "VerifyForgotEmailScreen"
>;
export type VerifyForgotEmailScreenRouteProp = RouteProp<
  RootStackParamList,
  "VerifyForgotEmailScreen"
>;

export type WelcomeScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "WelcomeScreen"
>;
export type WelcomeScreenRouteProp = RouteProp<
  RootStackParamList,
  "WelcomeScreen"
>;

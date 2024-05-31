import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import {
  ForgotPasswordScreen,
  OnboardingScreen,
  PasswordScreen,
  SignInScreen,
  SignUpScreen,
  VerifyEmailScreen,
  WelcomeScreen,
  SetNewForgotPasswordScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

const AppMainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="OnboardingScreen">
        {/* Public Route Screens */}
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen
          name="PasswordScreen"
          component={SetNewForgotPasswordScreen}
        />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
        <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />

        {/* Private Route Screens */}
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppMainNavigation;

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//screens
import {
  OnboardingScreen,
  PrivacyPolicyScreen,
  TermsOfUseScreen,
  PasswordScreen,
  SignInScreen,
  SignUpScreen,
  VerifyEmailScreen,
  ForgotPasswordScreen,
  VerifyForgotEmailScreen,
  SetNewForgotPasswordScreen,
  WelcomeScreen,
  CallScreen,
  ChatScreen,
  HomeScreen,
  ProfileScreen,
  StudyScreen,
} from "../screens";

const Stack = createNativeStackNavigator();

const AppMainNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="HomeScreen"
        screenOptions={{ headerShown: false }}
      >
        {/* Public Route Screens */}
        <Stack.Screen
          name="ForgotPasswordScreen"
          component={ForgotPasswordScreen}
        />
        <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} />
        <Stack.Screen
          name="PrivacyPolicyScreen"
          component={PrivacyPolicyScreen}
        />
        <Stack.Screen name="TermsOfUseScreen" component={TermsOfUseScreen} />
        <Stack.Screen name="SignInScreen" component={SignInScreen} />
        <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
        <Stack.Screen
          name="SetNewForgotPasswordScreen"
          component={SetNewForgotPasswordScreen}
        />
        <Stack.Screen name="PasswordScreen" component={PasswordScreen} />
        <Stack.Screen name="VerifyEmailScreen" component={VerifyEmailScreen} />
        <Stack.Screen
          name="VerifyForgotEmailScreen"
          component={VerifyForgotEmailScreen}
        />

        {/* Private Route Screens */}
        <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
        <Stack.Screen name="CallScreen" component={CallScreen} />
        <Stack.Screen name="ChatScreen" component={ChatScreen} />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
        <Stack.Screen name="StudyScreen" component={StudyScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppMainNavigation;

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
  WelcomeScreen,
  CallScreen,
  ChatScreen,
  HomeScreen,
  StudentProfileScreen,
  StudyScreen,
  SubjectTopicsScreen,
  TutorsScreen,
  TutorProfileScreen,
  SubjectScreen,
  RequestTutorScreen,
} from "../screens";
import { NAV_SCREEN_NAME } from "../constants/strings";


const Stack = createNativeStackNavigator();

const AppMainNavigation = () => {
  return (
    <Stack.Navigator
      initialRouteName={NAV_SCREEN_NAME.StudentProfileScreen}
      screenOptions={{ headerShown: false }}
    >
      {/* Public Route Screens */}
      <Stack.Screen name={NAV_SCREEN_NAME.ForgotPasswordScreen} component={ForgotPasswordScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.OnboardingScreen} component={OnboardingScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.PrivacyPolicyScreen} component={PrivacyPolicyScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.TermsOfUseScreen} component={TermsOfUseScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.SignInScreen} component={SignInScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.SignUpScreen} component={SignUpScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.PasswordScreen} component={PasswordScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.VerifyEmailScreen} component={VerifyEmailScreen} />

      {/* Private Route Screens */}
      <Stack.Screen name={NAV_SCREEN_NAME.WelcomeScreen} component={WelcomeScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.CallScreen} component={CallScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.ChatScreen} component={ChatScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.HomeScreen} component={HomeScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.StudentProfileScreen} component={StudentProfileScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.StudyScreen} component={StudyScreen} />

      <Stack.Screen name={NAV_SCREEN_NAME.SubjectTopicsScreen} component={SubjectTopicsScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.TutorScreen} component={TutorsScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.SubjectScreen} component={SubjectScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.TutorProfileScreen} component={TutorProfileScreen} />
      <Stack.Screen name={NAV_SCREEN_NAME.RequestTutorScreen} component={RequestTutorScreen} />
    </Stack.Navigator>
  );
};

export default AppMainNavigation;

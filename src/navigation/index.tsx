import React, { useState } from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AsyncStorage from "@react-native-async-storage/async-storage";
import EventEmitter from "eventemitter3";

//screens
import {
  OnboardingScreen,
  PrivacyPolicyScreen,
  TermsOfUseScreen,
  PasswordScreen,
  SignInScreen,
  SignUpScreen,
  VerifyEmailScreen,
  QuestioneirScreen,
  QuestioneirScreenTwo,
  ForgotPasswordScreen,
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
} from "@/screens";
import { NAV_SCREEN_NAME, VIEW_MODE } from "../constants/strings";
import TutorHomeScreen from "@/screens/private/Tutor/TutorHomeScreen";
import TutorProfileEditebleScreen from "@/screens/private/Tutor/TutorProfileEditebleScreen";

const PublicNavigation = () => {
  const PublicStack = createNativeStackNavigator();
  return (
    <PublicStack.Navigator
      initialRouteName={NAV_SCREEN_NAME.OnboardingScreen}
      screenOptions={{ headerShown: false }}
    >

      <PublicStack.Screen name={NAV_SCREEN_NAME.ForgotPasswordScreen} component={ForgotPasswordScreen} />
      <PublicStack.Screen name={NAV_SCREEN_NAME.OnboardingScreen} component={OnboardingScreen} />
      <PublicStack.Screen name={NAV_SCREEN_NAME.PrivacyPolicyScreen} component={PrivacyPolicyScreen} />
      <PublicStack.Screen name={NAV_SCREEN_NAME.TermsOfUseScreen} component={TermsOfUseScreen} />
      <PublicStack.Screen name={NAV_SCREEN_NAME.SignInScreen} component={SignInScreen} />
      <PublicStack.Screen name={NAV_SCREEN_NAME.SignUpScreen} component={SignUpScreen} />
      <PublicStack.Screen name={NAV_SCREEN_NAME.PasswordScreen} component={PasswordScreen} />
      <PublicStack.Screen name={NAV_SCREEN_NAME.VerifyEmailScreen} component={VerifyEmailScreen} />
      <PublicStack.Screen name={NAV_SCREEN_NAME.QuestioneirScreen} component={QuestioneirScreen} />
      <PublicStack.Screen name={NAV_SCREEN_NAME.QuestioneirScreenTwo} component={QuestioneirScreenTwo} />
    </PublicStack.Navigator>
  );
}

const PrivateStudentNavigation = () => {
  const PrivateStack = createNativeStackNavigator();
  return (
    <PrivateStack.Navigator
      initialRouteName={NAV_SCREEN_NAME.HomeScreen}
      screenOptions={{ headerShown: false }}
    >
      <PrivateStack.Screen name={NAV_SCREEN_NAME.HomeScreen} component={HomeScreen} />
      <PrivateStack.Screen name={NAV_SCREEN_NAME.CallScreen} component={CallScreen} />
      <PrivateStack.Screen name={NAV_SCREEN_NAME.ProfileScreen} component={StudentProfileScreen} />
      <PrivateStack.Screen name={NAV_SCREEN_NAME.ChatScreen} component={ChatScreen} />
      <PrivateStack.Screen name={NAV_SCREEN_NAME.StudyScreen} component={StudyScreen} />

      <PrivateStack.Screen name={NAV_SCREEN_NAME.SubjectTopicsScreen} component={SubjectTopicsScreen} />
      <PrivateStack.Screen name={NAV_SCREEN_NAME.TutorsScreen} component={TutorsScreen} />
      <PrivateStack.Screen name={NAV_SCREEN_NAME.SubjectScreen} component={SubjectScreen} />
      <PrivateStack.Screen name={NAV_SCREEN_NAME.TutorProfileScreen} component={TutorProfileScreen} />
      <PrivateStack.Screen name={NAV_SCREEN_NAME.RequestTutorScreen} component={RequestTutorScreen} />
    </PrivateStack.Navigator>
  );
};

const PrivateTutorNavigation = () => {
  const PrivateStack = createNativeStackNavigator();
  return (
    <PrivateStack.Navigator
      initialRouteName={NAV_SCREEN_NAME.HomeScreen}
      screenOptions={{ headerShown: false }}
    >
      <PrivateStack.Screen name={NAV_SCREEN_NAME.HomeScreen} component={TutorHomeScreen} />
      <PrivateStack.Screen name={NAV_SCREEN_NAME.CallScreen} component={CallScreen} />
      <PrivateStack.Screen name={NAV_SCREEN_NAME.ProfileScreen} component={TutorProfileEditebleScreen} />

    </PrivateStack.Navigator>
  );
};

export const updateAuthStorage = async (key: string, value?: string | null) => {
  if (value) {
    await AsyncStorage.setItem(key, value);
  } else {
    await AsyncStorage.removeItem(key);
  }
  authEventEmitter.emit("authChange");
};

const authEventEmitter = new EventEmitter();
const AppMainNavigation = () => {
  const [role, setRole] = useState<string>("STUDENT");
  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);

  React.useEffect(() => {
    const fetchAuthenticationStatus = async () => {
      const token = await AsyncStorage.getItem('token');
      const refreshToken = await AsyncStorage.getItem('refreshToken');
      const roleValue = await AsyncStorage.getItem('role');
      setIsAuthenticated(!!token && !!refreshToken);
      setRole(roleValue || "STUDENT");
    };
    fetchAuthenticationStatus();

    // Listen for authentication changes
    const handleAuthChange = () => {
      fetchAuthenticationStatus();
    };
    authEventEmitter.on("authChange", handleAuthChange);
    return () => {
      authEventEmitter.off("authChange", handleAuthChange);
    };
  }, []);

  if (isAuthenticated && role ===  VIEW_MODE.studentView) {
    return <PrivateStudentNavigation />;
  }
  else if (isAuthenticated && role === VIEW_MODE.tutorView) {
    return <PrivateTutorNavigation />;
  }
  return <PublicNavigation />;
};

export default AppMainNavigation;

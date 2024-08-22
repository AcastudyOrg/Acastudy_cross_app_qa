import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../types/router/navigation";
import { COLORS, IMAGES } from "../../constants";
import { signUpScreenStyles } from "../../styles/screensStyle/publicStyle/signUpScreenStyle";
import {
  TextInputComponent,
  SocialAuthButtonComponent,
  GradientButtonComponent,
} from "../../components/";

type SignUpScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "VerifyEmailScreen"
>;

const SignUpScreen = () => {
  const navigation = useNavigation<SignUpScreenNavigationProp>();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [firstNameError, setFirstNameError] = useState<string>("");
  const [lastNameError, setLastNameError] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");

  const handleSubmit = () => {
    if (!firstName.trim() || !lastName.trim() || !email.trim()) {
      setFirstNameError(
        !firstNameError.trim() ? "First name is required." : ""
      );
      setLastNameError(!lastNameError.trim() ? "Last name is required." : "");
      setEmailError(!emailError.trim() ? "Email address is required." : "");
      return;
    }

    const data = {
      firstName,
      lastName,
      email,
    };

    navigation.navigate("VerifyEmailScreen", { data });

    setFirstName("");
    setLastName("");
    setEmail("");
    setFirstNameError("");
    setLastNameError("");
    setEmailError("");
  };

  function renderTitleSection() {
    return (
      <View style={signUpScreenStyles.signUpTitleContainer}>
        <Text style={signUpScreenStyles.signUpTitleItem}>Sign up</Text>
      </View>
    );
  }

  function renderFormInputSection() {
    return (
      <View style={signUpScreenStyles.signUpFormInputContainer}>
        <View style={signUpScreenStyles.signUpFormComponentContainer}>
          <View style={signUpScreenStyles.signUpComponentContainer}>
            <TextInputComponent
              value={firstName}
              onChange={(text) => setFirstName(text)}
              label="First name"
              type="text"
              placeholder="Example"
            />
            {!!firstNameError && (
              <Text style={signUpScreenStyles.signUpErrorTextMessage}>
                {firstNameError}
              </Text>
            )}
          </View>

          <View style={signUpScreenStyles.signUpComponentContainer}>
            <TextInputComponent
              value={lastName}
              onChange={(text) => setLastName(text)}
              label="Last name"
              type="text"
              placeholder="Example"
            />
            {!!lastNameError && (
              <Text style={signUpScreenStyles.signUpErrorTextMessage}>{lastNameError}</Text>
            )}
          </View>

          <View style={signUpScreenStyles.signUpComponentContainer}>
            <TextInputComponent
              value={email}
              onChange={(text) => setEmail(text)}
              label="Email address"
              type="email"
              placeholder="example@company.com"
            />
            {!!emailError && (
              <Text style={signUpScreenStyles.signUpErrorTextMessage}>{emailError}</Text>
            )}
          </View>
        </View>
      </View>
    );
  }

  function renderSubmitButtonSection() {
    return (
      <View style={signUpScreenStyles.signUpSubmitButtonContainer}>
        <GradientButtonComponent onPress={handleSubmit} text="Continue" />

        <View style={signUpScreenStyles.signUpQuestionContainer}>
          <Text style={signUpScreenStyles.signUpQuestionMainText}>
            Already have an account?{" "}
            <Text
              onPress={() => navigation.navigate("SignInScreen" as never)}
              style={signUpScreenStyles.signUpQuestionMainTextLink}
            >
              Sign in
            </Text>
          </Text>
        </View>
      </View>
    );
  }

  function renderSocialLoginSection() {
    return (
      <View style={signUpScreenStyles.thirdPartyContainer}>
        <View style={signUpScreenStyles.thirdPartyOptionContainer}>
          <SocialAuthButtonComponent
            text="Sign up with"
            iconLibrary="AntDesign"
            onPress={() => console.log("Sign in with Google Auth")}
            iconName="google"
            size={30}
            color={COLORS.white}
          />

          <SocialAuthButtonComponent
            text="Sign up with"
            iconLibrary="AntDesign"
            onPress={() => console.log("Sign in with Apple ID")}
            iconName="apple1"
            size={30}
            color={COLORS.white}
          />
        </View>
      </View>
    );
  }

  function renderScreenCOntentList() {
    return (
      <>
        {renderTitleSection()}
        {renderFormInputSection()}
        {renderSubmitButtonSection()}
        {renderSocialLoginSection()}
      </>
    );
  }

  return (
    <ImageBackground
      blurRadius={4}
      source={IMAGES.authBackgroundImage}
      style={signUpScreenStyles.signUpContentContainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={signUpScreenStyles.signUpKeyboardContainer}
      >
        <ScrollView contentContainerStyle={signUpScreenStyles.signUpScrollingContainer}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={signUpScreenStyles.signUpContainer}>
              {renderScreenCOntentList()}
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default SignUpScreen;

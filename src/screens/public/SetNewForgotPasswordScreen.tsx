import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import {
  RootStackParamList,
  VerifyForgotEmailScreenRouteProp,
} from "../../types/router/navigation";
import { IMAGES } from "../../constants";
import { setNewForgotPasswordScreenStyles } from "../../styles/screensStyle/publicStyle/setNewForgotPasswordScreenStyle";
import {
  TextInputComponent,
  GradientButtonComponent,
  AppTopNavigationComponent,
} from "../../components/";

type SetNewForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "SignInScreen"
>;

const SetNewForgotPasswordScreen = () => {
  const navigation = useNavigation<SetNewForgotPasswordScreenNavigationProp>();

  const route = useRoute<VerifyForgotEmailScreenRouteProp>();
  const prevData = route.params.data;

  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const handleSubmit = () => {
    if (!password.trim() || !confirmPassword.trim()) {
      setPasswordError(!password.trim() ? "Password is required." : "");
      setConfirmPasswordError(
        !confirmPassword.trim() ? "Confirm password is required." : ""
      );
      return;
    }

    if (password !== confirmPassword) {
      setPasswordError("Passwords do not match.");
      setConfirmPasswordError("Passwords do not match.");
      return;
    }

    setPasswordError("");
    setConfirmPasswordError("");

    const data = {
      ...prevData,
      password,
    };

    navigation.navigate("SignInScreen", { data });

    setPassword("");
    setConfirmPassword("");
  };

  function renderNavigationSection() {
    return (
      <View style={setNewForgotPasswordScreenStyles.passwordNewNavigatorContainer}>
        <AppTopNavigationComponent
          backNavigation={true}
          authenticatedUser={false}
          companyLogo={true}
        />
      </View>
    );
  }

  function renderInformationSection() {
    return (
      <View style={setNewForgotPasswordScreenStyles.passwordNewTitleContainer}>
        <Text style={setNewForgotPasswordScreenStyles.passwordNewTitleItem}>Create a new password</Text>
        <Text style={setNewForgotPasswordScreenStyles.passwordNewTitle}>
          Please note that this new password will be used to access you account
          next.
        </Text>
      </View>
    );
  }

  function renderFormInputSection() {
    return (
      <View style={setNewForgotPasswordScreenStyles.passwordNewFormContainer}>
        <View style={setNewForgotPasswordScreenStyles.passwordNewFormComponentContainer}>
          <View style={setNewForgotPasswordScreenStyles.passwordNewComponentContainer}>
            <TextInputComponent
              value={password}
              onChange={(text) => setPassword(text)}
              label="Password"
              type="password"
              placeholder="••••••••"
            />
            {!!passwordError && (
              <Text style={setNewForgotPasswordScreenStyles.passwordNewErrorTextMessage}>
                {passwordError}
              </Text>
            )}
          </View>

          <View style={setNewForgotPasswordScreenStyles.passwordNewComponentContainer}>
            <TextInputComponent
              value={confirmPassword}
              onChange={(text) => setConfirmPassword(text)}
              label="Confirm password"
              type="password"
              placeholder="••••••••"
            />
            {!!confirmPasswordError && (
              <Text style={setNewForgotPasswordScreenStyles.passwordNewErrorTextMessage}>
                {confirmPasswordError}
              </Text>
            )}
          </View>
        </View>
      </View>
    );
  }

  function renderSubmitButtonSection() {
    return (
      <View style={setNewForgotPasswordScreenStyles.passwordNewSubmitButtonContainer}>
        <GradientButtonComponent onPress={handleSubmit} text="Reset password" />
      </View>
    );
  }

  function renderScreenContentList() {
    return (
      <>
        {renderNavigationSection()}
        {renderInformationSection()}
        {renderFormInputSection()}
        {renderSubmitButtonSection()}
      </>
    );
  }

  return (
    <ImageBackground
      blurRadius={4}
      source={IMAGES.authBackgroundImage}
      style={setNewForgotPasswordScreenStyles.passwordNewContentContainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={setNewForgotPasswordScreenStyles.passwordNewKeyboardContainer}
      >
        <ScrollView contentContainerStyle={setNewForgotPasswordScreenStyles.passwordNewScrollingContainer}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={setNewForgotPasswordScreenStyles.passwordNewContainer}>
              {renderScreenContentList()}
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default SetNewForgotPasswordScreen;

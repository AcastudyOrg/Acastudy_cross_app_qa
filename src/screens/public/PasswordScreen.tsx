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
  PasswordScreenRouteProp,
} from "../../types/router/navigation";
import { IMAGES } from "../../constants";
import { passwordScreenStyles } from "../../styles/screensStyle/publicStyle/passwordScreenStyle";
import {
  TextInputComponent,
  GradientButtonComponent,
  AppTopNavigationComponent,
  ImagePickerComponent,
} from "../../components/";

type PasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "WelcomeScreen"
>;

const PasswordScreen = () => {
  const navigation = useNavigation<PasswordScreenNavigationProp>();

  const route = useRoute<PasswordScreenRouteProp>();
  const prevData = route.params.data;

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [usernameError, setUsernameError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");
  const [confirmPasswordError, setConfirmPasswordError] = useState<string>("");

  const handleImagePicked = (imageUri: string) => {
    const fileName = imageUri.split("/").pop() || null;
    setSelectedImage(fileName);
  };

  const handleSubmit = () => {
    if (!username.trim() || !password.trim() || !confirmPassword.trim()) {
      setUsernameError(!username.trim() ? "Username is required." : "");
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

    setUsernameError("");
    setPasswordError("");
    setConfirmPasswordError("");

    const data = {
      ...prevData,
      selectedImage: selectedImage || IMAGES.userPlaceholder.toString(),
      username,
      password,
    };

    navigation.navigate("WelcomeScreen", { data });

    setSelectedImage(null);
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  function renderNavigationSection() {
    return (
      <View style={passwordScreenStyles.passwordNavigatorContainer}>
        <AppTopNavigationComponent
          backNavigation={true}
          authenticatedUser={false}
          companyLogo={true}
        />
      </View>
    );
  }

  function renderImagePickerSection() {
    return (
      <View style={passwordScreenStyles.passwordImagePickerContainer}>
        <ImagePickerComponent onImagePicked={handleImagePicked} />
      </View>
    );
  }

  function renderFormInputSection() {
    return (
      <View style={passwordScreenStyles.passwordFormContainer}>
        <View style={passwordScreenStyles.passwordFormComponentContainer}>
          <View style={passwordScreenStyles.passwordComponentContainer}>
            <TextInputComponent
              value={username}
              onChange={(text) => setUsername(text)}
              label="Username"
              type="text"
              placeholder="Example"
            />
            {!!usernameError && (
              <Text style={passwordScreenStyles.passwordErrorTextMessage}>
                {usernameError}
              </Text>
            )}
          </View>

          <View style={passwordScreenStyles.passwordComponentContainer}>
            <TextInputComponent
              value={password}
              onChange={(text) => setPassword(text)}
              label="Password"
              type="password"
              placeholder="••••••••"
            />
            {!!passwordError && (
              <Text style={passwordScreenStyles.passwordErrorTextMessage}>
                {passwordError}
              </Text>
            )}
          </View>

          <View style={passwordScreenStyles.passwordComponentContainer}>
            <TextInputComponent
              value={confirmPassword}
              onChange={(text) => setConfirmPassword(text)}
              label="Confirm password"
              type="password"
              placeholder="••••••••"
            />
            {!!confirmPasswordError && (
              <Text style={passwordScreenStyles.passwordErrorTextMessage}>
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
      <View style={passwordScreenStyles.passwordSubmitButtonContainer}>
        <GradientButtonComponent onPress={handleSubmit} text="Continue" />

        {/* Navigate Section */}
        <View style={passwordScreenStyles.passwordQuestionContainer}>
          <Text style={passwordScreenStyles.passwordQuestionMainText}>
            By continuing you are agreeing to our{" "}
            <Text
              onPress={() => navigation.navigate("TermsOfUseScreen" as never)}
              style={passwordScreenStyles.passwordQuestionMainTextLink}
            >
              terms of use{" "}
            </Text>
            and{" "}
            <Text
              onPress={() =>
                navigation.navigate("PrivacyPolicyScreen" as never)
              }
              style={passwordScreenStyles.passwordQuestionMainTextLink}
            >
              privacy policy
            </Text>
            .
          </Text>
        </View>
      </View>
    );
  }

  function renderScreenContentList() {
    return (
      <>
        {renderNavigationSection()}
        {renderImagePickerSection()}
        {renderFormInputSection()}
        {renderSubmitButtonSection()}
      </>
    );
  }

  return (
    <ImageBackground
      blurRadius={4}
      source={IMAGES.authBackgroundImage}
      style={passwordScreenStyles.passwordContentContainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={passwordScreenStyles.passwordKeyboardContainer}
      >
        <ScrollView contentContainerStyle={passwordScreenStyles.passwordScrollingContainer}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={passwordScreenStyles.passwordContainer}>
              {renderScreenContentList()}
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default PasswordScreen;

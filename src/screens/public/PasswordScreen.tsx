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
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import {
  RootStackParamList,
  PasswordScreenRouteProp,
} from "../../types/router/navigation";
import { COLORS, FONT, IMAGES, SIZE } from "../../constants";
import {
  TextInputComponent,
  ButtonComponent,
  AppTopNavigationComponent,
  ImagePickerComponent,
} from "../../components/";

const PasswordScreen = () => {
  const navigation = useNavigation();

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
      selectedImage: selectedImage || IMAGES.userPlaceholder,
      username,
      password,
      confirmPassword,
    };

    console.log("previous data", { data });

    setSelectedImage("");
    setUsername("");
    setPassword("");
    setConfirmPassword("");
  };

  function renderNavigationSection() {
    return (
      <View style={styles.passwordNavigatorContainer}>
        <AppTopNavigationComponent authenticatedUser={false} />
      </View>
    );
  }

  function renderImagePickerSection() {
    return (
      <View style={styles.passwordImagePickerContainer}>
        <ImagePickerComponent onImagePicked={handleImagePicked} />
      </View>
    );
  }

  function renderFormInputSection() {
    return (
      <View style={styles.passwordFormContainer}>
        <View style={styles.passwordFormComponentContainer}>
          <View style={styles.passwordComponentContainer}>
            <TextInputComponent
              value={username}
              onChange={(text) => setUsername(text)}
              label="Username"
              type="text"
              placeholder="Example"
            />
            {!!usernameError && (
              <Text style={styles.passwordErrorTextMessage}>
                {usernameError}
              </Text>
            )}
          </View>

          <View style={styles.passwordComponentContainer}>
            <TextInputComponent
              value={password}
              onChange={(text) => setPassword(text)}
              label="Password"
              type="password"
              placeholder="••••••••"
            />
            {!!passwordError && (
              <Text style={styles.passwordErrorTextMessage}>
                {passwordError}
              </Text>
            )}
          </View>

          <View style={styles.passwordComponentContainer}>
            <TextInputComponent
              value={confirmPassword}
              onChange={(text) => setConfirmPassword(text)}
              label="Confirm password"
              type="password"
              placeholder="••••••••"
            />
            {!!confirmPasswordError && (
              <Text style={styles.passwordErrorTextMessage}>
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
      <View style={styles.passwordSubmitButtonContainer}>
        <ButtonComponent onPress={handleSubmit} text="Continue" />

        {/* Navigate Section */}
        <View style={styles.passwordQuestionContainer}>
          <Text style={styles.passwordQuestionMainText}>
            By continuing you are agreeing to our{" "}
            <Text
              onPress={() => navigation.navigate("TermsOfUseScreen" as never)}
              style={styles.passwordQuestionMainTextLink}
            >
              terms of use{" "}
            </Text>
            and{" "}
            <Text
              onPress={() =>
                navigation.navigate("PrivacyPolicyScreen" as never)
              }
              style={styles.passwordQuestionMainTextLink}
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
      style={styles.passwordContentContainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.passwordKeyboardContainer}
      >
        <ScrollView contentContainerStyle={styles.passwordScrollingContainer}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.passwordContainer}>
              {renderScreenContentList()}
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  passwordContentContainer: {
    flex: 1,
  },
  passwordKeyboardContainer: {
    flex: 1,
  },
  passwordScrollingContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  passwordContainer: {
    padding: Platform.OS === "ios" ? 30 : 15,
  },
  passwordNavigatorContainer: {
    width: "100%",
    flexDirection: "column",
  },
  passwordImagePickerContainer: {
    height: 140,
    marginVertical: 20,
    justifyContent: "center",
    alignItems: "center",
  },

  //form section
  passwordFormContainer: {
    marginVertical: 30,
    flexDirection: "column",
  },
  passwordFormComponentContainer: {
    marginBottom: 10,
  },
  passwordComponentContainer: {
    marginBottom: 20,
  },
  passwordErrorTextMessage: {
    color: COLORS.red,
    fontSize: SIZE.s,
    marginTop: 5,
  },

  //submit section
  passwordSubmitButtonContainer: {
    width: "100%",
    flexDirection: "column",
    marginBottom: 20,
  },
  passwordQuestionContainer: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  passwordQuestionMainText: {
    color: COLORS.white,
    fontFamily: FONT.interRegular,
    fontSize: SIZE.m,
    textAlign: "center",
  },
  passwordQuestionMainTextLink: {
    color: COLORS.blue,
    fontFamily: FONT.interBold,
    fontSize: SIZE.m,
  },
});

export default PasswordScreen;

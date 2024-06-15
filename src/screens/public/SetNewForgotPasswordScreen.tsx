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
import { COLORS, FONT, IMAGES, SIZE } from "../../constants";
import {
  TextInputComponent,
  ButtonComponent,
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
      <View style={styles.passwordNewNavigatorContainer}>
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
      <View style={styles.passwordNewTitleContainer}>
        <Text style={styles.passwordNewTitleItem}>Create a new password</Text>
        <Text style={styles.passwordNewTitle}>
          Please note that this new password will be used to access you account
          next.
        </Text>
      </View>
    );
  }

  function renderFormInputSection() {
    return (
      <View style={styles.passwordNewFormContainer}>
        <View style={styles.passwordNewFormComponentContainer}>
          <View style={styles.passwordNewComponentContainer}>
            <TextInputComponent
              value={password}
              onChange={(text) => setPassword(text)}
              label="Password"
              type="password"
              placeholder="••••••••"
            />
            {!!passwordError && (
              <Text style={styles.passwordNewErrorTextMessage}>
                {passwordError}
              </Text>
            )}
          </View>

          <View style={styles.passwordNewComponentContainer}>
            <TextInputComponent
              value={confirmPassword}
              onChange={(text) => setConfirmPassword(text)}
              label="Confirm password"
              type="password"
              placeholder="••••••••"
            />
            {!!confirmPasswordError && (
              <Text style={styles.passwordNewErrorTextMessage}>
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
      <View style={styles.passwordNewSubmitButtonContainer}>
        <ButtonComponent onPress={handleSubmit} text="Reset password" />
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
      style={styles.passwordNewContentContainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.passwordNewKeyboardContainer}
      >
        <ScrollView
          contentContainerStyle={styles.passwordNewScrollingContainer}
        >
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.passwordNewContainer}>
              {renderScreenContentList()}
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  passwordNewContentContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  passwordNewKeyboardContainer: {
    flex: 1,
  },
  passwordNewScrollingContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  passwordNewContainer: {
    padding: Platform.OS === "ios" ? 30 : 15,
  },
  passwordNewNavigatorContainer: {
    width: "100%",
    flexDirection: "column",
  },
  passwordNewTitleContainer: {
    marginTop: 120,
    marginBottom: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  passwordNewTitleItem: {
    color: COLORS.white,
    fontSize: SIZE.xxxl,
    fontFamily: FONT.interBold,
    marginBottom: 10,
  },
  passwordNewTitle: {
    paddingHorizontal: 10,
    color: COLORS.white,
    fontSize: SIZE.m,
    fontFamily: FONT.interRegular,
    textAlign: "center",
  },

  //form section
  passwordNewFormContainer: {
    marginVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  passwordNewFormComponentContainer: {
    marginBottom: 10,
  },
  passwordNewComponentContainer: {
    marginBottom: 20,
  },
  passwordNewErrorTextMessage: {
    color: COLORS.red,
    fontSize: SIZE.s,
    marginTop: 5,
  },

  //submit section
  passwordNewSubmitButtonContainer: {
    width: "100%",
    flexDirection: "column",
    marginBottom: 20,
  },
});

export default SetNewForgotPasswordScreen;

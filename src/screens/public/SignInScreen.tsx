import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { COLORS, IMAGES } from "../../constants";
import { signInScreenStyles } from "../../styles/screensStyle/publicStyle/signInScreenStyle";
import {
  TextInputComponent,
  SocialAuthButtonComponent,
  GradientButtonComponent,
} from "../../components/";

const SignInScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<string>("");
  const [passwordError, setPasswordError] = useState<string>("");

  const handleSubmit = () => {
    if (!email.trim() || !password.trim()) {
      setEmailError(!email.trim() ? "Email is required." : "");
      setPasswordError(!password.trim() ? "Password is required." : "");
      setIsLoading(false);
      return;
    };

    setIsLoading(true);

    setTimeout(() => {
      const data = {
        email,
        password,
      };

      console.log("Submitted data: ", data);

      setEmail("");
      setPassword("");
      setEmailError("");
      setPasswordError("");
      setIsLoading(false);
    }, 5000);
  };

  function renderTitleSection() {
    return (
      <View style={signInScreenStyles.signInTitleContainer}>
        <Text style={signInScreenStyles.signInTitleItem}>Log in</Text>
      </View>
    );
  };

  function renderInputSection() {
    return (
      <View style={signInScreenStyles.signInFormInputContainer}>
        <View style={signInScreenStyles.signInFormComponentContainer}>
          <View style={signInScreenStyles.signInComponentContainer}>
            <TextInputComponent
              value={email}
              onChange={(text) => {
                setEmail(text);
                setEmailError("");
              }}
              label="Email"
              type="email"
              placeholder="example@company.com"
            />
            {!!emailError && (
              <Text style={signInScreenStyles.signInErrorTextMessage}>{emailError}</Text>
            )}
          </View>

          <View style={signInScreenStyles.signInComponentContainer}>
            <TextInputComponent
              value={password}
              onChange={(text) => {
                setPassword(text);
                setPasswordError("");
              }}
              label="Password"
              type="password"
              placeholder="••••••••"
            />
            {!!passwordError && (
              <Text style={signInScreenStyles.signInErrorTextMessage}>{passwordError}</Text>
            )}
          </View>
        </View>

        {/*remember and forgot password section*/}
        <View style={signInScreenStyles.signInForgotPasswordContainer}>
          <Pressable
            onPress={() => setRememberMe(!rememberMe)}
            style={signInScreenStyles.signInForgotPasswordContent}
          >
            <AntDesign
              name={rememberMe ? "checkcircle" : "checkcircleo"}
              size={18}
              color={rememberMe ? COLORS.green : COLORS.white}
            />
            <Text style={signInScreenStyles.signInForgotPasswordText}>Remember me</Text>
          </Pressable>

          <View style={signInScreenStyles.signInForgotPasswordContent}>
            <Text onPress={() => navigation.navigate("ForgotPasswordScreen" as never)} style={signInScreenStyles.signInForgotPasswordTextItem}>
              Forgot password?
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderSubmitButtonSection() {
    return (
      <View style={signInScreenStyles.signInSubmitButtonContainer}>
        <GradientButtonComponent
          onPress={handleSubmit}
          text={isLoading ? "Loading..." : "Log in"}
        />

        {/* Navigate Section */}
        <View style={signInScreenStyles.signInQuestionContainer}>
          <Text style={signInScreenStyles.signInQuestionMainText}>
            Don't have an account?{" "}
            <Text
              onPress={() => navigation.navigate("SignUpScreen" as never)}
              style={signInScreenStyles.signInQuestionMainTextLink}
            >
              Sign up
            </Text>
          </Text>
        </View>
      </View>
    );
  }

  function renderSocialOptionSection() {
    return (
      <View style={signInScreenStyles.thirdPartiesContainer}>
        <View style={signInScreenStyles.thirdPartiesOptionContainer}>
          <SocialAuthButtonComponent
            text="Log in with"
            iconLibrary="AntDesign"
            onPress={() => console.log("Sign in with Google Auth")}
            iconName="google"
            size={30}
            color={COLORS.white}
          />

          <SocialAuthButtonComponent
            text="Log in with"
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

  function renderScreenContentList() {
    return (
      <>
        {renderTitleSection()}
        {renderInputSection()}
        {renderSubmitButtonSection()}
        {renderSocialOptionSection()}
      </>
    );
  }

  return (
    <ImageBackground
      blurRadius={4}
      source={IMAGES.authBackgroundImage}
      style={signInScreenStyles.signInContentContainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={signInScreenStyles.signInKeyboardContainer}
      >
        <ScrollView contentContainerStyle={signInScreenStyles.signInScrollingContainer}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={signInScreenStyles.signInContainer}>
              {renderScreenContentList()}
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default SignInScreen;

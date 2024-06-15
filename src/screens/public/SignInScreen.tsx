import React, { useState } from "react";
import {
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";

import { COLORS, FONT, IMAGES, SIZE } from "../../constants";
import {
  TextInputComponent,
  SocialAuthButtonComponent,
  ButtonComponent,
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
    }

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
      <View style={styles.signInTitleContainer}>
        <Text style={styles.signInTitleItem}>Log in</Text>
      </View>
    );
  }

  function renderInputSection() {
    return (
      <View style={styles.signInFormInputContainer}>
        <View style={styles.signInFormComponentContainer}>
          <View style={styles.signInComponentContainer}>
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
              <Text style={styles.signInErrorTextMessage}>{emailError}</Text>
            )}
          </View>

          <View style={styles.signInComponentContainer}>
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
              <Text style={styles.signInErrorTextMessage}>{passwordError}</Text>
            )}
          </View>
        </View>

        {/*remember and forgot password section*/}
        <View style={styles.signInForgotPasswordContainer}>
          <Pressable
            onPress={() => setRememberMe(!rememberMe)}
            style={styles.signInForgotPasswordContent}
          >
            <AntDesign
              name={rememberMe ? "checkcircle" : "checkcircleo"}
              size={18}
              color={rememberMe ? COLORS.green : COLORS.white}
            />
            <Text style={styles.signInForgotPasswordText}>Remember me</Text>
          </Pressable>

          <View style={styles.signInForgotPasswordContent}>
            <Text onPress={() => navigation.navigate("ForgotPasswordScreen" as never)} style={styles.signInForgotPasswordTextItem}>
              Forgot password?
            </Text>
          </View>
        </View>
      </View>
    );
  }

  function renderSubmitButtonSection() {
    return (
      <View style={styles.signInSubmitButtonContainer}>
        <ButtonComponent
          onPress={handleSubmit}
          text={isLoading ? "Loading..." : "Log in"}
        />

        {/* Navigate Section */}
        <View style={styles.signInQuestionContainer}>
          <Text style={styles.signInQuestionMainText}>
            Don't have an account?{" "}
            <Text
              onPress={() => navigation.navigate("SignUpScreen" as never)}
              style={styles.signInQuestionMainTextLink}
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
      <View style={styles.thirdPartiesContainer}>
        <View style={styles.thirdPartiesOptionContainer}>
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
      style={styles.signInContentContainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.signInKeyboardContainer}
      >
        <ScrollView contentContainerStyle={styles.signInScrollingContainer}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.signInContainer}>
              {renderScreenContentList()}
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  signInContentContainer: {
    flex: 1,
        backgroundColor: COLORS.black,
  },
  signInKeyboardContainer: {
    flex: 1,
  },
  signInScrollingContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  signInContainer: {
    padding: Platform.OS === "ios" ? 30 : 15,
  },
  signInTitleContainer: {
    width: "100%",
    height: Platform.OS === "ios" ? 70 : 50,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  signInTitleItem: {
    color: COLORS.white,
    fontFamily: FONT.interBold,
    fontSize: SIZE.l,
  },

  //form input section
  signInFormInputContainer: {
    width: "100%",
    flexDirection: "column",
    marginBottom: Platform.OS === "ios" ? 50 : 10,
  },
  signInFormComponentContainer: {
    marginBottom: 10,
  },
  signInComponentContainer: {
    marginBottom: 20,
  },
  signInErrorTextMessage: {
    color: COLORS.red,
    fontSize: SIZE.s,
    marginTop: 5,
  },

  //forgot password section
  signInForgotPasswordContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  signInForgotPasswordContent: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  signInForgotPasswordText: {
    marginLeft: 10,
    color: COLORS.white,
    fontFamily: FONT.interBold,
    fontSize: SIZE.m,
  },
  signInForgotPasswordTextItem: {
    color: COLORS.blue,
    fontFamily: FONT.interBold,
    fontSize: SIZE.m,
  },

  //submit section
  signInSubmitButtonContainer: {
    width: "100%",
    flexDirection: "column",
    marginBottom: 20,
  },
  signInQuestionContainer: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signInQuestionMainText: {
    color: COLORS.white,
    fontFamily: FONT.interRegular,
    fontSize: SIZE.m,
  },
  signInQuestionMainTextLink: {
    color: COLORS.blue,
    fontFamily: FONT.interBold,
    fontSize: SIZE.m,
  },

  //third party section
  thirdPartiesContainer: {
    marginTop: 50,
    flexDirection: "column",
  },
  thirdPartiesOptionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default SignInScreen;

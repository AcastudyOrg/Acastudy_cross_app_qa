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
import { COLORS, FONT, IMAGES, SIZE } from "../../constants";
import {
  TextInputComponent,
  SocialAuthButtonComponent,
  ButtonComponent,
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
      <View style={styles.signUpTitleContainer}>
        <Text style={styles.signUpTitleItem}>Sign up</Text>
      </View>
    );
  }

  function renderFormInputSection() {
    return (
      <View style={styles.signUpFormInputContainer}>
        <View style={styles.signUpFormComponentContainer}>
          <View style={styles.signUpComponentContainer}>
            <TextInputComponent
              value={firstName}
              onChange={(text) => setFirstName(text)}
              label="First name"
              type="text"
              placeholder="Example"
            />
            {!!firstNameError && (
              <Text style={styles.signUpErrorTextMessage}>
                {firstNameError}
              </Text>
            )}
          </View>

          <View style={styles.signUpComponentContainer}>
            <TextInputComponent
              value={lastName}
              onChange={(text) => setLastName(text)}
              label="Last name"
              type="text"
              placeholder="Example"
            />
            {!!lastNameError && (
              <Text style={styles.signUpErrorTextMessage}>{lastNameError}</Text>
            )}
          </View>

          <View style={styles.signUpComponentContainer}>
            <TextInputComponent
              value={email}
              onChange={(text) => setEmail(text)}
              label="Email address"
              type="email"
              placeholder="example@company.com"
            />
            {!!emailError && (
              <Text style={styles.signUpErrorTextMessage}>{emailError}</Text>
            )}
          </View>
        </View>
      </View>
    );
  }

  function renderSubmitButtonSection() {
    return (
      <View style={styles.signUpSubmitButtonContainer}>
        <ButtonComponent onPress={handleSubmit} text="Continue" />

        <View style={styles.signUpQuestionContainer}>
          <Text style={styles.signUpQuestionMainText}>
            Already have an account?{" "}
            <Text
              onPress={() => navigation.navigate("SignInScreen" as never)}
              style={styles.signUpQuestionMainTextLink}
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
      <View style={styles.thirdPartyContainer}>
        <View style={styles.thirdPartyOptionContainer}>
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
      style={styles.signUpContentContainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.signUpKeyboardContainer}
      >
        <ScrollView contentContainerStyle={styles.signUpScrollingContainer}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.signUpContainer}>
              {renderScreenCOntentList()}
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  signUpContentContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  signUpKeyboardContainer: {
    flex: 1,
  },
  signUpScrollingContainer: {
    flexGrow: 1,
  },
  signUpContainer: {
    padding: Platform.OS === "ios" ? 30 : 15,
  },
  signUpTitleContainer: {
    width: "100%",
    height: Platform.OS === "ios" ? 70 : 50,
    flexDirection: "column",
  },
  signUpTitleItem: {
    color: COLORS.white,
    fontFamily: FONT.plusJakartaBold,
    fontSize: SIZE.xxxl,
  },

  //form input section
  signUpFormInputContainer: {
    width: "100%",
    flexDirection: "column",
    marginBottom: Platform.OS === "ios" ? 50 : 10,
  },
  signUpFormComponentContainer: {
    marginBottom: 10,
  },
  signUpComponentContainer: {
    marginBottom: 20,
  },
  signUpErrorTextMessage: {
    color: COLORS.red,
    fontSize: SIZE.s,
    marginTop: 5,
  },

  //submit section
  signUpSubmitButtonContainer: {
    width: "100%",
    flexDirection: "column",
  },
  signUpQuestionContainer: {
    width: "100%",
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  signUpQuestionMainText: {
    color: COLORS.white,
    fontFamily: FONT.plusJakartaRegular,
    fontSize: SIZE.m,
  },
  signUpQuestionMainTextLink: {
    color: COLORS.blue,
    fontFamily: FONT.plusJakartaBold,
    fontSize: SIZE.m,
  },

  //third party section
  thirdPartyContainer: {
    marginTop: 50,
    flexDirection: "column",
  },
  thirdPartyOptionContainer: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
});

export default SignUpScreen;

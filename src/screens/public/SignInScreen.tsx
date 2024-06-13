import React, { useState } from "react";
import {
  ImageBackground,
  Platform,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";

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

  const handleSubmit = () => {
    const data = {
      email,
      password,
    };

    console.log("Submitted data: ", data);

    setEmail("");
    setPassword("")
  };

  return (
    <ImageBackground
      blurRadius={4}
      source={IMAGES.authBackgroundImage}
      style={styles.signInContentContainer}
    >
      <SafeAreaView style={styles.signInContainer}>
        {/* Title Section */}
        <View style={styles.signInTitleContainer}>
          <Text style={styles.signInTitleItem}>Log in</Text>
        </View>

        {/* Form Input Section */}
        <View style={styles.signInFormInputContainer}>
          <View style={styles.signInFormComponentContainer}>
            <View style={styles.signInComponentContainer}>
              <TextInputComponent
                value={email}
                onChange={(text) => setEmail(text)}
                label="Email"
                type="email"
                placeholder="example@company.com"
              />
            </View>

            <View style={styles.signInComponentContainer}>
              <TextInputComponent
                value={password}
                onChange={(text) => setPassword(text)}
                label="Password"
                type="password"
                placeholder="*********"
              />
            </View>
          </View>
        </View>

        {/* Submit Button Section */}
        <View style={styles.signInSubmitButtonContainer}>
          <ButtonComponent onPress={handleSubmit} text="Log in" />

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

        {/* Third Party Auth Section */}
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
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  signInContentContainer: {
    flex: 1,
  },
  signInContainer: {
    padding: Platform.OS === "ios" ? 30 : 15,
  },
  signInTitleContainer: {
    width: "100%",
    height: Platform.OS === "ios" ? 70 : 50,
    flexDirection: "column",
  },
  signInTitleItem: {
    color: COLORS.white,
    fontFamily: FONT.interBold,
    fontSize: SIZE.xxxl,
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

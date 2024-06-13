import React, { useState } from "react";
import {
  ImageBackground,
  Platform,
  ScrollView,
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

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");

  const handleSubmit = (formData: any) => {
    const data = {
      ...formData,
    };

    console.log("Submitted data: ", data);
  };

  return (
    <ImageBackground
      blurRadius={4}
      source={IMAGES.authBackgroundImage}
      style={styles.signUpContentContainer}
    >
      <SafeAreaView style={styles.signUpContainer}>
        {/* Title Section */}
        <View style={styles.signUpTitleContainer}>
          <Text style={styles.signUpTitleItem}>Sign up</Text>
        </View>

        {/* Form Input Section */}
        <View style={styles.signUpFormInputContainer}>
          <View style={styles.signUpFormComponentContainer}>
            <View style={styles.signUpComponentContainer}>
              <TextInputComponent
                value={firstName}
                onChange={() => setFirstName(firstName)}
                label="First name"
                type="text"
                placeholder="John"
              />
            </View>

            <View style={styles.signUpComponentContainer}>
              <TextInputComponent
                value={lastName}
                onChange={() => setLastName(lastName)}
                label="Last name"
                type="text"
                placeholder="Doe"
              />
            </View>

            <View style={styles.signUpComponentContainer}>
              <TextInputComponent
                value={email}
                onChange={() => setEmail(email)}
                label="Email address"
                type="email"
                placeholder="example@company.com"
              />
            </View>
          </View>
        </View>

        {/* Submit Button Section */}
        <View style={styles.signUpSubmitButtonContainer}>
          <ButtonComponent onPress={() => handleSubmit} text="Sign up" />

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

        {/* Third Party Auth Section */}
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
      </SafeAreaView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  signUpContentContainer: {
    flex: 1,
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
    fontFamily: FONT.interBold,
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
    fontFamily: FONT.interRegular,
    fontSize: SIZE.m,
  },
  signUpQuestionMainTextLink: {
    color: COLORS.blue,
    fontFamily: FONT.interBold,
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

import React, { useState } from "react";
import {
  Image,
  ImageBackground,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
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
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";

import { RootStackParamList } from "../../types/router/navigation";
import { COLORS, FONT, IMAGES, SIZE } from "../../constants";
import {
  AppTopNavigationComponent,
  ButtonComponent,
  TextInputComponent,
} from "../../components";

type ForgotPasswordScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "VerifyForgotEmailScreen"
>;

const ForgotPasswordScreen = () => {
  const navigation = useNavigation<ForgotPasswordScreenNavigationProp>();

  const [email, setEmail] = useState<string>("");
  const [emailError, setEmailError] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [showSuccessModal, setShowSuccessModal] = useState<boolean>(false);

  const handleSubmit = () => {
    if (!email.trim()) {
      setEmailError(!emailError.trim() ? "Email address is required." : "");
      return;
    }

    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      setShowSuccessModal(true);
    }, 5000);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    navigation.navigate("SetNewForgotPasswordScreen", { data: { email } });
  };

  function renderNavigationSection() {
    return (
      <View style={styles.forgotNavigatorContainer}>
        <AppTopNavigationComponent backNavigation={false} companyLogo={true} />
      </View>
    );
  }

  function renderTopImageSection() {
    return (
      <View style={styles.forgotImageIllustrationContainer}>
        <Image
          source={IMAGES.forgotPassword}
          style={styles.forgotImageIllustrationItem}
        />

        <View style={styles.forgotTopTextContainer}>
          <Text style={styles.forgotTopTitleTextItem}>Forgot Password?</Text>
          <Text style={styles.forgotTopTextItem}>
            Don't worry, happens to the best of us.
          </Text>
          <Text style={styles.forgotTopTextItem}>
            Type your email to reset your password.
          </Text>
        </View>
      </View>
    );
  }

  function renderFormSection() {
    return (
      <View style={styles.forgotFormContainer}>
        <View style={styles.forgotInputContainer}>
          <TextInputComponent
            value={email}
            onChange={(text) => setEmail(text)}
            label="Email"
            type="email"
            placeholder="example@company.com"
          />
          {!!emailError && (
            <Text style={styles.forgotErrorTextMessage}>{emailError}</Text>
          )}
        </View>
      </View>
    );
  }

  function renderButtonSection() {
    return (
      <View style={styles.forgotButtonContainer}>
        <ButtonComponent
          onPress={handleSubmit}
          text={isLoading ? "Verify email..." : "Send"}
        />
      </View>
    );
  }

  function renderRedirectSection() {
    return (
      <View style={styles.forgotRedirectContainer}>
        <Text style={styles.forgotRedirectTextItem}>Remember password?</Text>
        <Text
          onPress={() => navigation.goBack()}
          style={styles.forgotRedirectLinkTextItem}
        >
          Log in
        </Text>
      </View>
    );
  }

  function renderSuccessModal() {
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={showSuccessModal}
        onRequestClose={() => setShowSuccessModal(false)}
      >
        <View style={styles.forgotModalContainer}>
          {/*Action section*/}
          <View style={styles.forgotModalActionContainer}>
            <Pressable
              onPress={handleModalClose}
              style={styles.forgotModalActionContent}
            >
              <AntDesign name="closecircle" size={24} color={COLORS.white} />
            </Pressable>
          </View>

          {/*Image section*/}
          <View style={styles.forgotModalImageContainer}>
            <Image
              source={IMAGES.sentEmail}
              style={styles.forgotModalImageItem}
            />
          </View>

          {/*Text section*/}
          <View style={styles.forgotModalTextContainer}>
            <Text style={styles.forgotModalTextItem}>Email sent!</Text>
            <Text style={styles.forgotModalInfoTextItem}>
              We have sent an email to{" "}
              <Text style={styles.forgotModalInfoTextBold}>{email}</Text> with a
              code to reset your password.
            </Text>
          </View>

          {/*Button section*/}
          <View style={styles.forgotModalButtonContainer}>
            <ButtonComponent onPress={handleModalClose} text="Continue" />
          </View>

          {/*Resend section*/}
          <View style={styles.forgotModalResendCodeContainer}>
            <Text style={styles.forgotModalResendCodeTextItem}>
              Email not received?{" "}
              <Text
                onPress={() => console.log("trigger resend")}
                style={styles.forgotModalInfoTextBold}
              >
                Resend
              </Text>
            </Text>
          </View>
        </View>
      </Modal>
    );
  }

  function renderScreenContentList() {
    return (
      <>
        {renderNavigationSection()}
        {renderTopImageSection()}
        {renderFormSection()}
        {renderButtonSection()}
        {renderRedirectSection()}
        {renderSuccessModal()}
      </>
    );
  }

  return (
    <ImageBackground
      blurRadius={4}
      source={IMAGES.authBackgroundImage}
      style={styles.forgotContentContainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.forgotKeyboardContainer}
      >
        <ScrollView contentContainerStyle={styles.forgotScrollingContainer}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.forgotSafeAreaContainer}>
              {renderScreenContentList()}
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  forgotContentContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  forgotKeyboardContainer: {
    flex: 1,
  },
  forgotScrollingContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  forgotSafeAreaContainer: {
    flex: 1,
  },
  forgotNavigatorContainer: {
    width: "100%",
    flexDirection: "column",
  },

  //illustration section
  forgotImageIllustrationContainer: {
    width: "100%",
    marginTop: 30,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  forgotImageIllustrationItem: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  forgotTopTextContainer: {
    marginTop: 10,
    marginBottom: 30,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  forgotTopTitleTextItem: {
    color: COLORS.white,
    fontFamily: FONT.plusJakartaBold,
    fontSize: SIZE.xxxl,
    marginBottom: 10,
  },
  forgotTopTextItem: {
    color: COLORS.white,
    fontFamily: FONT.plusJakartaRegular,
    fontSize: SIZE.l,
  },

  //form section
  forgotFormContainer: {
    width: "100%",
    marginTop: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotInputContainer: {
    marginBottom: 10,
  },
  forgotErrorTextMessage: {
    color: COLORS.red,
    fontSize: SIZE.s,
    marginTop: 5,
  },
  forgotButtonContainer: {
    width: "100%",
    marginTop: 20,
  },

  //redirect section
  forgotRedirectContainer: {
    position: "absolute",
    bottom: Platform.OS === "ios" ? 30 : 10,
    flexDirection: "row",
    alignSelf: "center",
  },
  forgotRedirectTextItem: {
    color: COLORS.white,
    fontSize: SIZE.m,
    fontFamily: FONT.plusJakartaRegular,
  },
  forgotRedirectLinkTextItem: {
    marginLeft: 5,
    color: COLORS.darkBlue,
    fontSize: SIZE.m,
    fontFamily: FONT.plusJakartaBold,
  },

  // Modal styles
  forgotModalContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
    backgroundColor: COLORS.black,
  },
  forgotModalActionContainer: {
    width: "100%",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  forgotModalActionContent: {
    justifyContent: "center",
    alignItems: "center",
  },
  forgotModalImageContainer: {
    width: "100%",
    marginVertical: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  forgotModalImageItem: {
    width: 200,
    height: 200,
    resizeMode: "contain",
  },
  forgotModalTextContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  },
  forgotModalTextItem: {
    color: COLORS.white,
    fontSize: SIZE.xxxl,
    fontFamily: FONT.plusJakartaBold,
    marginBottom: 20,
  },
  forgotModalInfoTextItem: {
    color: COLORS.white,
    fontSize: SIZE.m,
    fontFamily: FONT.plusJakartaRegular,
    textAlign: "center",
  },
  forgotModalInfoTextBold: {
    fontFamily: FONT.plusJakartaBold,
  },
  forgotModalButtonContainer: {
    width: "100%",
    marginTop: 20,
    marginBottom: 30,
  },
  forgotModalResendCodeContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  forgotModalResendCodeTextItem: {
    color: COLORS.white,
    fontSize: SIZE.m,
    fontFamily: FONT.plusJakartaRegular,
  },
});

export default ForgotPasswordScreen;

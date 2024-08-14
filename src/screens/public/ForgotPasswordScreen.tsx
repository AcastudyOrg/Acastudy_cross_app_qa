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
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { AntDesign } from "@expo/vector-icons";

import { RootStackParamList } from "../../types/router/navigation";
import { COLORS, IMAGES } from "../../constants";
import { forgotPasswordScreenStyles } from "../../styles/screensStyle/publicStyle/forgotPasswordScreenStyle";
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
      <View style={forgotPasswordScreenStyles.forgotNavigatorContainer}>
        <AppTopNavigationComponent backNavigation={false} companyLogo={true} />
      </View>
    );
  }

  function renderTopImageSection() {
    return (
      <View style={forgotPasswordScreenStyles.forgotImageIllustrationContainer}>
        <Image
          source={IMAGES.forgotPassword}
          style={forgotPasswordScreenStyles.forgotImageIllustrationItem}
        />

        <View style={forgotPasswordScreenStyles.forgotTopTextContainer}>
          <Text style={forgotPasswordScreenStyles.forgotTopTitleTextItem}>Forgot Password?</Text>
          <Text style={forgotPasswordScreenStyles.forgotTopTextItem}>
            Don't worry, happens to the best of us.
          </Text>
          <Text style={forgotPasswordScreenStyles.forgotTopTextItem}>
            Type your email to reset your password.
          </Text>
        </View>
      </View>
    );
  }

  function renderFormSection() {
    return (
      <View style={forgotPasswordScreenStyles.forgotFormContainer}>
        <View style={forgotPasswordScreenStyles.forgotInputContainer}>
          <TextInputComponent
            value={email}
            onChange={(text) => setEmail(text)}
            label="Email"
            type="email"
            placeholder="example@company.com"
          />
          {!!emailError && (
            <Text style={forgotPasswordScreenStyles.forgotErrorTextMessage}>{emailError}</Text>
          )}
        </View>
      </View>
    );
  }

  function renderButtonSection() {
    return (
      <View style={forgotPasswordScreenStyles.forgotButtonContainer}>
        <ButtonComponent
          onPress={handleSubmit}
          text={isLoading ? "Verify email..." : "Send"}
        />
      </View>
    );
  }

  function renderRedirectSection() {
    return (
      <View style={forgotPasswordScreenStyles.forgotRedirectContainer}>
        <Text style={forgotPasswordScreenStyles.forgotRedirectTextItem}>Remember password?</Text>
        <Text
          onPress={() => navigation.goBack()}
          style={forgotPasswordScreenStyles.forgotRedirectLinkTextItem}
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
        <View style={forgotPasswordScreenStyles.forgotModalContainer}>
          {/*Action section*/}
          <View style={forgotPasswordScreenStyles.forgotModalActionContainer}>
            <Pressable
              onPress={handleModalClose}
              style={forgotPasswordScreenStyles.forgotModalActionContent}
            >
              <AntDesign name="closecircle" size={24} color={COLORS.white} />
            </Pressable>
          </View>

          {/*Image section*/}
          <View style={forgotPasswordScreenStyles.forgotModalImageContainer}>
            <Image
              source={IMAGES.sentEmail}
              style={forgotPasswordScreenStyles.forgotModalImageItem}
            />
          </View>

          {/*Text section*/}
          <View style={forgotPasswordScreenStyles.forgotModalTextContainer}>
            <Text style={forgotPasswordScreenStyles.forgotModalTextItem}>Email sent!</Text>
            <Text style={forgotPasswordScreenStyles.forgotModalInfoTextItem}>
              We have sent an email to{" "}
              <Text style={forgotPasswordScreenStyles.forgotModalInfoTextBold}>{email}</Text> with a
              code to reset your password.
            </Text>
          </View>

          {/*Button section*/}
          <View style={forgotPasswordScreenStyles.forgotModalButtonContainer}>
            <ButtonComponent onPress={handleModalClose} text="Continue" />
          </View>

          {/*Resend section*/}
          <View style={forgotPasswordScreenStyles.forgotModalResendCodeContainer}>
            <Text style={forgotPasswordScreenStyles.forgotModalResendCodeTextItem}>
              Email not received?{" "}
              <Text
                onPress={() => console.log("trigger resend")}
                style={forgotPasswordScreenStyles.forgotModalInfoTextBold}
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
      style={forgotPasswordScreenStyles.forgotContentContainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={forgotPasswordScreenStyles.forgotKeyboardContainer}
      >
        <ScrollView contentContainerStyle={forgotPasswordScreenStyles.forgotScrollingContainer}>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={forgotPasswordScreenStyles.forgotSafeAreaContainer}>
              {renderScreenContentList()}
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

export default ForgotPasswordScreen;

import React, { useState, useRef, useEffect } from "react";
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
  TextInput,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { COLORS, FONT, IMAGES, SIZE } from "../../constants";
import { ButtonComponent, AppTopNavigationComponent } from "../../components/";
import {
  RootStackParamList,
  VerifyForgotEmailScreenRouteProp,
} from "../../types/router/navigation";

type VerifyForgotEmailScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  "SetNewForgotPasswordScreen"
>;

const VerifyForgotEmailScreen = () => {
  const navigation = useNavigation<VerifyForgotEmailScreenNavigationProp>();

  const route = useRoute<VerifyForgotEmailScreenRouteProp>();
  const prevData = route.params.data;

  const [otpCode, setOtpCode] = useState<string[]>(["", "", "", "", ""]);
  const [otpCodeError, setOtpCodeError] = useState<string>("");
  const [isVerifying, setIsVerifying] = useState<boolean>(false);
  const [secondsRemaining, setSecondsRemaining] = useState<number>(300);
  const [expiryMessage, setExpiryMessage] = useState<string>(
    "The sent code will expire after 5 minutes."
  );
  const [resendCoolDown, setResendCoolDown] = useState<number>(300);

  const inputs = useRef<(TextInput | null)[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsRemaining((prev) => (prev > 0 ? prev - 1 : 0));
      setResendCoolDown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (secondsRemaining === 0) {
      setExpiryMessage("The code has expired. Please request a new code.");
    }
  }, [secondsRemaining]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
  };

  const handleChange = (text: string, index: number) => {
    if (/^\d*$/.test(text)) {
      let newOtpCode = [...otpCode];
      newOtpCode[index] = text;
      setOtpCode(newOtpCode);

      // Move to next input if current input is filled
      if (text && index < 4) {
        inputs.current[index + 1]?.focus();
      }

      // Move to previous input if current input is empty
      if (!text && index > 0) {
        inputs.current[index - 1]?.focus();
      }
    }
  };

  const handleSubmit = () => {
    if (otpCode.some((digit) => digit === "")) {
      setOtpCodeError(`Please enter the code sent to your email address.`);
      return;
    }

    setOtpCodeError("");
    setIsVerifying(true);

    setTimeout(() => {
      setIsVerifying(false);
      const code = otpCode.join("");

      if (code === code) {
        navigation.navigate("SetNewForgotPasswordScreen", {
          data: { ...prevData, otpCode: code },
        });
      } else {
        setOtpCodeError("The code does not match.");
      }
    }, 5000);
  };

  const handleCodeResend = () => {
    if (resendCoolDown > 0) {
      setOtpCodeError(
        `Please wait ${formatTime(resendCoolDown)} to resend the code.`
      );
      return;
    }

    console.log("Code resent");
    setSecondsRemaining(300);
    setResendCoolDown(300);
    setExpiryMessage("The sent code will expire after 5 minutes.");
    setOtpCodeError("");
    setOtpCode(["", "", "", "", ""]);
    inputs.current[0]?.focus();
  };

  const renderNavigationSection = () => (
    <View style={styles.verifyForgotNavigatorContainer}>
      <AppTopNavigationComponent
        backNavigation={true}
        authenticatedUser={false}
        companyLogo={true}
      />
    </View>
  );

  const renderTopTitleSection = () => (
    <View style={styles.verifyForgotTitleContainer}>
      <Text style={styles.verifyForgotTitleItem}>Code Verification</Text>
      <Text style={styles.verifyForgotInfoTextItem}>
        Enter the code we've sent to{" "}
        <Text style={{ fontFamily: FONT.interBold }}>{prevData.email}</Text>
      </Text>
    </View>
  );

  const renderOtpInputSection = () => (
    <View style={styles.otpForgotInputContainer}>
      {otpCode.map((digit, index) => (
        <TextInput
          key={index}
          ref={(ref) => (inputs.current[index] = ref)}
          style={styles.otpForgotInput}
          value={digit ? "*" : ""}
          onChangeText={(text) => handleChange(text, index)}
          keyboardType="number-pad"
          maxLength={1}
        />
      ))}
    </View>
  );

  const renderSubmitButtonSection = () => (
    <View style={styles.submitForgotButtonContainer}>
      {secondsRemaining === 0 ? (
        <ButtonComponent onPress={handleCodeResend} text="Resend code" />
      ) : (
        <ButtonComponent
          onPress={handleSubmit}
          text={isVerifying ? "Verifying code..." : "Verify"}
        />
      )}
      {otpCodeError ? (
        <Text style={styles.errorForgotText}>{otpCodeError}</Text>
      ) : null}
      <Text style={styles.expiryForgotText}>{expiryMessage}</Text>
      {secondsRemaining > 0 && (
        <Text style={styles.timerForgotText}>
          Resend code in: {formatTime(resendCoolDown)}
        </Text>
      )}
    </View>
  );

  return (
    <ImageBackground
      blurRadius={4}
      source={IMAGES.authBackgroundImage}
      style={styles.verifyForgotContentContainer}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.verifyForgotKeyboardContainer}
      >
        <ScrollView
          contentContainerStyle={styles.verifyForgotScrollingContainer}
        >
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <SafeAreaView style={styles.verifyForgotContainer}>
              {renderNavigationSection()}
              {renderTopTitleSection()}
              {renderOtpInputSection()}
              {renderSubmitButtonSection()}
            </SafeAreaView>
          </TouchableWithoutFeedback>
        </ScrollView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  verifyForgotContentContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  verifyForgotKeyboardContainer: {
    flex: 1,
  },
  verifyForgotScrollingContainer: {
    flexGrow: 1,
    paddingHorizontal: 20,
  },
  verifyForgotContainer: {
    padding: Platform.OS === "ios" ? 30 : 15,
  },
  verifyForgotNavigatorContainer: {
    width: "100%",
    flexDirection: "column",
  },
  // Title section
  verifyForgotTitleContainer: {
    marginTop: 120,
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
  },
  verifyForgotTitleItem: {
    color: COLORS.white,
    fontSize: SIZE.xxxl,
    fontFamily: FONT.interBold,
  },
  verifyForgotInfoTextItem: {
    marginTop: 15,
    color: COLORS.white,
    fontSize: SIZE.m,
    fontFamily: FONT.interRegular,
    textAlign: "center",
  },

  // OTP input section
  otpForgotInputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 40,
  },
  otpForgotInput: {
    width: 50,
    height: 50,
    borderColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 10,
    textAlign: "center",
    color: COLORS.white,
    fontSize: SIZE.l,
    fontFamily: FONT.interRegular,
  },
  errorForgotText: {
    color: COLORS.red,
    marginTop: 10,
    textAlign: "center",
  },
  expiryForgotText: {
    marginTop: 20,
    color: COLORS.white,
    textAlign: "center",
    fontSize: SIZE.s,
  },
  timerForgotText: {
    marginTop: 30,
    color: COLORS.white,
    textAlign: "center",
    fontSize: SIZE.m,
  },

  // Submit button section
  submitForgotButtonContainer: {
    marginTop: 20,
  },
});

export default VerifyForgotEmailScreen;

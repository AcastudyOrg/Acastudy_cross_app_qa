import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useMutation } from "@apollo/client";

import { validateEmail } from "utils/login";
import { NAV_SCREEN_NAME } from "@/constants/strings";
import { GradientButtonComponent } from "@/components/";
import { authScreenStyle } from "@/styles/screensStyle/publicStyle/authScreenStyle";
import TopBarComponent from "@/components/common/TopBar/TopBarComponent";
import GoogleButton from "@/components/common/GoogleButton";
import CustomDivider from "@/components/common/Form/CustomDivider";
import AuthTextField from "@/components/common/Form/AuthTextField";
import { sendVerificationCodeMutation } from "@/graphql/api/auth";

// Note the code does not handle error messages
const SignUpScreen = () => {
  const title: string = "Create your account";
  const subtitle: string = "To Continue to Acastudy";

  const navigation = useNavigation<any>()
  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const [sendVerificationCode, { loading }] = useMutation(sendVerificationCodeMutation);

  const handleSubmit = async () => {
    setError("");
    if (!validateEmail(email)) {
      setError("Invalid Email, Please enter a valid email address.");
      return;
    }

    await sendVerificationCode({ variables: { email } }).then((res) => {
      if (res.data.sendVerificationCode.status === 200)
        navigation.navigate(NAV_SCREEN_NAME.VerifyEmailScreen, { email })
      else throw res.data.sendVerificationCode;
    }).catch((err) => {
      setError(err.message);
    });
  };

  return (
    <View style={authScreenStyle.signInContentContainer}>
      <TopBarComponent showAppName={true} renderRightSection={true} showSearchBar={false} isLSignedIn={false} showBecomeATutorOnly={true} />

      <View style={authScreenStyle.content}>
        <View style={authScreenStyle.container}>
          <Text style={authScreenStyle.title}>{title}</Text>
          <Text style={authScreenStyle.subtitle}>{subtitle}</Text>

          <GoogleButton title="Continue with Google" onPress={() => { console.log("Google") }} />

          <View style={authScreenStyle.divider}>
            <CustomDivider />
            <Text style={authScreenStyle.dividerText}> or </Text>
            <CustomDivider />
          </View>

          <AuthTextField label={"Email Address"} value={email} onChangeText={setEmail} error={error} />

          <GradientButtonComponent text="CONTINUE" loading={loading} onPress={handleSubmit} />

          <View style={authScreenStyle.alternative} >
            <Text>Have an account? </Text>
            <TouchableOpacity onPress={() => { navigation.navigate(NAV_SCREEN_NAME.SignInScreen) }}>
              <Text style={authScreenStyle.clickerbleText}>Sign in.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

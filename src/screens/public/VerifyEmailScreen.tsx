import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { useMutation } from "@apollo/client";

import { User } from "@/types/User/Student";
import { NAV_SCREEN_NAME } from "@/constants/strings";
import { GradientButtonComponent } from "@/components/";
import { authScreenStyle } from "@/styles/screensStyle/publicStyle/authScreenStyle";
import TopBarComponent from "@/components/common/TopBar/TopBarComponent";
import { verifyOTPCodeMutation } from "@/graphql/api/auth";

type VerifyEmailParams = {
  VerifyEmail: {
    email: string;
  };
};

const VerifyEmailScreen = () => {
  const route = useRoute<RouteProp<VerifyEmailParams, 'VerifyEmail'>>();
  const { email } = route.params;

  const title: string = "Confirm email address";
  const subtitle: string = `Please enter the verification code sent to ${email} to complete your signup process.`;

  const navigation = useNavigation<any>();
  const [code, setCode] = useState(['', '', '', '', '']);
  const [error, setError] = useState("");
  const inputRefs = React.useRef<(TextInput | null)[]>([]);

  const [verifyOTPCode, { loading }] = useMutation(verifyOTPCodeMutation);

  const handleInputChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    // Move to next input if value is entered and not last input
    if (value !== '' && index < 4) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handleOnSubmit = async () => {
    setError("");
    const verificationCode = code.join('')
    if (verificationCode.length !== 5) {
      setError("Please enter a valid code or resend code.");
      return;
    }

    await verifyOTPCode({ variables: { email, verificationCode } }).then((res) => {
      if (res.data.verifyOTPCode.status === 200)
        navigation.navigate(NAV_SCREEN_NAME.PasswordScreen, { email });
      else throw res.data.verifyOTPCode;
    }).catch((err) => {
      console.log("err: ", err.message)
      setError(err.message);
    });
  };

  const handleKeyPress = (e: any, index: number) => {
    if (e.nativeEvent.key === "Backspace") {
      const newCode = [...code];
      newCode[index] = '';
      setCode(newCode);
      if (index !== 0) {
        inputRefs.current[index - 1]?.focus();
      }
    }
  };

  const user: User = {
    name: "",
    surname: "",
    profilePictureUrl: 0
  };

  return (
    <View style={authScreenStyle.signInContentContainer}>
      <TopBarComponent showAppName={true} renderRightSection={true} showSearchBar={false} isLSignedIn={false} user={user} showBecomeATutorOnly={true} />

      <View style={authScreenStyle.content}>
        <View style={authScreenStyle.container}>
          <Text style={authScreenStyle.title}>{title}</Text>
          <Text style={authScreenStyle.subtitle}>{subtitle}</Text>

          <View style={authScreenStyle.codeInputRepper}>
            {[...Array(5)].map((_, index) => (
              <TextInput
                key={index}
                ref={(ref) => inputRefs.current[index] = ref}
                style={authScreenStyle.codeInput}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={(value) => handleInputChange(value, index)}
                onKeyPress={(e) => handleKeyPress(e, index)}
                value={code[index]} />
            ))}
          </View>
          <View style={[authScreenStyle.alternative, { paddingTop: 0 }]}>
            {error ? <Text style={authScreenStyle.errorText}>{error}</Text> : null}
          </View>
          <TouchableOpacity style={[authScreenStyle.alternative, { paddingBottom: 20 }]} onPress={() => { }}>
            <Text style={authScreenStyle.clickerbleText}>Resend code.</Text>
          </TouchableOpacity>

          <GradientButtonComponent text="Verify" loading={loading} onPress={handleOnSubmit} />
        </View>
      </View>
    </View>
  );
};

export default VerifyEmailScreen;

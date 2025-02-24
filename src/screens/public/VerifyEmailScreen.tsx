import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { GradientButtonComponent } from "../../components/";
import { authScreenStyle } from "../../styles/screensStyle/publicStyle/authScreenStyle";
import TopBarComponent from "../../components/common/TopBar/TopBarComponent";
import { User } from "../../types/User/Student";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { NAV_SCREEN_NAME } from "../../constants/strings";

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

  const handleInputChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleOnSubmit = () => {
    setError("");
    console.log(code.join(''));
    if (code.join('').length !== 5) { // TODO(Tekstaq): check if code is valid
      setError("Please enter a valid code or resend code.");
      return;
    }
    navigation.navigate(NAV_SCREEN_NAME.PasswordScreen, { email });
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
                style={authScreenStyle.codeInput}
                maxLength={1}
                keyboardType="number-pad"
                onChangeText={(value) => handleInputChange(value, index)}
                value={code[index]} />
            ))}
          </View>
          <View style={[authScreenStyle.alternative, { paddingTop: 0 }]}>
            {error ? <Text style={authScreenStyle.errorText}>{error}</Text> : null}
          </View>
          <TouchableOpacity style={[authScreenStyle.alternative, { paddingBottom: 20 }]} onPress={() => { }}> 
            <Text style={authScreenStyle.clickerbleText}>Resend code.</Text>
          </TouchableOpacity>

          <GradientButtonComponent text="SignIn" onPress={handleOnSubmit} />
        

        </View>
      </View>
    </View>
  );
};

export default VerifyEmailScreen;

import React, { useState } from "react";
import { Text, View, TextInput, TouchableOpacity } from "react-native";

import { GradientButtonComponent } from "../../components/";
import { authScreenStyle } from "../../styles/screensStyle/publicStyle/authScreenStyle";
import TopBarComponent from "../../components/common/TopBar/TopBarComponent";
import { User } from "../../types/User/Student";
import { useNavigation } from "@react-navigation/native";
import { NAV_SCREEN_NAME } from "../../constants/strings";

const VerifyEmailScreen = () => {

  const title: string = "Confirm email address";
  const subtitle: string = "Please enter the verification code sent to `{}` to complete your signup process.";

  const navigation = useNavigation<any>();
  const [code, setCode] = useState(['', '', '', '', '']);

  const handleInputChange = (value: string, index: number) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);
  };

  const handleOnSubmit = () => {
    console.log(code.join(''));
    navigation.navigate(NAV_SCREEN_NAME.HomeScreen)
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

          <TouchableOpacity style={[authScreenStyle.alternative, { paddingBottom: 20 }]} onPress={() => { }}> {/*TODO: navigate to the correct screen*/}
            <Text style={authScreenStyle.clickerbleText}>Resend code.</Text>
          </TouchableOpacity>

          <GradientButtonComponent text="SignIn" onPress={handleOnSubmit} />

        </View>
      </View>
    </View>
  );
};

export default VerifyEmailScreen;

import React, { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation } from "@react-navigation/native";

import { GradientButtonComponent } from "../../components/";
import { authScreenStyle } from "../../styles/screensStyle/publicStyle/authScreenStyle";
import TopBarComponent from "../../components/common/TopBar/TopBarComponent";
import GoogleButton from "../../components/common/GoogleButton";
import CustomDivider from "../../components/common/Form/CustomDivider";
import AuthTextField from "../../components/common/Form/AuthTextField";
import { User } from "../../types/User/Student";
import { NAV_SCREEN_NAME } from "../../constants/strings";

 // Note the code does not handle error messages
const SignUpScreen = () => {
  const title: string = "Create your account";
	const subtitle: string = "To Continue to Acastudy";
	const forgotPassword: string = "Forgot Password";

  const navigation = useNavigation<any>()
	const [email, setEmail] = useState<string>("");
	const [username, setUsername] = useState<string>("");

	const user: User = {
		name: "",
		surname: "",
		profilePictureUrl: 0
	};
	const handleSubmit = () => {
		// Todo(Tekstaq): handle onSubmit here
		console.log("Creds: " + email, username)
    navigation.navigate(NAV_SCREEN_NAME.PasswordScreen)
	};

  return (
    <View style={authScreenStyle.signInContentContainer}>
      <TopBarComponent showAppName={true} renderRightSection={true} showSearchBar={false} isLSignedIn={false} user={user} showBecomeATutorOnly={true} />

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

          <AuthTextField label={"Email Address"} value={email} onChangeText={setEmail} />
          <AuthTextField label={"Username"} value={username} onChangeText={setUsername} />
          
          <GradientButtonComponent text="CONTINUE" onPress={handleSubmit} />

          <View style={authScreenStyle.alternative} >
            <Text>Have an account? </Text>
            <TouchableOpacity onPress={() => { navigation.navigate(NAV_SCREEN_NAME.SignInScreen)}}> {/*TODO: navigate to the correct screen*/}
              <Text style={authScreenStyle.clickerbleText}>Sign in.</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default SignUpScreen;

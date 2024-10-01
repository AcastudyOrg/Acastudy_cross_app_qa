import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";

import TopBarComponent from "../../components/common/TopBar/TopBarComponent";
import { User } from "../../types/User/Student";
import CustomDivider from "../../components/common/Form/CustomDivider";
import GradientButtonComponent from "../../components/common/Form/GradientButtonComponent";
import AuthTextField from "../../components/common/Form/AuthTextField";
import GoogleButton from "../../components/common/GoogleButton";
import { authScreenStyle } from "../../styles/screensStyle/publicStyle/authScreenStyle";
import { useNavigation } from "@react-navigation/native";
import { NAV_SCREEN_NAME, STRING } from "../../constants/strings";

// Note the code does not handle error messages
const SignInScreen = () => {
	const navigation = useNavigation<any>()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");

	const user: User = {
		name: "",
		surname: "",
		profilePictureUrl: 0
	};
	
	const handleSubmit = () => {
		navigation.navigate(NAV_SCREEN_NAME.HomeScreen)
	};

	return (
		<View style={authScreenStyle.signInContentContainer}>
			<TopBarComponent showAppName={true} renderRightSection={true} showSearchBar={false} isLSignedIn={false} user={user} showBecomeATutorOnly={true} />

			<View style={authScreenStyle.content}>
				<View style={authScreenStyle.container}>
					<Text style={authScreenStyle.title}>{STRING.signInTitle}</Text>
					<Text style={authScreenStyle.subtitle}>{STRING.continueToAcastudy}</Text>

					<GoogleButton title="Continue with Google" onPress={() => { console.log("Google") }} />

					<View style={authScreenStyle.divider}>
						<CustomDivider />
						<Text style={authScreenStyle.dividerText}> or </Text>
						<CustomDivider />
					</View>

					<TouchableOpacity style={authScreenStyle.forgotPassword} onPress={() => { navigation.navigate(NAV_SCREEN_NAME.ForgotPasswordScreen) }}> 
						<Text style={authScreenStyle.clickerbleText}>{STRING.forgotPassword}</Text>
					</TouchableOpacity>

					<AuthTextField label={"Email Address"} value={email} onChangeText={setEmail} />
					<AuthTextField label={"Password"} value={password} onChangeText={setPassword} isPassword={true} />
					
					<GradientButtonComponent text="CONTINUE" onPress={handleSubmit} />

					<View style={authScreenStyle.alternative} >
						<Text>No account? </Text>
						<TouchableOpacity onPress={() => { navigation.navigate(NAV_SCREEN_NAME.SignUpScreen) }}> 
							<Text style={authScreenStyle.clickerbleText}>Create account.</Text>
						</TouchableOpacity>
					</View>
				</View>
			</View>
		</View>
	);
};
export default SignInScreen;
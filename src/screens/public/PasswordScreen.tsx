import React, { useState } from "react";
import {
	Text,
	TouchableOpacity,
	View,
} from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

import { RootStackParamList, PasswordScreenRouteProp } from "../../types/router/navigation";
import { GradientButtonComponent } from "../../components/";
import TopBarComponent from "../../components/common/TopBar/TopBarComponent";
import { authScreenStyle } from "../../styles/screensStyle/publicStyle/authScreenStyle";
import AuthTextField from "../../components/common/Form/AuthTextField";
import { User } from "../../types/User/Student";
import { NAV_SCREEN_NAME } from "../../constants/strings";

type PasswordScreenNavigationProp = NativeStackNavigationProp<
	RootStackParamList,
	"WelcomeScreen"
>;

const PasswordScreen = () => {
	const title: string = "Create password";
	const subtitle: string = "Your password should be at least 8 characters long!";

	const user: User = {
		name: "",
		surname: "",
		profilePictureUrl: 0
	};

	const navigation = useNavigation<any>();

	const route = useRoute<PasswordScreenRouteProp>();

	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [passwordError, setPasswordError] = useState<string>("")

	const handleSubmit = () => {
		// Todo(Tekstaq): handle onSubmit here
		console.log("Creds: " + password)
		if (password.trim().length < 7) {
			setPasswordError("The password must me 8 character or longer")
		} else if (password.trim() !== confirmPassword.trim()) {
			setPasswordError("Passwords do not match")
		}

		navigation.navigate(NAV_SCREEN_NAME.HomeScreen)

	};

	return (
		<View style={authScreenStyle.signInContentContainer}>
			<TopBarComponent showAppName={true} renderRightSection={true} showSearchBar={false} isLSignedIn={false} user={user} showBecomeATutorOnly={true} />

			<View style={authScreenStyle.content}>
				<View style={authScreenStyle.container}>
					<Text style={authScreenStyle.title}>{title}</Text>
					<Text style={authScreenStyle.subtitle}>{subtitle}</Text>

					<AuthTextField label={"Password"} value={password} onChangeText={setPassword} isPassword={true} />
					<AuthTextField label={"Confirm Password"} value={confirmPassword} onChangeText={setConfirmPassword} isPassword={true} />

					<GradientButtonComponent text="CONTINUE" onPress={handleSubmit} />

				</View>
			</View>
		</View>
	);
};

export default PasswordScreen;

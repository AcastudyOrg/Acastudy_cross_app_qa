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
import { getPasswordRules, validatePassword } from "utils/login";

const PasswordScreen = () => {
	const title: string = "Create password";
	const subtitle: string = "Your password should be at least 8 characters long!";

	const user: User = {
		name: "",
		surname: "",
		profilePictureUrl: 0
	};

	const navigation = useNavigation<any>();

	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [passwordError, setPasswordError] = useState<string>("")
	const [passwordNotMatchingError, setPasswordNotMatching] = useState<string>("")

	const handleSubmit = () => {
		setPasswordError("")
		setPasswordNotMatching("")
		if (!validatePassword(password.trim())) {
			setPasswordError(getPasswordRules())
			return;
		}
		if (password.trim() !== confirmPassword.trim()) {
			setPasswordNotMatching("Passwords do not match")
			return;
		}

		// Todo(Tekstaq): a user passes this stage they are now registered
		// Register the user here

		navigation.navigate(NAV_SCREEN_NAME.QuestioneirScreen);

	};

	return (
		<View style={authScreenStyle.signInContentContainer}>
			<TopBarComponent showAppName={true} renderRightSection={true} showSearchBar={false} isLSignedIn={false} user={user} showBecomeATutorOnly={true} />

			<View style={authScreenStyle.content}>
				<View style={authScreenStyle.container}>
					<Text style={authScreenStyle.title}>{title}</Text>
					<Text style={authScreenStyle.subtitle}>{subtitle}</Text>

					<AuthTextField label={"Password"} value={password} onChangeText={setPassword} isPassword={true} error={passwordError} />
					<AuthTextField label={"Confirm Password"} value={confirmPassword} onChangeText={setConfirmPassword} isPassword={true} />

					<View style={[authScreenStyle.alternative, { paddingTop: 0, paddingBottom: 10 }]}>
						{passwordNotMatchingError ? <Text style={authScreenStyle.errorText}>{passwordNotMatchingError}</Text> : null}
					</View>

					<GradientButtonComponent text="CONTINUE" onPress={handleSubmit} />

				</View>
			</View>
		</View>
	);
};

export default PasswordScreen;

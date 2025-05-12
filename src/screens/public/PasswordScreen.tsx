import React, { useState } from "react";
import {
	Text,
	View,
} from "react-native";
import { useNavigation, useRoute, RouteProp } from "@react-navigation/native";
import { useMutation } from "@apollo/client";

import { GradientButtonComponent } from "@/components/";
import { getPasswordRules, validatePassword } from "utils/login";
import TopBarComponent from "@/components/common/TopBar/TopBarComponent";
import { authScreenStyle } from "@/styles/screensStyle/publicStyle/authScreenStyle";
import AuthTextField from "@/components/common/Form/AuthTextField";
import { changePasswordMutation } from "@/graphql/api/auth";
import { NAV_SCREEN_NAME } from "@/constants/strings";

type PasswordParams = {
	data: {
		email: string;
		forgotPassword?: boolean;
	};
};

const PasswordScreen = () => {
	const navigation = useNavigation<any>();
	const route = useRoute<RouteProp<PasswordParams, 'data'>>();
	const { email, forgotPassword = false } = route.params;

	const [changePassword, { loading }] = useMutation(changePasswordMutation);

	const title: string = "Create password";
	const subtitle: string = "Your password should be at least 8 characters long!";

	const [password, setPassword] = useState<string>("");
	const [confirmPassword, setConfirmPassword] = useState<string>("");
	const [passwordError, setPasswordError] = useState<string>("")
	const [passwordNotMatchingError, setPasswordNotMatching] = useState<string>("")
	const [error, setError] = useState<string>("");

	const handleSubmit = async () => {
		setError("")
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

		if (forgotPassword) {
			await changePassword({ variables: { email, password } }).then((res) => {
				if (res.data.changePassword.status === 200)
					navigation.navigate(NAV_SCREEN_NAME.SignInScreen);
				else throw res.data.changePassword;
			}).catch((err) => {
				setError(err.message);
			});
		}
		else navigation.navigate(NAV_SCREEN_NAME.QuestioneirScreen, { email, password });
	};

	return (
		<View style={authScreenStyle.signInContentContainer}>
			<TopBarComponent showAppName={true} renderRightSection={true} showSearchBar={false} isLSignedIn={false} showBecomeATutorOnly={true} />

			<View style={authScreenStyle.content}>
				<View style={authScreenStyle.container}>
					<Text style={authScreenStyle.title}>{title}</Text>
					<Text style={authScreenStyle.subtitle}>{subtitle}</Text>

					<AuthTextField label={"Password"} value={password} onChangeText={setPassword} isPassword={true} error={passwordError} />
					<AuthTextField label={"Confirm Password"} value={confirmPassword} onChangeText={setConfirmPassword} isPassword={true} error={error} />

					<View style={[authScreenStyle.alternative, { paddingTop: 0, paddingBottom: 10 }]}>
						{passwordNotMatchingError ? <Text style={authScreenStyle.errorText}>{passwordNotMatchingError}</Text> : null}
					</View>

					<GradientButtonComponent text="CONTINUE" loading={loading} onPress={handleSubmit} />
				</View>
			</View>
		</View>
	);
};

export default PasswordScreen;

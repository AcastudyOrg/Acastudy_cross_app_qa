import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useMutation } from "@apollo/client";

import TopBarComponent from "@/components/common/TopBar/TopBarComponent";
import CustomDivider from "@/components/common/Form/CustomDivider";
import GradientButtonComponent from "@/components/common/Form/GradientButtonComponent";
import AuthTextField from "@/components/common/Form/AuthTextField";
import GoogleButton from "@/components/common/GoogleButton";
import { authScreenStyle } from "@/styles/screensStyle/publicStyle/authScreenStyle";
import { useNavigation } from "@react-navigation/native";
import { NAV_SCREEN_NAME, STRING } from "@/constants/strings";
import { loginMutation } from "@/graphql/api/auth";
import { updateAuthStorage } from "@/navigation";

type localVariablesType = {
	id: string;
	role: string;
	token: string;
	refreshToken: string;
}
const SignInScreen = () => {
	const navigation = useNavigation<any>()
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [error, setError] = useState("");

	const [login, { loading }] = useMutation(loginMutation);

	const handleSubmit = async () => {
		setError("");
		await login({ variables: { email, password } }).then(async (res) => {
			if (res.data.login.status === 200) {
				setLocalVariables(res.data.login.data);
				
			}
			else throw res.data.login;
		}).catch((err) => {
			console.error("Login error: ", err);
			setError("Invalid email or password");
		});
	};

	const setLocalVariables = async (data: localVariablesType) => {
		await updateAuthStorage('token', data.token);
		await updateAuthStorage('refreshToken', data.refreshToken);
		await updateAuthStorage('userId', data.id);
		await updateAuthStorage('role', data.role);
	}

	return (
		<View style={authScreenStyle.signInContentContainer}>
			<TopBarComponent showAppName={true} renderRightSection={true} showSearchBar={false} isLSignedIn={false} showBecomeATutorOnly={true} />

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

					{error ? <Text style={authScreenStyle.errorText}>{error}</Text> : null}

					<GradientButtonComponent text="CONTINUE" loading={loading} onPress={handleSubmit} />

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
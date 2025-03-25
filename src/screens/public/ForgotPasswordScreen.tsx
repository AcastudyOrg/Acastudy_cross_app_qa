import React, { useState } from "react";
import { View, Text } from "react-native";
import { useMutation } from "@apollo/client";

import { User } from "@/types/User/Student";
import TopBarComponent from "@/components/common/TopBar/TopBarComponent";
import { authScreenStyle } from "@/styles/screensStyle/publicStyle/authScreenStyle";
import AuthTextField from "@/components/common/Form/AuthTextField";
import GradientButtonComponent from "@/components/common/Form/GradientButtonComponent";
import { NAV_SCREEN_NAME, STRING } from "@/constants/strings";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { sendVerificationCodeMutation } from "@/graphql/api/auth";
import { validateEmail } from "utils/login";

const user: User = {
	name: "",
	surname: "",
	profilePictureUrl: 0,
	subjects: []
};

type propTypes = NativeStackScreenProps<any>;

const ForgotPasswordScreen: React.FC<propTypes> = ({ navigation }) => {
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
				navigation.navigate(NAV_SCREEN_NAME.VerifyEmailScreen, { email, forgotPassword: true });
			else throw res.data.sendVerificationCode;
		}).catch((err) => {
			setError(err.message);
		});
	};

	return (
		<View style={authScreenStyle.signInContentContainer}>
			<TopBarComponent showAppName={true} renderRightSection={true} showSearchBar={false} isLSignedIn={false} user={user} showBecomeATutorOnly={true} />

			<View style={authScreenStyle.content}>
				<View style={authScreenStyle.container}>
					<Text style={authScreenStyle.title}>{STRING.forgotPassword}</Text>
					<Text style={authScreenStyle.subtitle}>{STRING.forgotPasswordSubTitle}</Text>
					<AuthTextField label={"Email Address"} value={email} onChangeText={setEmail} error={error} />
					<GradientButtonComponent text="CONTINUE" loading={loading} onPress={handleSubmit} />
				</View>
			</View>
		</View>
	);
};

export default ForgotPasswordScreen;

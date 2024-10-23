import React, { useState } from "react";
import { View, Text } from "react-native";

import TopBarComponent from "../../components/common/TopBar/TopBarComponent";
import { authScreenStyle } from "../../styles/screensStyle/publicStyle/authScreenStyle";
import AuthTextField from "../../components/common/Form/AuthTextField";
import GradientButtonComponent from "../../components/common/Form/GradientButtonComponent";
import { User } from "../../types/User/Student";
import { NAV_SCREEN_NAME, STRING } from "../../constants/strings";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

const user: User = {
	name: "",
	surname: "",
	profilePictureUrl: 0,
	subjects: []
};

type propTypes = NativeStackScreenProps<any>;

const ForgotPasswordScreen: React.FC<propTypes> = ({navigation}) => {
	const [email, setEmail] = useState<string>("");

	const handleSubmit = () => {
		navigation.push(NAV_SCREEN_NAME.VerifyEmailScreen)
	};

	return (
		<View style={authScreenStyle.signInContentContainer}>
			<TopBarComponent showAppName={true} renderRightSection={true} showSearchBar={false} isLSignedIn={false} user={user} showBecomeATutorOnly={true} />
			
			<View style={authScreenStyle.content}>
				<View style={authScreenStyle.container}>
					<Text style={authScreenStyle.title}>{STRING.forgotPassword}</Text>
					<Text style={authScreenStyle.subtitle}>{STRING.forgotPasswordSubTitle}</Text>
					<AuthTextField label={"Email Address"} value={email} onChangeText={setEmail} />
					<GradientButtonComponent text="CONTINUE" onPress={handleSubmit} />
				</View>
			</View>
		</View>
	);
};

export default ForgotPasswordScreen;

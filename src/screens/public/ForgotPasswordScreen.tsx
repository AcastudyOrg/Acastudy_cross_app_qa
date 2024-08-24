import { useState } from "react";
import { View, Text } from "react-native";

import TopBarComponent from "../../components/common/TopBar/TopBarComponent";
import { authScreenStyle } from "../../styles/screensStyle/publicStyle/authScreenStyle";
import AuthTextField from "../../components/common/Form/AuthTextField";
import GradientButtonComponent from "../../components/common/Form/GradientButtonComponent";
import { User } from "../../types/User/Student";

const user: User = {
  name: "",
  surname: "",
  profilePictureUrl: 0
};

const ForgotPasswordScreen = () => {

  const title: string = "Forgot password";
	const subtitle: string = "To reset your password, please provide your email address in the field below.";
	const forgotPassword: string = "Forgot Password";

  const [email, setEmail] = useState<string>("");

  const handleSubmit = () => {
		// Todo(Tekstaq): handle onSubmit here
		console.log("Creds: " + email)
	};

  return (
		<View style={authScreenStyle.signInContentContainer}>
			<TopBarComponent showAppName={true} renderRightSection={true} showSearchBar={false} isLSignedIn={false} user={user} showBecomeATutorOnly={true} />

			<View style={authScreenStyle.content}>
				<View style={authScreenStyle.container}>
					<Text style={authScreenStyle.title}>{title}</Text>
					<Text style={authScreenStyle.subtitle}>{subtitle}</Text>

					<AuthTextField label={"Email Address"} value={email} onChangeText={setEmail} />
					
					<GradientButtonComponent text="CONTINUE" onPress={handleSubmit} />
				</View>
			</View>
		</View>
	);
};

export default ForgotPasswordScreen;

import React, { } from "react";
import { Text, TouchableOpacity, Image } from "react-native";
import { IMAGES } from "../../constants";
import { googleButtonStyle } from "../../styles/componentsStyle/commonStyle/formStyle/GoogleButtonStyle";


interface Props {
	title: string;
	onPress: () => void;
}

const GoogleButton: React.FC<Props> = ({ title, onPress }) => {
	return (
		<TouchableOpacity style={googleButtonStyle.button} onPress={onPress}>
			 <Image source={IMAGES.googleLogo} style={googleButtonStyle.image}/>
			<Text style={googleButtonStyle.buttonText}>{title}</Text>
		</TouchableOpacity>
	);
};

export default GoogleButton;
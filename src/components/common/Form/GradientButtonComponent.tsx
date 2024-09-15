import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { ButtonProps } from "../../../types";
import { buttonComponentStyles } from "../../../styles/componentsStyle/commonStyle/formStyle/buttonComponentStyle";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../../constants";

const GradientButtonComponent = ({
	text,
	onPress,
	majorColor = COLORS.darkPurple,
	middleColor = COLORS.purple
}: ButtonProps) => {
	return (
		<TouchableOpacity style={buttonComponentStyles.touchableView} onPress={onPress}>
			<LinearGradient
				colors={[majorColor, middleColor, majorColor]}
				style={buttonComponentStyles.buttonContainer}
			>
				<View>
					<Text style={buttonComponentStyles.buttonTextItem}> {text}</Text>
				</View>
			</LinearGradient>
		</TouchableOpacity>
	);
};


export default GradientButtonComponent;

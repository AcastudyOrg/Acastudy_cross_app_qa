import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Text, TouchableOpacity, View, ActivityIndicator } from "react-native";

import { ButtonProps } from "@/types";
import { buttonComponentStyles } from "@/styles/componentsStyle/commonStyle/formStyle/buttonComponentStyle";
import { COLORS } from "@/constants";

const GradientButtonComponent = ({
	text,
	loading,
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
					{loading ? <ActivityIndicator color={COLORS.white} size={"small"} /> :
						<Text style={buttonComponentStyles.buttonTextItem}> {text}</Text>}
				</View>
			</LinearGradient>
		</TouchableOpacity>
	);
};


export default GradientButtonComponent;

import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";

import { navStudentTabs, navTutorTabs } from "../../../navigation/navLinks";
import { bottomBarComponentStyles } from "../../../styles/componentsStyle/commonStyle/bottomBarStyle/bottomBarComponentStyle";
import CustomIcon from "../CustomIcon";
import { COLORS } from "../../../constants";
import { VIEW_MODE } from "@/constants/strings";

interface BottomBarComponentProps {
	viewMode?: string;
}

const BottomBarComponent: React.FC<BottomBarComponentProps> = ({ viewMode }) => {
	const navigation = useNavigation<any>();
	const route = useRoute();

	const navTabs = VIEW_MODE.studentView == viewMode ? navStudentTabs : navTutorTabs;

	return (
		<View style={bottomBarComponentStyles.bottomTabMainContainer}>
			{navTabs.map((item, i) => {
				const isActive = route.name === item.link;
				return (
					<TouchableOpacity
						key={i}
						onPress={() => navigation.navigate(item.link)}
						style={bottomBarComponentStyles.bottomTabContentContainer}
					>
						<CustomIcon
							set={item.icon.set}
							name={item.icon.name}
							color={isActive ? COLORS.purple : COLORS.white}
						/>

						<Text
							style={[
								bottomBarComponentStyles.bottomTabItem,
								{ color: isActive ? COLORS.purple : COLORS.white },
							]}
						>
							{item.name}
						</Text>
					</TouchableOpacity>
				);
			})}
		</View>
	);
};

export default BottomBarComponent;

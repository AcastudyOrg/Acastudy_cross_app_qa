import { View, Text, Image } from "react-native";

import { onboardingTopBar } from "../../../styles/componentsStyle/commonStyle/topBarStyle/OnboardingTopBar";

const OnboardingTopBar = () => {
  return (
    <View>
      <View style={onboardingTopBar.container}>
        <View style={onboardingTopBar.logoContainer}>
          <Image
            source={require("../../../../assets/images/appImages/logo/logo-light.png")}
            style={onboardingTopBar.logoItem}
          />
        </View>
        <View style={onboardingTopBar.linksContainer}>
          <Text style={onboardingTopBar.linkTextItem}>Become A Tutor</Text>
          <Text style={onboardingTopBar.separator}>|</Text>
          <Text style={onboardingTopBar.linkTextItem}>Sign In</Text>
          <Text style={onboardingTopBar.separator}>|</Text>
          <Text style={onboardingTopBar.linkTextItem}>Sign Up</Text>
        </View>
      </View>
      <View style={onboardingTopBar.divider} />
    </View>
  );
};

export default OnboardingTopBar;

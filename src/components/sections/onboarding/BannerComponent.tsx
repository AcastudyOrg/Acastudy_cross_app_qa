import { View, Text, ImageBackground } from "react-native";
import { onboardingScreenStyles } from "../../../styles/screensStyle/publicStyle/onboardingScreenStyle";
import { useState } from "react";
import GradientButtonComponent from "../../common/Form/GradientButtonComponent";
import { IMAGES } from "../../../constants";
import { STRING } from "../../../constants/strings";
import { SearchInputComponent } from "../../common/Form/SearchInputComponent";
import useScreenWidth from "../../../hooks/useScreenWidth";
import { isPlatformIOSorAndroid, searchContainerWidth, textWidth } from "../../../../utils/config";

const OnboardingTopImageComponent = () => {
  const [search, setSearch] = useState<string>("");
  const screenWidth = useScreenWidth();
  const bannerTextWidth = textWidth(screenWidth);
  const searchWidth = searchContainerWidth(screenWidth);

  const withConditionalSize = isPlatformIOSorAndroid() ? "auto" : searchWidth 

  return (
    <ImageBackground
      borderRadius={20}
      source={IMAGES.bannerImage}
      style={onboardingScreenStyles.imageBgContainer}
    >
      <View style={onboardingScreenStyles.imageTextContainer}>
        <Text style={onboardingScreenStyles.imageTitleItem}>
          {STRING.bannerTopic}
        </Text>
        <Text style={[onboardingScreenStyles.imageTextInfoItem, { width: withConditionalSize }]}>
          {STRING.bannerContent}
        </Text>
        <Text style={[onboardingScreenStyles.imageTextInfoItem, { width: withConditionalSize }]}>
          {STRING.bannerSubContent}
        </Text>
      </View>
    </ImageBackground>
  );
};

export default OnboardingTopImageComponent;

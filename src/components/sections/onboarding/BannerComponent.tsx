import { View, Text, ImageBackground } from "react-native";
import { onboardingScreenStyles } from "../../../styles/screensStyle/publicStyle/onboardingScreenStyle";
import TextInputComponent from "../../common/Form/TextInputComponent";
import { useState } from "react";
import GradientButtonComponent from "../../common/Form/GradientButtonComponent";
import { IMAGES } from "../../../constants";
import { STRING } from "../../../constants/strings";

const OnboardingTopImageComponent = () => {
  const [search, setSearch] = useState<string>("");

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
        <Text style={onboardingScreenStyles.imageTextInfoItem}>
          {STRING.bannerContent}
        </Text>
        <Text style={onboardingScreenStyles.imageTextInfoItem}>
          {STRING.bannerSubContent}
        </Text>
      </View>

      <View style={onboardingScreenStyles.searchContainer}>
        <View style={onboardingScreenStyles.searchTextContainer}>
          <TextInputComponent
            type="text"
            value={search}
            onChange={(text) => setSearch(text)}
            placeholder="Search Tutors"
            isTextArea={false}
            transparentBg={true}
          />
        </View>

        <View style={onboardingScreenStyles.searchButtonContainer}>
          <GradientButtonComponent text="Search" onPress={() => { console.log("search pressed") }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnboardingTopImageComponent;

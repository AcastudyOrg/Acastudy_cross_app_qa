import { View, Text, ImageBackground } from "react-native";
import { onboardingScreenStyles } from "../../../styles/screensStyle/publicStyle/onboardingScreenStyle";
import { useState } from "react";
import GradientButtonComponent from "../../common/Form/GradientButtonComponent";
import { IMAGES } from "../../../constants";
import { STRING } from "../../../constants/strings";
import { SearchInputComponent } from "../../common/Form/SearchInputComponent";

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
          <SearchInputComponent value={search} placeholder="Search for a subject" onChangeText={setSearch}/>
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

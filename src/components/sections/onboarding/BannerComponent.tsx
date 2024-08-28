import { View, Text, ImageBackground } from "react-native";
import { onboardingScreenStyles } from "../../../styles/screensStyle/publicStyle/onboardingScreenStyle";
import TextInputComponent from "../../common/Form/TextInputComponent";
import { useState } from "react";
import GradientButtonComponent from "../../common/Form/GradientButtonComponent";
import AuthTextField from "../../common/Form/AuthTextField";
import { IMAGES } from "../../../constants";

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
          Personalised Learning, Anytime, Anywhere
        </Text>
        <Text style={onboardingScreenStyles.imageTextInfoItem}>
          Welcome to Acastudy, where education is tailored to fit your needs!
          Our platform connects you with expert tutors who are ready to help you
          achieve academic success. Whether it's a quick session or a scheduled
          deep dive, Acastudy provides flexible, on-demand learning experiences
          that adapt to your goals and availability.
        </Text>
        <Text style={onboardingScreenStyles.imageTextInfoItem}>
          Take control of your academic journey and thrive with Acastudy today!
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
          <GradientButtonComponent
            text="Search"
            onPress={() => {
              console.log("search pressed");
            }}
          />
        </View>
      </View>
    </ImageBackground>
  );
};

export default OnboardingTopImageComponent;

import React, { useState, useEffect } from "react";
import { View} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import Swiper from "react-native-swiper";
import { Entypo } from "@expo/vector-icons";

import onboardingData from "../../../assets/data/onboardingData.json";
import { onboardingScreenStyles } from "../../styles/screensStyle/publicStyle/onboardingScreenStyle";
import { OnboardingItemProps } from "../../types";
import { COLORS } from "../../constants";
import { ButtonComponent } from "../../components";


const OnboardingScreen = () => {
  const [data, setData] = useState<OnboardingItemProps[]>([]);
  const [showButton, setShowButton] = useState(false);

  // const swiperRef = useRef<Swiper>(null);

  useEffect(() => {
    setData(onboardingData);
  }, []);

  const handleMomentumScrollEnd = (event: any, state: any) => {
    const { index, total } = state;
    if (index === data.length - 1) {
      setShowButton(true);
    } else {
      setShowButton(false);
    }
  };

  return (
    <SafeAreaView style={onboardingScreenStyles.onboardingContainer}>
      <View style={onboardingScreenStyles.buttonSubContainer}>
        {showButton && (
          <View style={onboardingScreenStyles.buttonSubContent}>
            <ButtonComponent
              text="Get Started"
              onPress={() => {}}
              icon={
                <Entypo
                  name="chevron-small-right"
                  size={24}
                  color={COLORS.white}
                />
              }
            />
          </View>
        )}
      </View>

      {/* <Swiper
        ref={swiperRef}
        showsButtons={true}
        loop={false}
        dotColor={COLORS.white}
        activeDotColor={COLORS.blue}
        onMomentumScrollEnd={handleMomentumScrollEnd}
      >
        {data.map((item) => (
          <View key={item.id} style={onboardingScreenStyles.onboardingSliderContainer}>
            <Image
              source={{ uri: item.picture }}
              style={onboardingScreenStyles.onboardingSliderImage}
            />
            <Text style={onboardingScreenStyles.onboardingSliderTitle}>{item.title}</Text>
            <Text style={onboardingScreenStyles.onboardingSliderDescription}>
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper> */}
    </SafeAreaView>
  );
};

export default OnboardingScreen;

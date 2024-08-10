import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Dimensions } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// import Swiper from "react-native-swiper";
import { Entypo } from "@expo/vector-icons";

import onboardingData from "../../../assets/data/onboardingData.json";
import { OnboardingItemProps } from "../../types";
import { COLORS, SIZE, WEIGHT } from "../../constants";
import { ButtonComponent } from "../../components";

const { width, height } = Dimensions.get("window");

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
    <SafeAreaView style={styles.onboardingContainer}>
      <View style={styles.buttonSubContainer}>
        {showButton && (
          <View style={styles.buttonSubContent}>
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
          <View key={item.id} style={styles.onboardingSliderContainer}>
            <Image
              source={{ uri: item.picture }}
              style={styles.onboardingSliderImage}
            />
            <Text style={styles.onboardingSliderTitle}>{item.title}</Text>
            <Text style={styles.onboardingSliderDescription}>
              {item.description}
            </Text>
          </View>
        ))}
      </Swiper> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  onboardingContainer: {
    flex: 1,
    backgroundColor: COLORS.black,
  },
  buttonSubContainer: {
    width: "100%",
    paddingTop: 20,
    paddingLeft: "63%",
    marginRight: 5,
  },
  buttonSubContent: {
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  onboardingSliderContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  onboardingSliderImage: {
    width: width * 0.8,
    height: height * 0.5,
    resizeMode: "contain",
    marginBottom: 20,
  },
  onboardingSliderTitle: {
    fontSize: SIZE.xxxl,
    fontWeight: WEIGHT.bold,
    color: COLORS.white,
    textAlign: "center",
    marginBottom: 10,
  },
  onboardingSliderDescription: {
    fontSize: 16,
    color: COLORS.gray,
    textAlign: "center",
  },
});

export default OnboardingScreen;

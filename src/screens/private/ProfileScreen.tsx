import React from "react";
import { ScrollView, Text, View } from "react-native";

import { STRING } from "../../constants/strings";
import { PrivateScreenLayout } from "../../components";
import { profileScreenStyles } from "../../styles/screensStyle/privateStyle/profileScreenStyle";
import { upcomingSessionData } from "../../../assets/data/profile";
import UpcomingSessionComponent from "../../components/sections/userProfile/UpcomingSessionComponent";

const ProfileScreen = () => {
  return (
    <PrivateScreenLayout>
      <View style={profileScreenStyles.homeMainContainer}>
        <Text style={profileScreenStyles.titleTextItem}>
          {STRING.upcomingScreenTitle}
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={profileScreenStyles.upcomingItemContainer}
        >
          {upcomingSessionData.map((item) => (
            <View key={item.id}>
              <UpcomingSessionComponent item={item}/>
            </View>
          )).slice(0,4)}
        </ScrollView>
      </View>
    </PrivateScreenLayout>
  );
};

export default ProfileScreen;

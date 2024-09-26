import React from "react";
import {ScrollView, Text, View } from "react-native";

import { STRING } from "../../constants/strings";
import {
  profileHistoryTableData,
  upcomingSessionData,
} from "../../../assets/data/profile";
import { profileScreenStyles } from "../../styles/screensStyle/privateStyle/profileScreenStyle";

import { PrivateScreenLayout } from "../../components";
import UpcomingSessionComponent from "../../components/sections/userProfile/UpcomingSessionComponent";
import ReviewPastMeetingComponent from "../../components/sections/userProfile/ReviewPastMeetingComponent";
import TopProfileComponent from "../../components/sections/userProfile/TopProfileComponent";

const ProfileScreen = () => {
  return (
    <PrivateScreenLayout>
      <View style={profileScreenStyles.homeMainContainer}>
        {/* top profile section */}
        <TopProfileComponent/>

        {/* Upcoming Sessions */}
        <View style={profileScreenStyles.titleTextItemContainer}>
          <Text style={profileScreenStyles.titleTextItem}>
            {STRING.upcomingScreenTitle}
          </Text>

          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={profileScreenStyles.upcomingItemContainer}
          >
            {upcomingSessionData
              .map((item) => (
                <View key={item.id}>
                  <UpcomingSessionComponent item={item} />
                </View>
              ))
              .slice(0, 4)}
          </ScrollView>
        </View>

        {/* Review Past Meetings */}
        <View style={profileScreenStyles.titleTextItemContainer}>
          <Text style={profileScreenStyles.titleTextItem}>
            {STRING.reviewPastMeetingTitle}
          </Text>

          {/* Pass the tableData from the first object in profileHistoryTableData */}
          <ReviewPastMeetingComponent
            data={profileHistoryTableData[0].tableData}
          />
        </View>
      </View>
    </PrivateScreenLayout>
  );
};

export default ProfileScreen;

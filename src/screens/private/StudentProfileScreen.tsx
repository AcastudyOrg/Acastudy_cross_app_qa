import React from "react";
import { ScrollView, Text, View } from "react-native";

import { STRING } from "../../constants/strings";
import upcomingSessionData from "../../../assets/data/profile/upcomingSessionData.json";
import profileHistoryTableData from "../../../assets/data/profile/profileHistoryTableData.json";
import { profileScreenStyles } from "../../styles/screensStyle/privateStyle/profileScreenStyle";

import { PrivateScreenLayout } from "../../components";
import UpcomingSessionComponent from "../../components/sections/userProfile/UpcomingSessionComponent";
import ReviewPastMeetingsComponent from "../../components/sections/userProfile/ReviewPastMeetingsComponent";
import TopProfileComponent from "../../components/sections/userProfile/TopProfileComponent";
import DeatilsFormComponent from "../../components/sections/userProfile/DetailsFormComponent";

const StudentProfileScreen = () => {
  return (
    <PrivateScreenLayout showTopBar={false}>
      <View style={profileScreenStyles.homeMainContainer}>
        <TopProfileComponent />
        <DeatilsFormComponent />
        
        <View style={profileScreenStyles.titleTextItemContainer}>
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
                <UpcomingSessionComponent item={item} />
              </View>
            )).slice(0, 4)}
          </ScrollView>
        </View>

        <View style={profileScreenStyles.titleTextItemContainer}>
          <Text style={profileScreenStyles.titleTextItem}>
            {STRING.reviewPastMeetingTitle}
          </Text>
          <ReviewPastMeetingsComponent data={profileHistoryTableData.tableData} />
        </View>
      </View>
    </PrivateScreenLayout>
  );
};

export default StudentProfileScreen;

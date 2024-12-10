import React from "react";
import { ScrollView, Text, View } from "react-native";

import { PrivateScreenLayout } from "../../components";
import { callScreenStyles } from "../../styles/screensStyle/privateStyle/callScreenStyle";
import { STRING } from "../../constants/strings";
import CallActionButtons from "../../components/sections/call/CallActionButtons";
import { IMAGES } from "../../constants";
import MeetingCard from "../../components/sections/call/MeetingCard";

const CallScreen = () => {
  const mockMeeting = [
    {
      title: 'Monthly office group meeting',
      time: '15:00 - 16:00',
      attendees: [
        IMAGES.janeImg, IMAGES.janeImg, IMAGES.janeImg,
      ],
    },
    // Add more meeting data as needed
  ];
  return (
    <PrivateScreenLayout
      showTitle={true}
      shouldScroll={false}
      title={STRING.call}
      showSearchBar={false}>
      <ScrollView showsVerticalScrollIndicator={false} style={callScreenStyles.homeMainContainer}>
        <View style={callScreenStyles.headerContainer}>
          <Text style={callScreenStyles.headerText}>{STRING.callLandingScreenHeader}</Text>
        </View>

        <CallActionButtons />

        {/* Todo: add the missing components */}
        <MeetingCard meeting={mockMeeting[0]} />
      </ScrollView>
    </PrivateScreenLayout>
  );
};

export default CallScreen;

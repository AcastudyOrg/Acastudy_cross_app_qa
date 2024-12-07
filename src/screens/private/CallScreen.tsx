import React from "react";
import { ScrollView, Text, View } from "react-native";

import { PrivateScreenLayout } from "../../components";
import { callScreenStyles } from "../../styles/screensStyle/privateStyle/callScreenStyle";
import { STRING } from "../../constants/strings";
import CallActionButtons from "../../components/sections/call/CallActionButtons";

const CallScreen = () => {
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

		<CallActionButtons/>

		
      </ScrollView>
    </PrivateScreenLayout>
  );
};

export default CallScreen;

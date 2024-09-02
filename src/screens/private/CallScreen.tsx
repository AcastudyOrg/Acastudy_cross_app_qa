import React from "react";
import { View } from "react-native";

import {ComingSoonComponent, PrivateScreenLayout} from "../../components";
import { callScreenStyles } from "../../styles/screensStyle/privateStyle/callScreenStyle";

const CallScreen = () => {
  return (
    <PrivateScreenLayout>
      <View style={callScreenStyles.homeMainContainer}>
            <ComingSoonComponent/>
      </View>
    </PrivateScreenLayout>
  );
};

export default CallScreen;

import React from "react";
import { View, StyleSheet, Text } from "react-native";

import PrivateScreenLayout from "../../components/layout/PrivateScreenLayout";

const CallScreen = () => {
  return (
    <PrivateScreenLayout>
      <View style={styles.homeMainContainer}>
        <Text>Ho</Text>
      </View>
    </PrivateScreenLayout>
  );
};

const styles = StyleSheet.create({
  homeMainContainer: {
    flex: 1,
  },
});

export default CallScreen;

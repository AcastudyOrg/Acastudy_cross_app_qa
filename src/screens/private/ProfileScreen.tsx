import React from "react";
import { View, StyleSheet } from "react-native";

import PrivateScreenLayout from "../../components/layout/PrivateScreenLayout";

const ProfileScreen = () => {
  return (
    <PrivateScreenLayout>
      <View style={styles.homeMainContainer}>

      </View>
    </PrivateScreenLayout>
  );
};

const styles = StyleSheet.create({
  homeMainContainer: {
    flex:1,
  },
});

export default ProfileScreen;

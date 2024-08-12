import React from "react";
import { View, StyleSheet } from "react-native";

import {ComingSoonComponent, PrivateScreenLayout} from "../../components";

const ProfileScreen = () => {
  return (
    <PrivateScreenLayout>
      <View style={styles.homeMainContainer}>
     <ComingSoonComponent/>
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
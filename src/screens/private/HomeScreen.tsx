import * as React from "react";
import { View, StyleSheet, Text } from "react-native";
import PrivateScreenLayout from "../../components/layout/PrivateScreenLayout";

const HomeScreen = () => {
  return (
    <PrivateScreenLayout>
      <View style={styles.homeContent}>
        <Text style={styles.welcomeText}>Welcome to the Home Screen</Text>
        {/* Add more content here */}
      </View>
    </PrivateScreenLayout>
  );
};

const styles = StyleSheet.create({
  homeContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  welcomeText: {
    fontSize: 24,
    color: "black",
  },
});

export default HomeScreen;

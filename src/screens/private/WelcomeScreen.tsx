import React from "react";
import { StyleSheet, View } from "react-native";
import { useRoute } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";

import { WelcomeScreenRouteProp } from "../../types/router/navigation";
import { COLORS } from "../../constants";
import { AppTopNavigationComponent } from "../../components";

const WelcomeScreen = () => {
  const route = useRoute<WelcomeScreenRouteProp>();
  const user = route.params.data;

  function renderNavigationSection() {
    return (
      <View style={styles.welcomeTopNavigationContainer}>
        <AppTopNavigationComponent
          backNavigation={false}
          authenticatedUser={true}
          companyLogo={true}
        />
      </View>
    );
  }

  function renderScreenContentList() {
    return <>{renderNavigationSection()}</>;
  }

  return (
    <SafeAreaView style={styles.welcomeMainContainer}>
      {renderScreenContentList()}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  welcomeMainContainer: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: COLORS.black,
  },
  welcomeTopNavigationContainer: {
    width: "100%",
    flexDirection: "column",
    marginBottom: 10,
  },
});

export default WelcomeScreen;

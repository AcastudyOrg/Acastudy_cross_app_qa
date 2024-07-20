import React from "react";
import { View, StyleSheet } from "react-native";

import homeDataSubject from "../../../assets/data/homeDataSubject.json";
import { HomeDataListComponent, PrivateScreenLayout } from "../../components";

const HomeScreen = () => {
  const subjectData = Array.isArray(homeDataSubject)
    ? homeDataSubject
    : [homeDataSubject];

  return (
    <PrivateScreenLayout>
      <View style={styles.homeMainContainer}>
        <HomeDataListComponent
          dataTitle="Subjects"
          data={subjectData}
          viewAllLink={() => console.log("open new screen with all content")}
        />
      </View>
    </PrivateScreenLayout>
  );
};

const styles = StyleSheet.create({
  homeMainContainer: {
    flex: 1,
    paddingVertical: 15,
  },
});

export default HomeScreen;

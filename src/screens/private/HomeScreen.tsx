import React from "react";
import { ScrollView, StyleSheet } from "react-native";

import homeDataSubject from "../../../assets/data/home/homeDataSubject.json";
import {
  PrivateScreenLayout,
  SubjectComponent,
  TutorComponent,
  UpcomingEventsComponent,
} from "../../components";

const HomeScreen = () => {
  const subjectData = Array.isArray(homeDataSubject)
    ? homeDataSubject
    : [homeDataSubject];

  return (
    <PrivateScreenLayout>
      <ScrollView showsVerticalScrollIndicator={false}>
        <UpcomingEventsComponent />
        <SubjectComponent />
        <TutorComponent />
      </ScrollView>
    </PrivateScreenLayout>
  );
};

const styles = StyleSheet.create({
  homeMainContainer: {
    flex: 1,
    paddingVertical: 15,
  },
  container: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
});

export default HomeScreen;

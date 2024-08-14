import React from "react";
import { ScrollView, StyleSheet, View, Text, Platform } from "react-native";

import upcomingEventsData from '../../../assets/data/home/upcomingEventsData.json';
import subjectData from '../../../assets/data/home/subjectData.json';
import tutorData from '../../../assets/data/home/tutorData.json';
import { COLORS, FONT, SIZE } from '../../constants'
import {
  PrivateScreenLayout,
  SubjectComponent,
  TutorComponent,
  UpcomingEventsComponent,
} from "../../components";

const HomeScreen = () => {

  const handleViewMore = () => {
    console.log('view more events')
  }

  const eventsSection = () => {
    return (
      <View style={styles.upcomingMainContainer}>
        <View style={styles.upcomingTextContainer}>
          <Text style={styles.upcomingTitleText}>Upcoming events</Text>
          <Text onPress={handleViewMore} style={styles.upcomingActionText}>View more</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.eventsMainDataContainer}
        >
          {upcomingEventsData.map((item, i) => (
            <View key={i} style={styles.eventsContainer}>
              <UpcomingEventsComponent item={item} />
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }

  const subjectsSection = () => {
    return (
      <View style={styles.subjectMainContainer}>
        <View style={styles.subjectTextContainer}>
          <Text style={styles.subjectTitleText}>Subjects</Text>
          <Text onPress={handleViewMore} style={styles.subjectActionText}>View more</Text>
        </View>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.subjectMainDataContainer}
        >
          {subjectData.map((item, i) => (
            <View
              key={i}
            >
              <SubjectComponent item={item} />
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }

  const tutorsSection = () => {
    return (
      <View style={styles.tutorMainContainer}>
        <View style={styles.tutorTextContainer}>
          <Text style={styles.tutorTitleText}>Tutors</Text>
          <Text onPress={handleViewMore} style={styles.tutorActionText}>View more</Text>
        </View>

        {/* tutor data */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.tutorMainDataContainer}
        >
          {tutorData.map((item, i) => (
            <View key={i}>
              <TutorComponent item={item} />
            </View>
          ))}
        </ScrollView>
      </View>
    )
  }

  return (
    <PrivateScreenLayout>
      {eventsSection()}
      {subjectsSection()}
      {tutorsSection()}
    </PrivateScreenLayout>
  );
};

const styles = StyleSheet.create({
  //event section
  upcomingMainContainer: {
    flexDirection: 'column',
    paddingHorizontal: Platform.OS === 'ios' || Platform.OS === 'android' ? 15 : 27,
    paddingVertical: 15,
  },
  upcomingTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  upcomingTitleText: {
    color: COLORS.white,
    fontSize: SIZE.l,
    fontFamily: FONT.plusJakartaMedium
  },
  upcomingActionText: {
    color: COLORS.white,
    fontSize: SIZE.sm,
    fontFamily: FONT.plusJakartaRegular,
    right: 15,
  },
  eventsMainDataContainer: {
    flexDirection: 'row',
    marginTop: 5,
    marginRight: 10,
  },
  eventsContainer: {
    flexDirection: 'row',
  },

  //subjects section
  subjectMainContainer: {
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: Platform.OS === 'ios' || Platform.OS === 'android' ? 15 : 27,
    paddingVertical: 15,
  },
  subjectTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  subjectTitleText: {
    color: COLORS.white,
    fontSize: SIZE.l,
    fontFamily: FONT.plusJakartaMedium
  },
  subjectActionText: {
    color: COLORS.white,
    fontSize: SIZE.sm,
    fontFamily: FONT.plusJakartaRegular,
    right: 15,
  },
  subjectMainDataContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 10,
  },

  //Tutors section
  tutorMainContainer: {
    width: '100%',
    flexDirection: 'column',
    paddingHorizontal: Platform.OS === 'ios' || Platform.OS === 'android' ? 15 : 27,
    paddingVertical: 15,
  },
  tutorTextContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 2,
  },
  tutorTitleText: {
    color: COLORS.white,
    fontSize: SIZE.l,
    fontFamily: FONT.plusJakartaMedium
  },
  tutorActionText: {
    color: COLORS.white,
    fontSize: SIZE.sm,
    fontFamily: FONT.plusJakartaRegular,
    right: 15,
  },
  tutorMainDataContainer: {
    width: '100%',
    flexDirection: 'row',
    marginTop: 10,
    marginRight: 10,
  },
});

export default HomeScreen;

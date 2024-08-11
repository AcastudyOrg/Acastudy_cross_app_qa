import React from "react";
import { View, StyleSheet, ScrollView, ImageSourcePropType } from "react-native";
import homeDataSubject from "../../../assets/data/homeDataSubject.json";
import SubjectBlock from "../../components/common/SubjectBlock";
import TutorBlock from '../../components/common/TutorBlock';
import { PrivateScreenLayout } from "../../components";
import { IMAGES } from "../../constants"

interface Subject {
  name: string;
  image: ImageSourcePropType;
};

interface Tutor {
  name: string;
  image: ImageSourcePropType;
  subject: string;
  rating: number;
};

const subjects: Subject[] = [
  { name: 'Mathematics', image: IMAGES.mathImg },
  { name: 'Physics', image: IMAGES.physicsImg },
  { name: 'Literature', image: IMAGES.literatureImg },
  { name: 'Biology', image: IMAGES.biologyImg },
];

const tutors: Tutor[] = [
  { name: 'John Doe', image: IMAGES.johnImg, subject: 'Mathematic', rating: 4.5 },
  { name: 'Jane Smith', image: IMAGES.janeImg, subject: 'Physics', rating: 4.7 },
  { name: 'Agmed Modular', image: IMAGES.agmedImg, subject: 'Accounting', rating: 3.0 },
  { name: 'Drubo Ayob', image: IMAGES.druboImg, subject: 'Biology', rating: 3.8 },
];

const HomeScreen = () => {
  const subjectData = Array.isArray(homeDataSubject)
    ? homeDataSubject
    : [homeDataSubject];

  return (
    <PrivateScreenLayout>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.grid}>
          {subjects.map((subject, index) => (
            <SubjectBlock
              key={index}
              imageSrc={subject.image}
              subjectName={subject.name}
            />
          ))}
        </View>
      </ScrollView>
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.grid}>
          {tutors.map((tutor, index) => (
            <TutorBlock
              key={index}
              imageSrc={tutor.image}
              tutorName={tutor.name}
              subject={tutor.subject}
              rating={tutor.rating}
            />
          ))}
        </View>
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
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    //justifyContent: 'space-around',
  },
});

export default HomeScreen;

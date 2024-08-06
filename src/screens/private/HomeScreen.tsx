import React from "react";
import { View, StyleSheet, ScrollView } from "react-native";
import homeDataSubject from "../../../assets/data/homeDataSubject.json";
import  SubjectBlock  from "../../components/common/SubjectBlock";
import TutorBlock from '../../components/common/TutorBlock';
import {PrivateScreenLayout} from "../../components";

interface Subject {
  name: string;
  image: string;
}

interface Tutor {
  name: string;
  image: string;
  subject: string;
  rating: number;
}

const subjects: Subject[] = [
  { name: 'Mathematics', image: '../../../assets/images/appImages/maths.svg' },
  { name: 'Physics', image: '../../../assets/images/appImages/physics.svg' },
  { name: 'Literature', image: '../../../assets/images/appImages/lifeskills.svg' },
  { name: 'Biology', image: '../../../assets/images/appImages/biology.svg' },
];

const tutors: Tutor[] = [
  { name: 'John Doe', image: '../../../assets/images/general/dummy/user.svg', subject: 'Mathematic', rating: 4.5 },
  { name: 'Jane Smith', image: '../../../assets/images/general/dummy/user2.svg', subject: 'Physics', rating: 4.7 },
  { name: 'Agmed Modular', image: '../../../assets/images/general/dummy/user3.svg', subject: 'Accounting', rating: 3.0 },
  { name: 'Drubo Ayob', image: '../../../assets/images/general/dummy/user4.svg', subject: 'Biology', rating: 3.8 },
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

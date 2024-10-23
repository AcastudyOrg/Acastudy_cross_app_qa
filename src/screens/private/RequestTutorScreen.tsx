import React, { useState } from 'react';
import { Modal, View, Text, Button, StyleSheet, ScrollView,  } from 'react-native';
import filterLevelOfStudy from '../../../assets/data/subjects/filterLeveOfStudy.json';
import filterTutorData from '../../../assets/data/subjects/filterTutorData.json';
import { DropDownComponent } from '../../components/common/Form/DropDownComponent';
import { tutorProfileStyles } from '../../styles/componentsStyle/commonStyle/tutorProfileStyle';
import CustomCalendar from '../../components/common/CustomCalendar';
import { tutorData } from '../../../mockData/TutorData';
import CustomTextAreaInput from '../../components/common/Form/CustomTextAreaInput';
import GradientButtonComponent from '../../components/common/Form/GradientButtonComponent';
import PrivateScreenLayout from '../../components/layout/PrivateScreenLayout';


const RequestTutorScreen = () => {

    const [levelOfStudy, setLevelOfStudy] = useState("");
    const [tutor, setTutor] = useState("");

  return (
    
<PrivateScreenLayout showBackButton={true} showSearchBar={false}>
        <View style={styles.Container}>
        <ScrollView>
            <View style={styles.dropDownContainer}>
                <View style={styles.Dropdown}>
                    <DropDownComponent data={filterLevelOfStudy} label="Study level" placeholder="Level of study" value={levelOfStudy} onChangeText={setLevelOfStudy} />
                    <DropDownComponent data={filterTutorData} label= "Topic" placeholder="Tutor" value={tutor} onChangeText={setTutor} />
                    <DropDownComponent data={filterLevelOfStudy} label="Book" placeholder="Level of study" value={levelOfStudy} onChangeText={setLevelOfStudy} />
                </View>
                <View style={styles.Dropdown}>
                    <DropDownComponent data={filterTutorData} label="Course" placeholder="Tutor" value={tutor} onChangeText={setTutor} />
                    <DropDownComponent data={filterTutorData} label="Tutor" placeholder="Tutor" value={tutor} onChangeText={setTutor} />
                    <DropDownComponent data={filterLevelOfStudy} label="Chapter"  placeholder="Level of study" value={levelOfStudy} onChangeText={setLevelOfStudy} />
                </View>
            </View>
            <View style={styles.input}>
              <CustomTextAreaInput label="Description" placeholder='Describe that of which you are requesting a tutor for' value={''} onChange={function (text: string): void {
            throw new Error('Function not implemented.'); 
            } }/>
          </View>

          <View style={styles.input}>
              <Text style={tutorProfileStyles.availability}>Select Date</Text>
              <View style={tutorProfileStyles.availabilityCalendar}>
                  <CustomCalendar selectedDates={tutorData.bookedDays} />
              </View>
          </View>
          <View style={styles.input}>
            <DropDownComponent data={filterTutorData} label="Time" placeholder="Tutor" value={tutor} onChangeText={setTutor} />
          </View>

            <View>
                <GradientButtonComponent text="Request Tutor" onPress={() => console.log("Pressed")} />
            </View>
            </ScrollView>
        </View>
    </PrivateScreenLayout>
  );
};

const styles = StyleSheet.create({

  Container: {
    flex: 1,
    padding: 10,
    alignSelf: 'center',
    justifyContent: 'center',

  },

  dropDownContainer: {
    flexDirection: 'row',
    justifyContent: 'center', 
  },
  input: {
    width: 'auto',
    margin: 30,
  },
  Dropdown: {
    margin: 20,
    width: "45%",
  },
  button: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },

});

export default RequestTutorScreen;

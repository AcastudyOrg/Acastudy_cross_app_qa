import React from "react";
import { View } from "react-native";
import { detailsFormComponentStyles } from "../../../styles/componentsStyle/sectionsStyle/userProfile/detailsFormComponentStyle";
import DetailsInputContainerComponent from "./DetailsInputContainerComponent";


const DeatilsFormComponent = () => {
    const [education, setEducation] = React.useState<string>("Master’s Degree");
    const [school, setSchool] = React.useState<string>("Stellenbosch University");
    const [gender, setGender] = React.useState<string>("Male");
    const [curriculum, setCurriculum] = React.useState<string>("National Senior Sertificate (NSC)");

    return (
        <View>
            <View style={detailsFormComponentStyles.detailsDivider} />
            <View style={detailsFormComponentStyles.detailsFormRow}>
                <View style={detailsFormComponentStyles.inputContainer}>
                    <DetailsInputContainerComponent value={education} label="Education level" placeholder="Education level" onChange={setEducation} />
                </View>
                <View style={detailsFormComponentStyles.inputContainer}>
                    <DetailsInputContainerComponent value={school} label="School" placeholder="School" onChange={setSchool} />
                </View>
            </View>
            <View style={detailsFormComponentStyles.detailsDivider} />

            <View style={detailsFormComponentStyles.detailsFormRow}>
                <View style={detailsFormComponentStyles.inputContainer}>
                    <DetailsInputContainerComponent value={gender} label="Gender" placeholder="Gender" onChange={setGender} />
                </View>
                <View style={detailsFormComponentStyles.inputContainer}>
                    <DetailsInputContainerComponent value={curriculum} label="Curriculum" placeholder="Curriculum" onChange={setCurriculum} />
                </View>
            </View>
            <View style={detailsFormComponentStyles.detailsDivider} />
        </View>
    );
};


export default DeatilsFormComponent;

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
                <DetailsInputContainerComponent value={education} label="Education level" placeholder="Education level" onChange={setEducation} />
                <DetailsInputContainerComponent value={school} label="School" placeholder="School" onChange={setSchool} />
            </View>
            <View style={detailsFormComponentStyles.detailsDivider} />

            <View style={detailsFormComponentStyles.detailsFormRow}>
                <DetailsInputContainerComponent value={gender} label="Gender" placeholder="Gender" onChange={setGender} />
                <DetailsInputContainerComponent value={curriculum} label="Curriculum" placeholder="Curriculum" onChange={setCurriculum} />
            </View>
            <View style={detailsFormComponentStyles.detailsDivider} />
        </View>
    );
};


export default DeatilsFormComponent;

import React from "react";
import { Text, View } from "react-native";
import { STRING } from "../../../constants/strings";
import DeatilsFormComponent from "./DetailsFormComponent";
import { personalInformationComponentStyles } from "../../../styles/componentsStyle/sectionsStyle/userProfile/personalInformationComponentStyle";
import CustomNoStrokeTextInput from "../../common/Form/CustomNoStrokeTextInput";


const PersonalInformationComponent = () => {
    const [objective, setObjective] = React.useState<string>(STRING.studentBio);
    return (
        <View>
            <View style={personalInformationComponentStyles.personalInfoTitleContainer}>
                <Text style={personalInformationComponentStyles.personalInfoTitle}>{STRING.personalInformation}</Text>
            </View>
            <DeatilsFormComponent />

            <View style={personalInformationComponentStyles.objectivesContainer}>
                <CustomNoStrokeTextInput
                    value={objective}
                    label={"Learning objectives"}
                    placeholder={STRING.studentBio}
                    multiline={true}
                    onChange={setObjective} />
            </View>
        </View>
    );
}

export default PersonalInformationComponent;
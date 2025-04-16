import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { detailsFormComponentStyles } from "@/styles/componentsStyle/sectionsStyle/userProfile/detailsFormComponentStyle";
import DetailsInputContainerComponent from "./DetailsInputContainerComponent";
import CustomNoStrokeTextInput from "@/components/common/Form/CustomNoStrokeTextInput";
import { updateUserMutation } from "@/graphql/api/auth";
import { useMutation } from '@apollo/client';
import { STRING } from "@/constants/strings";
import CustomIcon from "@/components/common/CustomIcon";
import { COLORS } from "@/constants";

const DeatilsFormComponent = () => {
    const [levelOfStudy, setEducation] = React.useState<string>("");
    const [school, setSchool] = React.useState<string>("");
    const [gender, setGender] = React.useState<string>("");
    const [curriculum, setCurriculum] = React.useState<string>("");
    const [biography, setObjective] = React.useState<string>("");
    const [isEdited, setIsEdited] = React.useState<boolean>(false);
    const [iconColor, setIconColor] = React.useState<string>(COLORS.grayWhiteText40persent);

    const [updateUser, { loading }] = useMutation(updateUserMutation);

    React.useEffect(() => {
        if (isEditedField(levelOfStudy) || isEditedField(school) || isEditedField(gender) || isEditedField(curriculum) || isEditedField(biography)) {
            setIconColor(COLORS.purple);
            setIsEdited(true);
        } else {
            setIconColor(COLORS.grayWhiteText40persent);
            setIsEdited(false);
        }
    }, [levelOfStudy, school, gender, curriculum, biography]);

    const isEditedField = (textfield: string): Boolean => textfield.length > 0;

    const onPersonalInfoSave = async () => {
        const formFields = { levelOfStudy, school, gender, curriculum, biography }
        const updatedFields = Object.fromEntries(Object.entries(formFields).filter(([_, value]) => value.length > 0));
        const payload = {
            id: "67be4da84c0d37709fe1ce43",
            updateUserInput: updatedFields
        }
        
        await updateUser({ variables: payload }).then((res) => {
            if (res.data.updateUser.status === 200) {
                setIconColor(COLORS.grayWhiteText40persent);
                setIsEdited(false);
            }
            else throw res.data.updateUser;
        }).catch((err) => {
            console.log(err.message);
        })
    }

    return (
        <View>
            <View style={detailsFormComponentStyles.personalInfoTitleContainer}>
                <Text style={detailsFormComponentStyles.personalInfoTitle}>{STRING.personalInformation}</Text>
                <TouchableOpacity disabled={!isEdited} style={detailsFormComponentStyles.personalInfoSaveButton} onPress={onPersonalInfoSave} >
                    <CustomIcon set={"Feather"} name={"save"} size={25} color={iconColor} />
                </TouchableOpacity>
            </View>

            <View>
                <View style={detailsFormComponentStyles.detailsDivider} />
                <View style={detailsFormComponentStyles.detailsFormRow}>
                    <View style={detailsFormComponentStyles.inputContainer}>
                        <DetailsInputContainerComponent value={levelOfStudy} label="Education level" placeholder="Education level" onChange={setEducation} />
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

            <View style={detailsFormComponentStyles.objectivesContainer}>
                <CustomNoStrokeTextInput
                    value={biography}
                    label={"Learning objectives"}
                    placeholder={STRING.studentBio}
                    multiline={true}
                    onChange={setObjective} />
            </View>
        </View>
    );
};

export default DeatilsFormComponent;

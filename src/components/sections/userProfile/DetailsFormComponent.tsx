import React from "react";
import { ActivityIndicator, Text, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { detailsFormComponentStyles } from "@/styles/componentsStyle/sectionsStyle/userProfile/detailsFormComponentStyle";
import DetailsInputContainerComponent from "./DetailsInputContainerComponent";
import CustomNoStrokeTextInput from "@/components/common/Form/CustomNoStrokeTextInput";
import { useUpdateUser } from "@/graphql/hooks/user";
import { STRING } from "@/constants/strings";
import CustomIcon from "@/components/common/CustomIcon";
import { COLORS } from "@/constants";
import { UserType } from "@/types/User/User";
interface DeatilsFormProps {
    interests: string[];
    user: UserType;
    refetch: () => void;
}

const DeatilsFormComponent: React.FC<DeatilsFormProps> = ({ interests, user, refetch }) => {
    const { updateUser, updating } = useUpdateUser();

    const [levelOfStudy, setEducation] = React.useState<string>(user?.levelOfStudy || "");
    const [school, setSchool] = React.useState<string>(user?.school || "");
    const [gender, setGender] = React.useState<string>(user?.gender || "");
    const [curriculum, setCurriculum] = React.useState<string>(user?.curriculum || "");
    const [biography, setBiography] = React.useState<string>(user?.biography || "");
    const [isEdited, setIsEdited] = React.useState<boolean>(false);
    const [iconColor, setIconColor] = React.useState<string>(COLORS.grayWhiteText40persent);

    React.useEffect(() => {
        const interestsChanged = JSON.stringify(interests) !== JSON.stringify(user?.interests);
        const fieldsChanged =
            isEditedField(levelOfStudy, user?.levelOfStudy) ||
            isEditedField(school, user?.school) ||
            isEditedField(gender, user?.gender) ||
            isEditedField(curriculum, user?.curriculum) ||
            isEditedField(biography, user?.biography);

        if (interestsChanged || fieldsChanged) {
            setIconColor(COLORS.purple);
            setIsEdited(true);
        } else {
            setIconColor(COLORS.grayWhiteText40persent);
            setIsEdited(false);
        }
    }, [interests, levelOfStudy, school, gender, curriculum, biography, user]);


    const onPersonalInfoSave = async () => {
        const formFields = { levelOfStudy, school, gender, curriculum, biography, interests }
        const updatedFields = Object.fromEntries(Object.entries(formFields).filter(([_, value]) => value.length > 0));
        const payload = {
            id: user?.id,
            updateUserInput: updatedFields
        }

        await updateUser({ variables: payload }).then((res) => {
            if (res.data.updateUser.status === 200) {
                setIconColor(COLORS.grayWhiteText40persent);
                setIsEdited(false);
                refetch();
            }
            else throw res.data.updateUser;
        }).catch((err) => {
            console.log(err.message);
        })
    }

    const isEditedField = (textfield: string, compare_str?: string): Boolean => textfield !== compare_str;

    return (
        <View>
            <View style={detailsFormComponentStyles.personalInfoTitleContainer}>
                <Text style={detailsFormComponentStyles.personalInfoTitle}>{STRING.personalInformation}</Text>
                <TouchableOpacity disabled={!isEdited} style={detailsFormComponentStyles.personalInfoSaveButton} onPress={onPersonalInfoSave} >
                    {updating ? <ActivityIndicator color={COLORS.white} size={"small"} /> :
                        <CustomIcon set={"Feather"} name={"save"} size={25} color={iconColor} />}
                </TouchableOpacity>
            </View>

            <View>
                <View style={detailsFormComponentStyles.detailsDivider} />
                <View style={detailsFormComponentStyles.detailsFormRow}>
                    <View style={detailsFormComponentStyles.inputContainer}>
                        <DetailsInputContainerComponent value={levelOfStudy} label="Education level" placeholder={user?.levelOfStudy || "Education level"} onChange={setEducation} />
                    </View>
                    <View style={detailsFormComponentStyles.inputContainer}>
                        <DetailsInputContainerComponent value={school} label="Institution" placeholder={user?.school || "Institution"} onChange={setSchool} />
                    </View>
                </View>
                <View style={detailsFormComponentStyles.detailsDivider} />
                <View style={detailsFormComponentStyles.detailsFormRow}>
                    <View style={detailsFormComponentStyles.inputContainer}>
                        <DetailsInputContainerComponent value={gender} label="Gender" placeholder={user?.gender || "Gender"} onChange={setGender} />
                    </View>
                    <View style={detailsFormComponentStyles.inputContainer}>
                        <DetailsInputContainerComponent value={curriculum} label="Curriculum" placeholder={user?.curriculum || "Curriculum"} onChange={setCurriculum} />
                    </View>
                </View>
                <View style={detailsFormComponentStyles.detailsDivider} />
            </View>

            <View style={detailsFormComponentStyles.objectivesContainer}>
                <CustomNoStrokeTextInput
                    value={biography}
                    label={"Learning objectives"}
                    placeholder={user?.biography || STRING.studentBio}
                    multiline={true}
                    onChange={setBiography} />
            </View>
        </View>
    );
};

export default DeatilsFormComponent;

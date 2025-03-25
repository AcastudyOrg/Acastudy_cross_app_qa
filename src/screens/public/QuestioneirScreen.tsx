import React, { useState } from "react";
import {
    Text,
    View,
} from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { GradientButtonComponent } from "@/components/";
import TopBarComponent from "@/components/common/TopBar/TopBarComponent";
import { authScreenStyle } from "@/styles/screensStyle/publicStyle/authScreenStyle";
import AuthTextField from "@/components/common/Form/AuthTextField";
import { NAV_SCREEN_NAME, STRING } from "@/constants/strings";
import { DropDownComponent } from "@/components/common/Form/DropDownComponent";
import { handleInputChange, validateForm } from "@/../utils/requestTutorFormHelper";
import { FormData } from "@/../utils/requestTutorFormHelper";
import { COLORS } from "@/constants";

type QuestioneirParams = {
    data: {
        email: string;
        password: string;
    };
};

const QuestioneirScreen: React.FC = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<RouteProp<QuestioneirParams, 'data'>>();
    const { email, password } = route.params;

    const options = {
        studyLevels: ['Pre School', 'Primary', 'Secondary', 'Undergraduate', 'Honours', 'Masters', 'PhD'],
        ageGroup: ['Under - 12', '13 - 18', '19 - 25', '26 - 35', '36 - 45', '46 - 55', '56 - 65', '66 - Upper'],
        gender: ['Female', 'Male', 'Other']
    };

    // set values from fields
    const [firstName, setName] = useState<string>("");
    const [lastName, setSurname] = useState<string>("");
    const [formData, setFormData] = useState<FormData>({
        ageGroup: '',
        gender: '',
    });


    // set errors from field if any
    const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>({});
    const [errorName, setErrorName] = useState<string>("");
    const [errorSurname, setErrorSurname] = useState<string>("");

    const handleOnNext = () => {
        setErrorName("");
        setErrorSurname("");
        setErrors({});

        if (!firstName) {
            setErrorName("This field is required");
        }
        if (!lastName) {
            setErrorSurname("This field is required");
        }

        if (validateForm(formData, setErrors)) {
            console.log('Form submitted:', { ...formData, firstName, lastName });
        }

        //TODO(Tekstaq) pass parameters
        navigation.navigate(
            NAV_SCREEN_NAME.QuestioneirScreenTwo,
            {
                email,
                firstName: firstName,
                lastName: lastName,
                ageGroup: formData.ageGroup,
                gender: formData.gender,
                password,
            }
        )
    };


    return (
        <View style={authScreenStyle.signInContentContainer}>
            <TopBarComponent showAppName={true} renderRightSection={true} showSearchBar={false} isLSignedIn={false} showBecomeATutorOnly={true} />

            <View style={authScreenStyle.content}>
                <View style={authScreenStyle.container}>
                    <Text style={authScreenStyle.title}>{STRING.questinnierTitle}</Text>
                    <Text style={authScreenStyle.subtitle}>{STRING.questinnierSubtitle}</Text>

                    <AuthTextField label={"Firstname *"} value={firstName} onChangeText={setName} error={errorName} />
                    <AuthTextField label={"Lastname *"} value={lastName} onChangeText={setSurname} error={errorSurname} />
                    <DropDownComponent
                        label='Gender'
                        data={options.gender}
                        value={formData.gender || ''}
                        onChange={(value) => handleInputChange('gender', value, setFormData, errors, setErrors)} // handle this with correct value
                        required
                        error={errors.gender}
                        backgroundColor={COLORS.transparent}
                        labelColor={COLORS.black30}
                        borderColor={COLORS.gray60}
                    />
                    <DropDownComponent
                        label='Age group'
                        data={options.ageGroup}
                        value={formData.ageGroup || ''}
                        onChange={(value) => handleInputChange('ageGroup', value, setFormData, errors, setErrors)} // handle this with correct value
                        error={errors.ageGroup}
                        backgroundColor={COLORS.transparent}
                        labelColor={COLORS.black30}
                        borderColor={COLORS.gray60}
                    />
                    <GradientButtonComponent text="NEXT" onPress={handleOnNext} />
                </View>
            </View>
        </View>
    );
};

export default QuestioneirScreen;
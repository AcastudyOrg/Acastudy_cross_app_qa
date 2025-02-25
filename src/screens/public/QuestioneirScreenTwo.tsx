import React, { useState } from "react";
import { Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";

import { GradientButtonComponent } from "../../components";
import TopBarComponent from "../../components/common/TopBar/TopBarComponent";
import { authScreenStyle } from "../../styles/screensStyle/publicStyle/authScreenStyle";
import AuthTextField from "../../components/common/Form/AuthTextField";
import { NAV_SCREEN_NAME, STRING } from "../../constants/strings";
import { DropDownComponent } from "../../components/common/Form/DropDownComponent";
import { handleInputChange, validateForm } from "../../../utils/requestTutorFormHelper";

import { FormData } from "../../../utils/requestTutorFormHelper";
import { COLORS } from "../../constants";

type QuestioneirScreenTwoParams = {
    QuestioneirScreenTwo: {
        name: string;
        surname: string;
        ageGroup: string;
        gender: string;
    };
};

const QuestioneirScreenTwo: React.FC = () => {

    const navigation = useNavigation<any>();
    const route = useRoute<RouteProp<QuestioneirScreenTwoParams, 'QuestioneirScreenTwo'>>();
    const { name, surname, ageGroup, gender } = route.params;


    const options = {
        provinces: ['Gauteng', 'Western Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State', 'Mpumalanga', 'Limpopo', 'North West', 'Northern Cape'],
    };

    // set values from fields
    const [suburb, setSuburb] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [formData, setFormData] = useState<FormData>({
        province: '',
    });


    // set errors from field if any
    const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>({});
    const [errorSuburb, setErrorSuburb] = useState<string>("");
    const [errorCity, setErrorCity] = useState<string>("");

    const handleSubmit = () => {
        setErrorSuburb("");
        setErrorCity("");
        setErrors({});

        if (!suburb) {
            setErrorSuburb("This field is required");
        }
        if (!city) {
            setErrorCity("This field is required");
        }

        if (!validateForm(formData, setErrors)) {
            // Todo(Tekstaq): submit the form here
            console.log('Form submitted:', { suburb, city, province: formData.province, name, surname, gender, ageGroup });
        }

        navigation.navigate(NAV_SCREEN_NAME.StudentProfileScreen)
    };


    return (
        <View style={authScreenStyle.signInContentContainer}>
            <TopBarComponent showAppName={true} renderRightSection={true} showSearchBar={false} isLSignedIn={false} showBecomeATutorOnly={true} />

            <View style={authScreenStyle.content}>
                <View style={authScreenStyle.container}>
                    <Text style={authScreenStyle.title}>{STRING.questinnierTwoTitle}</Text>
                    <Text style={authScreenStyle.subtitle}>{STRING.questinnierTwoSubtitle}</Text>

                    <AuthTextField label={"Suburb"} value={suburb} onChangeText={setSuburb} error={errorSuburb} />
                    <AuthTextField label={"City"} value={city} onChangeText={setCity} error={errorCity} />

                    <DropDownComponent
                        label='Province'
                        data={options.provinces}
                        value={formData.province || ''}
                        onChange={(value) => handleInputChange('province', value, setFormData, errors, setErrors)}
                        required
                        error={errors.province}
                        backgroundColor={COLORS.transparent}
                        labelColor={COLORS.black30}
                        borderColor={COLORS.gray60}
                    />

                    <GradientButtonComponent text="DONE" onPress={handleSubmit} />

                </View>
            </View>
        </View>
    );
};

export default QuestioneirScreenTwo;
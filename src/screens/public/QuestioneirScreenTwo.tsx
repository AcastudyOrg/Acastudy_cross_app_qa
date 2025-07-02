import React, { useState } from "react";
import { Text, View } from "react-native";
import { RouteProp, useNavigation, useRoute } from "@react-navigation/native";
import { useMutation } from "@apollo/client";

import { COLORS } from "@/constants";
import { GradientButtonComponent } from "@/components";
import TopBarComponent from "@/components/common/TopBar/TopBarComponent";
import { authScreenStyle } from "@/styles/screensStyle/publicStyle/authScreenStyle";
import AuthTextField from "@/components/common/Form/AuthTextField";
import { NAV_SCREEN_NAME, STRING } from "@/constants/strings";
import { DropDownComponent } from "@/components/common/Form/DropDownComponent";
import { handleInputChange, validateForm } from "@/../utils/requestTutorFormHelper";
import { FormData } from "@/../utils/requestTutorFormHelper";
import { registerMutation } from "@/graphql/api/auth";

type QuestioneirScreenTwoParams = {
    QuestioneirScreenTwo: {
        email: string;
        firstName: string;
        lastName: string;
        ageGroup: string;
        gender: string;
        password: string;
        role: string;
    };
};

const QuestioneirScreenTwo: React.FC = () => {
    const navigation = useNavigation<any>();
    const route = useRoute<RouteProp<QuestioneirScreenTwoParams, 'QuestioneirScreenTwo'>>();
    const { email, firstName, lastName, ageGroup, gender, password, role } = route.params;

    const options = {
        provinces: ['Gauteng', 'Western Cape', 'Eastern Cape', 'KwaZulu-Natal', 'Free State', 'Mpumalanga', 'Limpopo', 'North West', 'Northern Cape'],
    };

    const [suburb, setSuburb] = useState<string>("")
    const [city, setCity] = useState<string>("")
    const [formData, setFormData] = useState<FormData>({
        province: '',
    });

    const [error, setError] = useState("");
    const [errors, setErrors] = useState<{ [key in keyof FormData]?: string }>({});
    const [errorSuburb, setErrorSuburb] = useState<string>("");
    const [errorCity, setErrorCity] = useState<string>("");

    const [registerUser, { loading }] = useMutation(registerMutation);

    const handleSubmit = async () => {
        setErrorSuburb("");
        setErrorCity("");
        setErrors({});
        setError("");

        if (!suburb) setErrorSuburb("This field is required");
        if (!city) setErrorCity("This field is required");

        if (!validateForm(formData, setErrors)) {
            await registerUser({
                variables: {
                    email, firstName, lastName, gender, ageGroup, role,
                    suburb, city, province: formData.province, password
                }
            }).then((res) => {
                if (res.data.registerUser.status === 200) navigation.navigate(NAV_SCREEN_NAME.SignInScreen);
                else throw res.data.registerUser;
            }).catch((err) => {
                setError(err.message);
            });
        }
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
                    {error && <Text style={authScreenStyle.errorText}>{error}</Text>}
                    <GradientButtonComponent text="Register" loading={loading} onPress={handleSubmit} />
                </View>
            </View>
        </View>
    );
};

export default QuestioneirScreenTwo;
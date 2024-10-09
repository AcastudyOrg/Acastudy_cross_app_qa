import React from "react";
import { View } from "react-native";
import { detailsFormComponentStyles } from "../../../styles/componentsStyle/sectionsStyle/userProfile/detailsFormComponentStyle";
import CustomNoStrokeTextInput from "../../common/Form/CustomNoStrokeTextInput";

interface InputContainerProps {
    value: string;
    label: string;
    placeholder: string;
    onChange: (text: string) => void;
}


const DetailsInputContainerComponent: React.FC<InputContainerProps> = ({
    value, label, placeholder, onChange
}) => {
    return (
        <View style={detailsFormComponentStyles.detailsInputContainer}>
            <CustomNoStrokeTextInput
                value={value}
                label={label}
                placeholder={placeholder}
                onChange={onChange} />
        </View>
    );
};

export default DetailsInputContainerComponent;

import React from "react";
import { TextInput } from "react-native";
import { SearchInputComponentStyles } from "../../../styles/componentsStyle/commonStyle/formStyle/SearchInputComponentStyle";
import { COLORS } from "../../../constants";

interface InputProps {
    placeholder: string;
    value: string;
    onChangeText: (text: string) => void;
}

export const SearchInputComponent: React.FC<InputProps> = ({ value, placeholder, onChangeText }) => {
    return (
        <TextInput
          value={value}
          onChangeText={onChangeText}
          autoCapitalize="none"
          placeholder={placeholder}
          placeholderTextColor={COLORS.darkGray}
          style={SearchInputComponentStyles.input}
        />
    );
}
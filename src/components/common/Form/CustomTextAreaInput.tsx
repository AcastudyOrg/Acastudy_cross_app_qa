import React from 'react';
import { TextInput, View } from 'react-native';
import { customTextInputStyles } from '../../../styles/componentsStyle/commonStyle/formStyle/customTextInputStyle';
import { COLORS } from '../../../constants';

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
}

const CustomTextAreaInput: React.FC<CustomTextInputProps> = ({ placeholder, value, onChange }) => {
  return (
    <View style={customTextInputStyles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={COLORS.darkGrayOpacity}
        multiline={true}
        style={customTextInputStyles.input}
      />
    </View>
  );
};

export default CustomTextAreaInput;

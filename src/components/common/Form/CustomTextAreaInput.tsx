import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { customTextInputStyles } from '../../../styles/componentsStyle/commonStyle/formStyle/customTextInputStyle';
import { COLORS } from '../../../constants';

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  label?: string;
  onChange: (text: string) => void;
  required?: boolean;
}

const CustomTextAreaInput: React.FC<CustomTextInputProps> = ({ placeholder, value, onChange, label, required=false }) => {
  return (
    <View style={customTextInputStyles.container}>
      {label && <Text style={customTextInputStyles.label}>{label} {required && ' *'}</Text>}
      <View>
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={COLORS.darkGrayOpacity}
          multiline={true}
          style={customTextInputStyles.input}
        />
      </View>
    </View>
  );
};

export default CustomTextAreaInput;

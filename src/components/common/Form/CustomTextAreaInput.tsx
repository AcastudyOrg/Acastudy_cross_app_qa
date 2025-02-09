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
  backgroundColor?: string;
  borderColor?: string;
  labelColor?: string;
}

const CustomTextAreaInput: React.FC<CustomTextInputProps> = ({ placeholder, value, onChange, label, required=false, backgroundColor=COLORS.white10Percent, borderColor=COLORS.white, labelColor=COLORS.white}) => {
  return (
    <View style={customTextInputStyles.container}>
      {label && <Text style={[customTextInputStyles.label, {color: labelColor}]}>{label} {required && ' *'}</Text>}
      <View>
        <TextInput
          value={value}
          onChangeText={onChange}
          placeholder={placeholder}
          placeholderTextColor={COLORS.darkGrayOpacity}
          multiline={true}
          style={[customTextInputStyles.input, { backgroundColor: backgroundColor, borderColor: borderColor }]}
        />
      </View>
    </View>
  );
};

export default CustomTextAreaInput;

import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { customNoStrokeTextInputStyles } from '../../../styles/componentsStyle/commonStyle/formStyle/customNoStrokeTextInputStyle';
import { COLORS, FONT, SIZE } from '../../../constants';

interface CustomNoStrokeTextInputProps {
  placeholder: string;
  value: string;
  label: string;
  multiline?: boolean;
  onChange: (text: string) => void;
}

const CustomNoStrokeTextInput: React.FC<CustomNoStrokeTextInputProps> = ({
  placeholder, value, label, multiline = false, onChange
}) => {
  return (
    <View style={customNoStrokeTextInputStyles.inputContainer}>
      <Text style={[
        customNoStrokeTextInputStyles.inputLabel,
        { paddingVertical: multiline ? 10 : 0 }
      ]}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        multiline={multiline}
        placeholderTextColor={COLORS.darkGrayOpacity}
        style={[
          customNoStrokeTextInputStyles.input,
          { minHeight: multiline ? 100 : 40 }
        ]}
      />
    </View>
  );
};

export default CustomNoStrokeTextInput;

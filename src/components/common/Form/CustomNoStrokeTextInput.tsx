import React from 'react';
import { TextInput, View, Text } from 'react-native';
import { customNoStrokeTextInputStyles } from '../../../styles/componentsStyle/commonStyle/formStyle/customNoStrokeTextInputStyle';
import { COLORS } from '../../../constants';

interface CustomNoStrokeTextInputProps {
  placeholder: string;
  value: string;
  label: string;
  onChange: (text: string) => void;
}

const CustomNoStrokeTextInput: React.FC<CustomNoStrokeTextInputProps> = ({ placeholder, value, label, onChange }) => {
  const [focused, setFocused] = React.useState(false);
  return (
    <View style={customNoStrokeTextInputStyles.inputContainer}>
      <Text style={customNoStrokeTextInputStyles.inputLabel}>{label}</Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        onFocus={() => setFocused(true)}
        placeholder={placeholder}
        placeholderTextColor={COLORS.darkGrayOpacity}
        style={[
          customNoStrokeTextInputStyles.input,
          focused ? customNoStrokeTextInputStyles.inputFocused:customNoStrokeTextInputStyles.inputUnfocused
        ]}
      />
    </View>
  );
};

export default CustomNoStrokeTextInput;

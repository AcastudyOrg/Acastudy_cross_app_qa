import React from 'react';
import { TextInput, View } from 'react-native';
import { customTextInput } from '../../../styles/componentsStyle/commonStyle/formStyle/customTextInput';
import { COLORS } from '../../../constants';

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ placeholder, value, onChange }) => {
  return (
    <View style={[customTextInput.inputContainer]}>
      <TextInput
        value={ value }
        onChangeText={ onChange } 
        placeholder={ placeholder }
        placeholderTextColor={ COLORS.darkGrayOpacity } 
        multiline={true} 
        style={ customTextInput.input } 
      />
    </View>
  );
};

export default CustomTextInput;

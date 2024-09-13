import React, { useState } from 'react';
import { TextInput, View } from 'react-native';
import { customTextInputStyles } from '../../../styles/componentsStyle/commonStyle/formStyle/customTextInputStyle';
import { COLORS } from '../../../constants';

interface CustomTextInputProps {
  placeholder: string;
  value: string;
  onChange: (text: string) => void;
}

const CustomTextInput: React.FC<CustomTextInputProps> = ({ placeholder, value, onChange }) => {
  const [inputHeight, setInputHeight] = useState<number>(40);
  return (
    <View style={[customTextInputStyles.inputContainer]}>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        placeholderTextColor={COLORS.darkGrayOpacity}
        multiline={true}
        onContentSizeChange={(event) => {
          setInputHeight(event.nativeEvent.contentSize.height);
        }}
        style={[customTextInputStyles.input, { minHeight: inputHeight }]}
      />
    </View>
  );
};

export default CustomTextInput;

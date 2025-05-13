import React, { useState } from "react";
import { TextInput, View, Text, StyleProp, TextStyle } from "react-native";
import { customNoStrokeTextInputStyles } from "../../../styles/componentsStyle/commonStyle/formStyle/customNoStrokeTextInputStyle";
import { COLORS } from "../../../constants";

interface CustomNoStrokeTextInputProps {
  placeholder: string;
  value: string;
  label: string;
  labelStyle?: StyleProp<TextStyle>;
  multiline?: boolean;
  onChange: (text: string) => void;
}

const CustomNoStrokeTextInput: React.FC<CustomNoStrokeTextInputProps> = ({
  placeholder,
  value,
  label,
  labelStyle,
  multiline = false,
  onChange,
}) => {

  const [height, setHeight] = useState(40);

  return (
    <View style={customNoStrokeTextInputStyles.inputContainer}>
      <Text
        style={[
          customNoStrokeTextInputStyles.inputLabel,
          { paddingVertical: multiline ? 10 : 0 },
          labelStyle
        ]}
      >
        {label}
      </Text>
      <TextInput
        value={value}
        onChangeText={onChange}
        placeholder={placeholder}
        multiline={multiline}
        placeholderTextColor={COLORS.lightGray}
        style={[customNoStrokeTextInputStyles.input, { height }]}
        onContentSizeChange={(e) =>
          setHeight(e.nativeEvent.contentSize.height)
        }
      />
    </View>
  );
};

export default CustomNoStrokeTextInput;

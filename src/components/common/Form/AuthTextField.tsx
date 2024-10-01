import React, { useState } from 'react';
import { TextInput, View, Text, TouchableOpacity, InputModeOptions } from 'react-native';
import { COLORS } from '../../../constants';
import CustomIcon from '../CustomIcon';
import { authTextFieldtyles } from '../../../styles/componentsStyle/commonStyle/formStyle/authTextFieldStyle';


interface Props {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  isPassword?: boolean;
  placeholder?: string;
}

const AuthTextField: React.FC<Props> = ({ label, value, onChangeText, isPassword = false, placeholder="" }) => {
  const [isSecure, setIsSecure] = useState(isPassword);

  const toggleSecureEntry = () => {
    setIsSecure(!isSecure);
  };

  return (
    <View style={authTextFieldtyles.container}>
      <Text style={authTextFieldtyles.label}>{label}</Text>
      <View style={authTextFieldtyles.inputContainer}>
        <TextInput
          style={authTextFieldtyles.input}
          value={value}
          onChangeText={onChangeText}
          secureTextEntry={isSecure}
          autoCapitalize="none"
          placeholder={placeholder}
          inputMode={isSecure ? 'email' as InputModeOptions : 'password' as InputModeOptions}
        />
        {isPassword && (
          <TouchableOpacity onPress={toggleSecureEntry} style={authTextFieldtyles.iconContainer}>
            <CustomIcon set='FontAwesome' name={isSecure ? 'eye-slash' : 'eye'} size={20} color={COLORS.gray} />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default AuthTextField;

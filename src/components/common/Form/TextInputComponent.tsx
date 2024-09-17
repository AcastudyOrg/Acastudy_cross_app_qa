import React, { useState } from "react";
import {
  Text,
  TextInput,
  View,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { TextInputProps } from "../../../types";
import { textInputComponentStyles } from "../../../styles/componentsStyle/commonStyle/formStyle/textInputComponentStyle";
import { COLORS } from "../../../constants";

// Validation functions
const validateName = (name: string) => /^[a-zA-Z]{2,20}$/.test(name);
const validateEmail = (email: string) =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
const validatePassword = (password: string) => password.length >= 8;

const TextInputComponent = ({
  type,
  onChange,
  value,
  label,
  placeholder,
  isTextArea,
  transparentBg,
}: TextInputProps) => {
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [isValid, setIsValid] = useState<boolean>(true);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [inputValue, setInputValue] = useState<string>(value);
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(false);

  const handleFocus = () => {
    setIsFocused(true);
  };

  const handleBlur = () => {
    setIsFocused(false);

    let isValidInput = true;
    let error = "";

    if (type === "text") {
      isValidInput = validateName(inputValue);
      error = isValidInput
        ? ""
        : inputValue.trim().length > 0
        ? `${label} must be 2-20 characters long and contain no numbers.`
        : `Oops! This field is required.`;
    } else if (type === "email") {
      isValidInput = validateEmail(inputValue);
      error = isValidInput ? "" : "Please enter a valid email address.";
    } else if (type === "password") {
      isValidInput = validatePassword(inputValue);
      error = isValidInput
        ? ""
        : "Password must be at least 8 characters long.";
    } else {
      isValidInput = inputValue.trim().length > 0;
      error = isValidInput ? "" : "This field is required.";
    }

    setIsValid(isValidInput);
    setErrorMessage(error);
  };

  const handleChangeText = (text: string) => {
    setInputValue(text);
    setIsValid(true);
    setErrorMessage("");
    onChange(text);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  const getBorderStyle = () => {
    if (isFocused) {
      return textInputComponentStyles.focusedBorder;
    }
    if (!isFocused && !isValid) {
      return textInputComponentStyles.errorBorder;
    }
    if (!isFocused && inputValue.trim().length > 0 && isValid) {
      return textInputComponentStyles.normalBorder;
    }
    return textInputComponentStyles.transparentBorder;
  };

  return (
    <TouchableOpacity onPress={Keyboard.dismiss}>
      <View style={textInputComponentStyles.textInputContainer}>
        {label && (
          <Text style={textInputComponentStyles.textInputLabelTextItem}>
            {label}
          </Text>
        )}

        <View
          style={[
            textInputComponentStyles.textInputItemContentContainer,
            getBorderStyle(),
          ]}
        >
          <View
            style={[
              textInputComponentStyles.textInputItemContainer,
              {
                backgroundColor: transparentBg
                  ? COLORS.transparent
                  : COLORS.gray,
              },
            ]}
          >
            <TextInput
              value={inputValue}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={handleChangeText}
              secureTextEntry={type === "password" && !isPasswordVisible}
              autoCapitalize={type === "email" ? "none" : "sentences"}
              multiline={isTextArea}
              placeholder={placeholder}
              placeholderTextColor={
                transparentBg ? COLORS.darkGray : COLORS.lightGray
              }
              style={[
                textInputComponentStyles.textInputItem,
                {
                  color: transparentBg ? COLORS.black : COLORS.white, height: 50
                },
              ]}
            />
          </View>
          <View style={textInputComponentStyles.textInputIconContainer}>
            {type === "password" && (
              <TouchableOpacity onPress={togglePasswordVisibility}>
                <FontAwesome
                  name={isPasswordVisible ? "eye" : "eye-slash"}
                  size={18}
                  color={COLORS.white}
                />
              </TouchableOpacity>
            )}
            {!isValid && type !== "password" && (
              <FontAwesome
                name="exclamation-circle"
                size={18}
                color={COLORS.red}
              />
            )}
            {isValid &&
              !isFocused &&
              inputValue.trim().length > 0 &&
              type !== "password" && (
                <FontAwesome
                  name="check-circle"
                  size={18}
                  color={COLORS.green}
                />
              )}
          </View>
        </View>
        {!isValid && (
          <Text style={textInputComponentStyles.errorText}>{errorMessage}</Text>
        )}
      </View>
    </TouchableOpacity>
  );
};

export default TextInputComponent;

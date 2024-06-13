import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";

import { TextInputProps } from "../../../types";
import { COLORS, FONT, SIZE } from "../../../constants";

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
        : "Name must be 2-20 characters long and contain no numbers.";
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
      return styles.focusedBorder;
    }
    if (!isFocused && !isValid) {
      return styles.errorBorder;
    }
    if (!isFocused && inputValue.trim().length > 0 && isValid) {
      return styles.normalBorder;
    }
    return styles.transparentBorder;
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.textInputContainer}>
        <Text style={styles.textInputLabelTextItem}>{label}</Text>

        <View style={[styles.textInputItemContentContainer, getBorderStyle()]}>
          <View style={styles.textInputItemContainer}>
            <TextInput
              value={inputValue}
              onFocus={handleFocus}
              onBlur={handleBlur}
              onChangeText={handleChangeText}
              secureTextEntry={type === "password" && !isPasswordVisible}
              multiline={isTextArea}
              placeholder={placeholder}
              placeholderTextColor={COLORS.lightGray}
              style={styles.textInputItem}
            />
          </View>
          <View style={styles.textInputIconContainer}>
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
            {isValid && !isFocused && inputValue.trim().length > 0 && (
              <FontAwesome name="check-circle" size={18} color={COLORS.green} />
            )}
          </View>
        </View>
        {!isValid && <Text style={styles.errorText}>{errorMessage}</Text>}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  textInputContainer: {
    width: "100%",
    flexDirection: "column",
  },
  textInputLabelTextItem: {
    color: COLORS.white,
    fontSize: SIZE.l,
    fontFamily: FONT.interBold,
    marginBottom: 10,
  },
  textInputItemContentContainer: {
    width: "100%",
    height: 50,
    paddingHorizontal: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    overflow: "hidden",
    borderRadius: 10,
    backgroundColor: COLORS.gray,
  },
  focusedBorder: {
    borderWidth: 2,
    borderColor: COLORS.purple,
  },
  normalBorder: {
    borderWidth: 2,
    borderColor: COLORS.green,
  },
  transparentBorder: {
    borderWidth: 2,
    borderColor: COLORS.transparent,
  },
  errorBorder: {
    borderWidth: 2,
    borderColor: COLORS.red,
  },
  textInputItemContainer: {
    width: "90%",
    justifyContent: "center",
  },
  textInputItem: {
    color: COLORS.white,
    fontSize: SIZE.l,
    fontFamily: FONT.interRegular,
  },
  textInputIconContainer: {
    width: "10%",
    justifyContent: "center",
    alignItems: "center",
  },
  errorText: {
    color: COLORS.red,
    fontSize: SIZE.s,
    marginTop: 5,
  },
});

export default TextInputComponent;

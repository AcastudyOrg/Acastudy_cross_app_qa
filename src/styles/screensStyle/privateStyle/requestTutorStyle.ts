import { StyleSheet } from "react-native";

export const requestTutorStyles = StyleSheet.create({

    Container: {
      flex: 1,
      padding: 10,
      alignSelf: 'center',
      justifyContent: 'center',
  
    },
  
    dropDownContainer: {
      flexDirection: 'row',
      justifyContent: 'center',
    },
    input: {
      width: 'auto',
      margin: 30,
    },
    Dropdown: {
      margin: 20,
      width: "45%",
    },
    button: {
      backgroundColor: '#2196F3',
      padding: 10,
      borderRadius: 5,
    },
    buttonText: {
      color: 'white',
      fontSize: 16,
    },
  
  });
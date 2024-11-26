import { StyleSheet } from "react-native";
import { isPlatformIOSorAndroid } from "../../../../../utils/config";
import { COLORS, SIZE } from "../../../../constants";
import fontFamily from "../../../../constants/fontFamily";

export const requuestTutorstyles = StyleSheet.create({
    container: {
      backgroundColor: COLORS.transparent,
      marginHorizontal: isPlatformIOSorAndroid() ? 15 : 30,
      marginVertical: isPlatformIOSorAndroid() ? 2: 5,
    },
    subtitle: {
      fontSize: SIZE.xl,
      textAlign: 'center',
      paddingVertical: 16,
      color: COLORS.textGray,
      fontFamily: fontFamily.plusJakartaMedium,
      marginTop: 10,
    },
    textArea: {
      height: 100,
      borderWidth: 1,
      borderColor: COLORS.transparent,
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
    },
    fileUpload: {
      height: 80,
      padding: 16,
      backgroundColor: COLORS.white10Percent,
      borderRadius: 8,
      alignItems: 'center',
      justifyContent: 'center',
      marginVertical: 16,
      borderWidth: 2,
      borderColor: COLORS.grayWhiteText,
      borderStyle: 'dashed',
    },
    fileUploadText: {
      color: COLORS.grayWhiteText,
      textAlign: 'center',
    },
    errorText: {
      color: 'red',
      fontSize: 12,
      marginBottom: 8,
    },
    errorInput: {
      borderColor: 'red',
    },
    submitButton: {
      paddingTop: 10,
      marginBottom:30,
    }
  });
  
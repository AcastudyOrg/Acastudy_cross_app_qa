import { StyleSheet } from "react-native";
import { isPlatformIOSorAndroid } from "../../../../utils/config";
import { COLORS, SIZE } from "../../../constants";

export const callScreenStyles = StyleSheet.create({
    homeMainContainer: {
        flex: 1,
        paddingHorizontal: 20,
    },
    headerContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
      },
      headerText: {
        color: COLORS.appearDirtyWhite,
        fontSize: isPlatformIOSorAndroid() ? SIZE.xxl : SIZE.xxxl,
        fontWeight: '900',
        textAlign: 'center'
      },
});



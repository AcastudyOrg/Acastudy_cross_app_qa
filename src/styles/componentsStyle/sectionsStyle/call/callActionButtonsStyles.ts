import { StyleSheet } from 'react-native';
import { isPlatformIOSorAndroid } from "../../../../../utils/config";
import { COLORS, SIZE } from "../../../../constants";
import fontFamily from "../../../../constants/fontFamily";

export const callActionButtonsStyles = StyleSheet.create({
    actionButtonsContainer: {
      width: "100%",
      flexDirection: isPlatformIOSorAndroid() ? 'column' : 'row',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      marginVertical: isPlatformIOSorAndroid()? 30: 60,
    },
    actionButtonContent: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignContent: 'flex-start',
      paddingBottom: 12,
    },
    actionButton: {
      overflow: "hidden",
      borderRadius: 50,
      height: isPlatformIOSorAndroid() ? 50 : 100,
      width: isPlatformIOSorAndroid() ? 50 : 100,
      justifyContent: 'center',
      alignItems: 'center',
    },
    actionTextContainer: {
      justifyContent: 'center',
      alignContent: 'flex-start',
      marginLeft: 10,
    },
    actionMainText: {
      color: COLORS.white,
      fontSize: SIZE.l,
      fontFamily: fontFamily.plusJakartaMedium
    },
    actionSubText: {
      color: COLORS.appearDirtyWhite,
      fontSize: SIZE.sm,
      fontFamily: fontFamily.plusJakartaMedium
    }
  });
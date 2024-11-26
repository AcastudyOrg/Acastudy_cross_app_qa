import { StyleSheet, Platform } from "react-native";
import { COLORS, SIZE } from "../../../../constants";

export const meetingPopupModelStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: COLORS.transparent50percent,
    },
    modalContainer: {
      width: '90%',
      maxWidth: 380,
      backgroundColor: COLORS.darkBlue,
      borderRadius: 12,
      overflow: 'hidden',
      elevation: 5,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
    },
    closeButton: {
      position: 'absolute',
      right: 8,
      top: 8,
      padding: 8,
      zIndex: 1,
      backgroundColor: COLORS.lightGrayOpacity,
      borderRadius: 20,
    },
    header: {
      padding: 24,
      flexDirection: 'row',
      alignItems: 'center',
      gap: 16,
    },
    avatar: {
      width: 64,
      height: 64,
      borderRadius: 32,
      borderWidth: 1,
      borderColor:  COLORS.purple,
    },
    headerInfo: {
      flex: 1,
      gap: 4,
    },
    name: {
      fontSize: 20,
      fontWeight: '600',
      color: COLORS.white,
    },
    title: {
      fontSize: 14,
      color: COLORS.grayWhiteText,
    },
    datetime: {
      fontSize: 12,
      color: COLORS.grayWhiteText40persent,
    },
    categoryBadge: {
      backgroundColor: COLORS.lightGrayOpacity,
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
      alignSelf: 'flex-start',
      marginTop: 4,
    },
    categoryText: {
      fontSize: SIZE.sm,
      color: COLORS.white,
    },
    body: {
      padding: 24,
      paddingTop: 0,
      gap: 24,
    },
    section: {
      gap: 12,
    },
    sectionTitle: {
      fontSize: SIZE.m,
      fontWeight: '500',
      color: COLORS.grayWhiteText,
    },
    summaryText: {
      fontSize: SIZE.m,
      color: COLORS.white,
      lineHeight: 20,
    },
    rsvpButtons: {
      flexDirection: 'row',
      gap: 12,
    },
    rsvpButton: {
      flex: 1,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
      gap: 8,
      backgroundColor: COLORS.lightGrayOpacity,
      padding: 12,
      borderRadius: 8,
    },
    acceptedButton: {
      backgroundColor: COLORS.green,
    },
    declinedButton: {
      backgroundColor: COLORS.red,
    },
    buttonText: {
      color: COLORS.white,
      fontSize: SIZE.m,
      fontWeight: '500',
    },
    rsvpStatus: {
      textAlign: 'center',
      fontSize:  SIZE.m,
    },
    acceptedText: {
      color:  COLORS.green,
    },
    declinedText: {
      color:  COLORS.red,
    },
    joinButton: {
      width: '100%',
    },
    joinButtonDisabled: {
      opacity: 0.5,
    }
  });
  
import { StyleSheet, Platform } from "react-native";
import { COLORS } from "../../../../constants";

export const meetingPopupModelStyles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Platform.OS === 'web' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
      width: '90%',
      maxWidth: 380,
      backgroundColor: '#1A1E36',
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
      backgroundColor: 'rgba(51, 65, 85, 0.4)',
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
      borderWidth: 2,
      borderColor: '#a855f7',
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
      color: '#94a3b8',
    },
    datetime: {
      fontSize: 12,
      color: '#64748b',
    },
    categoryBadge: {
      backgroundColor: 'rgba(51, 65, 85, 0.4)',
      paddingHorizontal: 8,
      paddingVertical: 4,
      borderRadius: 12,
      alignSelf: 'flex-start',
      marginTop: 4,
    },
    categoryText: {
      fontSize: 12,
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
      fontSize: 14,
      fontWeight: '500',
      color: '#94a3b8',
    },
    summaryText: {
      fontSize: 14,
      color: '#cbd5e1',
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
      backgroundColor: '#334155',
      padding: 12,
      borderRadius: 8,
    },
    acceptedButton: {
      backgroundColor: '#16a34a',
    },
    declinedButton: {
      backgroundColor: '#dc2626',
    },
    buttonText: {
      color: COLORS.white,
      fontSize: 14,
      fontWeight: '500',
    },
    rsvpStatus: {
      textAlign: 'center',
      fontSize: 14,
    },
    acceptedText: {
      color: '#4ade80',
    },
    declinedText: {
      color: '#f87171',
    },
    joinButton: {
      width: '100%',
    },
    joinButtonDisabled: {
      opacity: 0.5,
    }
  });
  
import React from 'react';
import { View, Text, Pressable } from 'react-native';
import { meetingPopupModelStyles } from '../../../styles/componentsStyle/commonStyle/meetingPopupModelStyles/meetingPopupStyles';
import GradientButtonComponent from '../Form/GradientButtonComponent';
import CustomIcon from '../CustomIcon';
import { COLORS } from '../../../constants';

interface MeetingPopUpBodyProp {
    item: {
      id: number;
      thumbnail: string;
      title: string;
      tutor: string;
      datetime: string;
      category: string;
      description: string;
    };
    rsvpStatus: 'accepted' | 'declined' | null;
    setRsvpStatus: React.Dispatch<React.SetStateAction<'accepted' | 'declined' | null>>;
    onJoinCall: () => void;
  }

const MeetingPopUpBody: React.FC< MeetingPopUpBodyProp> = ({ item, rsvpStatus, setRsvpStatus, onJoinCall }) => {
    return (
      <View style={meetingPopupModelStyles.body}>
        <View style={meetingPopupModelStyles.section}>
          <Text style={meetingPopupModelStyles.sectionTitle}>Summary</Text>
          <Text style={meetingPopupModelStyles.summaryText} numberOfLines={3}>
            {item.description}
          </Text>
        </View>
  
        <View style={meetingPopupModelStyles.section}>
          <Text style={meetingPopupModelStyles.sectionTitle}>RSVP</Text>
          <View style={meetingPopupModelStyles.rsvpButtons}>
            <Pressable
              style={[meetingPopupModelStyles.rsvpButton, rsvpStatus === 'accepted' && meetingPopupModelStyles.acceptedButton]}
              onPress={() => setRsvpStatus('accepted')}
            >
              <CustomIcon set="Ionicons" name="checkmark" size={16} color={COLORS.white} />
              <Text style={meetingPopupModelStyles.buttonText}>Accept</Text>
            </Pressable>
  
            <Pressable
              style={[meetingPopupModelStyles.rsvpButton, rsvpStatus === 'declined' && meetingPopupModelStyles.declinedButton]}
              onPress={() => setRsvpStatus('declined')}
            >
              <CustomIcon set="Ionicons" name="close" size={16} color={COLORS.white} />
              <Text style={meetingPopupModelStyles.buttonText}>Decline</Text>
            </Pressable>
          </View>
  
          {rsvpStatus && (
            <Text
              style={[meetingPopupModelStyles.rsvpStatus,  rsvpStatus === 'accepted' ? meetingPopupModelStyles.acceptedText : meetingPopupModelStyles.declinedText ]}>
                {`You have ${rsvpStatus} this meeting`}
            </Text>
          )}
        </View>
  
        <GradientButtonComponent text="Join Call" onPress={onJoinCall} />
      </View>
    );
  };

  export default MeetingPopUpBody;
  
import React, { useState } from 'react';
import { Modal, View, Pressable } from 'react-native';
import CustomIcon from '../CustomIcon';
import { COLORS } from '../../../constants';
import { meetingPopupModelStyles } from '../../../styles/componentsStyle/commonStyle/meetingPopupModelStyles/meetingPopupStyles';
import MeetingPopUpHeader from './MeetingPopUpHeader';
import MeetingPopUpBody from './MeetingPopUpBody';

interface MeetingPopUp {
  visible: boolean;
  controlModal: () => void;
  item: {
    id: number;
    thumbnail: string;
    title: string;
    tutor: string;
    datetime: string;
    category: string;
    description: string;
  };
}

const MeetingPopUpModel: React.FC<MeetingPopUp> = ({ visible, controlModal, item }) => {
  const [rsvpStatus, setRsvpStatus] = useState<'accepted' | 'declined' | null>(null);

  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={controlModal} >
      <View style={meetingPopupModelStyles.container}>
        <View style={meetingPopupModelStyles.modalContainer}>
          <Pressable style={meetingPopupModelStyles.closeButton} onPress={controlModal}>
            <CustomIcon set="Ionicons" name="close" size={20} color={COLORS.white} />
          </Pressable>

          <MeetingPopUpHeader item={item} />

          <MeetingPopUpBody 
            item={item}
            rsvpStatus={rsvpStatus}
            setRsvpStatus={setRsvpStatus}
            onJoinCall={controlModal} />
        </View>
      </View>
    </Modal>
  );
};

export default MeetingPopUpModel;
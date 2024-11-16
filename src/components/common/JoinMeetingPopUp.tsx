import React, { useState } from 'react';
import { Modal, View, Text, Image, StyleSheet, ScrollView, Pressable, Platform } from 'react-native';
import GradientButtonComponent from './Form/GradientButtonComponent';
import CustomIcon from './CustomIcon';
import { COLORS } from '../../constants';

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

const MeetingPopUp: React.FC<MeetingPopUp> = ({ visible, controlModal, item }) => {
  const [rsvpStatus, setRsvpStatus] = useState<'accepted' | 'declined' | null>(null);

  return (
    <Modal animationType="fade" transparent={true} visible={visible} onRequestClose={controlModal} >
      <View style={styles.container}>
        <View style={styles.modalContainer}>
          <Pressable style={styles.closeButton} onPress={controlModal}>
            <CustomIcon set="Ionicons" name="close" size={20} color={COLORS.white} />
          </Pressable>

          <View style={styles.header}>
            <Image source={{ uri: item.thumbnail }} style={styles.avatar} />
            <View style={styles.headerInfo}>
              <Text style={styles.name}>{item.tutor}</Text>
              <Text style={styles.title}>{item.title}</Text>
              <Text style={styles.datetime}>{item.datetime}</Text>
              <View style={styles.categoryBadge}>
                <Text style={styles.categoryText}>{item.category}</Text>
              </View>
            </View>
          </View>

          <View style={styles.body}>
            <View style={styles.section}>
              <Text style={styles.sectionTitle}>Summary</Text>
              <Text style={styles.summaryText} numberOfLines={3}>
                {item.description}
              </Text>
            </View>

            <View style={styles.section}>
              <Text style={styles.sectionTitle}>RSVP</Text>
              <View style={styles.rsvpButtons}>
                <Pressable style={[styles.rsvpButton, rsvpStatus === 'accepted' && styles.acceptedButton]} onPress={() => setRsvpStatus('accepted')}>
                  <CustomIcon set="Ionicons" name="checkmark" size={16} color={COLORS.white} />
                  <Text style={styles.buttonText}>Accept</Text>
                </Pressable>

                <Pressable style={[ styles.rsvpButton, rsvpStatus === 'declined' && styles.declinedButton ]} onPress={() => setRsvpStatus('declined')} >
                  <CustomIcon set="Ionicons" name="remove" size={16} color={COLORS.white} />
                  <Text style={styles.buttonText}>Decline</Text>
                </Pressable>
              </View>

              {rsvpStatus && (
                <Text style={[ styles.rsvpStatus, rsvpStatus === 'accepted' ? styles.acceptedText : styles.declinedText ]}>
                  {rsvpStatus === 'accepted' ? 'You have accepted this meeting' : 'You have declined this meeting' }
                </Text>
              )}
            </View>

            <GradientButtonComponent text="Join Call" onPress={controlModal} />

          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Platform.OS === 'web' ? 'rgba(0, 0, 0, 0.1)' : 'rgba(0, 0, 0, 0)',
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

export default MeetingPopUp;
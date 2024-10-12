import React, { useState } from 'react';
import { Modal, View, Text, Image, StyleSheet, ScrollView, Pressable,  } from 'react-native';
import { tutorHeaderStyles } from '../../styles/componentsStyle/sectionsStyle/tutorsProfile/tutorsHeader';
import { tutorData } from '../../../mockData/TutorData';
import GradientButtonComponent from './Form/GradientButtonComponent';
import { profileScreenStyles } from '../../styles/screensStyle/privateStyle/profileScreenStyle';
import { COLORS } from '../../constants';
import CustomIcon from './CustomIcon';

interface JoinMeetingPopUp {
    visible: boolean;
    controlModal: () => void;
    item: {
      id: number;
      avatar: string;
      title: string;
      description: string;
    };
  }

  const JoinMeetingPopUp: React.FC<JoinMeetingPopUp> = ({ visible, controlModal, item}) => {
    return (
        <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={controlModal}
        > 
            <View style={styles.container}>
                <View style={styles.modalContainer}>
                <View style={styles.innerContainer}>

                  <Pressable
                  style={styles.closeIcon}
                      onPress={controlModal} 
                    >
                      <CustomIcon
                        set={"Ionicons"}
                        name={"close"}
                        size={30}
                        color={COLORS.white}
                      />
                  </Pressable>
                
                    <View style={tutorHeaderStyles.container}>
                     <View style={tutorHeaderStyles.header}>
                        <Image source={{ uri: item.avatar}} style={tutorHeaderStyles.profileImage} />
                        <View style={tutorHeaderStyles.tutorHeaderInfo}>
                            <Text style={tutorHeaderStyles.name}>{tutorData.name} </Text>
                            <Text style={profileScreenStyles.upcomingTitleItem}>{tutorData.subjects}</Text>
                            <Text style={profileScreenStyles.upcomingInfoItem}>{tutorData.upcomingEvents[0].datetime} </Text>
                            <Text style={profileScreenStyles.upcomingInfoItem}>{tutorData.upcomingEvents[0].category}</Text>
                        </View>
                     </View>
                    </View>
                    <Text style={profileScreenStyles.upcomingTitleItem}>Summary</Text>
                    <Text numberOfLines={3} style={profileScreenStyles.upcomingInfoItem}>{item.description}</Text>
                    <View>
                1     <GradientButtonComponent text="Join Call" onPress={controlModal} />
                  </View>
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
    },
  
    modalContainer: {
      maxWidth: '50%',
      maxHeight: '60%',
      flex: 1,
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: '#1A1E36',
  
    },
    innerContainer: {
      flex: 1,
      padding: 20,
      alignSelf: 'center',
      justifyContent: 'center',
      backgroundColor: 'rgba(0,0,0,0.2)',
  
    },
    closeIcon: {
      position: 'absolute',
      top: 10,
      left: 10,
      zIndex: 1, // Ensure the icon is on top
    },
});

  export default JoinMeetingPopUp;
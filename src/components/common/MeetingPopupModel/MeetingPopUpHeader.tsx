import React from 'react';
import { View, Text, Image } from 'react-native';
import MeetingPopUp from './MeetingPopUpModel';
import { meetingPopupModelStyles } from '../../../styles/componentsStyle/commonStyle/meetingPopupModelStyles/meetingPopupStyles';


interface MeetingPopUpHeaderProps {
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
const MeetingPopUpHeader: React.FC<MeetingPopUpHeaderProps> = ({ item }) => {
    return (
      <View style={meetingPopupModelStyles.header}>
        <Image source={{ uri: item.thumbnail }} style={meetingPopupModelStyles.avatar} />
        <View style={meetingPopupModelStyles.headerInfo}>
          <Text style={meetingPopupModelStyles.name}>{item.tutor}</Text>
          <Text style={meetingPopupModelStyles.title}>{item.title}</Text>
          <Text style={meetingPopupModelStyles.datetime}>{item.datetime}</Text>
          <View style={meetingPopupModelStyles.categoryBadge}>
            <Text style={meetingPopupModelStyles.categoryText}>{item.category}</Text>
          </View>
        </View>
      </View>
    );
  };

export default MeetingPopUpHeader;
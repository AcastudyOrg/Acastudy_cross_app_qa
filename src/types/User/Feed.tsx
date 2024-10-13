import { ImageSourcePropType } from "react-native";

export interface StudyFeedEntry {
    id: string;
    title: string;
    tutorName: string;
    tutorAvatar: ImageSourcePropType
    date: string;
    time: string;
    duration: string;
    rsvpCount: number;
    description: string;
    image: ImageSourcePropType;
  }
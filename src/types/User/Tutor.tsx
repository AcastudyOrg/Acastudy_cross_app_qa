import { ImageSourcePropType } from "react-native";

export interface TutorData {
    name: string;
    rating: number;
    reviews: number;
    imageUrl: ImageSourcePropType;
    bio: string;
    subjects: string[];
    experiences: Experience[];
    upcomingEvents: {
      id: number;
      thumbnail: string;
      title: string;
      tutor: string;
      datetime: string;
      category: string;
    } []
    reviewCounts: Record<string, number>;
    bookedDays: string[];
  }

  export interface Experience {
    company: string;
    period: string;
    position: string;
  }
import { ImageSourcePropType } from 'react-native';

export type UserType = {
    id?: string;
    firstName?: string;
    lastName?: string;
    email?: string;
    gender?: string;
    ageGroup?: string;
    biography?: string;
    levelOfStudy?: string;
    school?: string;
    curriculum?: string;
    interests?: string[];
    password?: String,
    role?: 'STUDENT' | 'TUTOR';
    address?: {
        suburb?: string;
        city?: string;
        province?: string;
    },

    rating?: number;
    reviews?: number;
    upcomingEvents?: string[];
    experiences?: Experience[];
    bookings?: {
        dates: string[]; // ISO date strings of unavailable dates
        bookedOutDatesTimeSlots: {
            [date: string]: string[]; // key is ISO date, value is array of available times
        };
    };
    onlineStatus?: boolean;
    imageUrl?: ImageSourcePropType;
};

export interface Experience {
    company: string;
    period: string;
    position: string;
}
import { ImageSourcePropType } from 'react-native';

export type User = {
    id?: string;
    name: string;
    surname: string;
    profilePictureUrl: ImageSourcePropType;
    subjects?: string[];
    onlineStatus?: boolean; 

    firstName?: String,
    lastName?: String,
    email?: String,
    phoneNumber?: String,
    password?: String,
    role?: 'STUDENT' | 'TUTOR',
};
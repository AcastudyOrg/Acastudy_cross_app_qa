import { ImageSourcePropType } from 'react-native';

export type User = {
    name: string;
    surname: string;
    profilePictureUrl: ImageSourcePropType;
};
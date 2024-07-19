import { ImageSourcePropType } from "react-native";

export interface ImageProps {
  authBackgroundImage: ImageSourcePropType;
  appLogo: ImageSourcePropType;
  forgotPassword: ImageSourcePropType;
  sentEmail: ImageSourcePropType;
  success: ImageSourcePropType;
  error: ImageSourcePropType;
  loader: ImageSourcePropType | string;
  user: ImageSourcePropType;
  userPlaceholder: ImageSourcePropType;
}

export interface IconProps {
  homeIcon: ImageSourcePropType;
    homeIconActive:ImageSourcePropType;
    callsIcon:ImageSourcePropType;
    chatsIcon:ImageSourcePropType;
    profileIcon:ImageSourcePropType;
    profileIconActive:ImageSourcePropType;
    studyIcon:ImageSourcePropType;
}

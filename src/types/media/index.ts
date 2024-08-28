import { ImageSourcePropType } from "react-native";

export interface ImageProps {
  authBackgroundImage: ImageSourcePropType;
  appLogo: ImageSourcePropType;
  googleLogo: ImageSourcePropType;
  bannerImage: ImageSourcePropType;
  student: ImageSourcePropType;
  studentTutor: ImageSourcePropType;
  forgotPassword: ImageSourcePropType;
  sentEmail: ImageSourcePropType;
  success: ImageSourcePropType;
  error: ImageSourcePropType;
  loader: ImageSourcePropType | string;
  user: ImageSourcePropType | string;
  userPlaceholder: ImageSourcePropType;
  comingSoon: ImageSourcePropType| string;

  mathImg: ImageSourcePropType;
  physicsImg: ImageSourcePropType;
  literatureImg: ImageSourcePropType;
  biologyImg: ImageSourcePropType;
  johnImg: ImageSourcePropType;
  janeImg: ImageSourcePropType;
  agmedImg: ImageSourcePropType;
  druboImg: ImageSourcePropType;
  onboard: ImageSourcePropType;
}

export interface IconProps {
  homeIcon: ImageSourcePropType;
  homeIconActive: ImageSourcePropType;
  callsIcon: ImageSourcePropType;
  chatsIcon: ImageSourcePropType;
  profileIcon: ImageSourcePropType;
  profileIconActive: ImageSourcePropType;
  studyIcon: ImageSourcePropType;
}

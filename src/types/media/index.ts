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
  studentPicture: string;
    maths: string;

  mathImg: ImageSourcePropType;
  physicsImg: ImageSourcePropType;
  literatureImg: ImageSourcePropType;
  biologyImg: ImageSourcePropType;
  johnImg: ImageSourcePropType;
  janeImg: ImageSourcePropType;
  agmedImg: ImageSourcePropType;
  druboImg: ImageSourcePropType;
  onboard: ImageSourcePropType;

  study_1: ImageSourcePropType;
  study_2: ImageSourcePropType;
  study_3: ImageSourcePropType;
  study_4: ImageSourcePropType;
  study_5: ImageSourcePropType;
  study_6: ImageSourcePropType;
  study_7: ImageSourcePropType;
  study_8: ImageSourcePropType;
  study_9: ImageSourcePropType;
  study_10: ImageSourcePropType;
  study_11: ImageSourcePropType;
  study_12: ImageSourcePropType;
  study_13: ImageSourcePropType;
  study_14: ImageSourcePropType;
  study_15: ImageSourcePropType;
  study_16: ImageSourcePropType;
  study_17: ImageSourcePropType;
  study_18: ImageSourcePropType;
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

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

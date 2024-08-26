export interface UserProps {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  avatar: string;
}

export interface OnboardingItemProps {
  id: number;
  picture: string;
  title: string;
  description: string;
}

export interface HomeDataItemProps {
  id: string;
  userId: string;
  firstName: string;
  lastName: string;
  avatar: string;
  title: string;
  description: string;
  mediaFile?: string;
  mediaType: string;
  likes: {
    id: string;
    userId: UserProps[];
    avatar: string;
    firstName: string;
    lastName: string;
  };
  comments: {
    id: string;
    userId: UserProps[];
    message: string;
    attachment?: string;
    avatar: string;
    firstName: string;
    lastName: string;
    createdAt: string;
  };
  reviews: {
    id: string;
    userId: UserProps[];
    title: string;
    description: string;
    avatar: string;
    firstName: string;
    lastName: string;
    rating: number;
    createdAt: string;
  };
  overallRating: number;
  createdAt: string;
}

export interface HomeDataProps {
  dataTitle: string;
  data: HomeDataItemProps[];
  viewAllLink: () => void;
}

//form props
export interface ButtonProps {
  text: string;
  onPress: () => void;
  icon?: string | JSX.Element;
  primary?: boolean;
}
export interface SocialAuthButtonProps {
  text?: string;
  iconName: string;
  iconLibrary: "AntDesign" | "Entypo";
  onPress: () => void;
  size: number;
  color: string;
}
export interface TextInputProps {
  type: "password" | "tel" | "text" | "email";
  onChange: (text: string) => void;
  value: string;
  label?: string;
  placeholder?: string;
  isTextArea?: boolean;
  transparentBg?: boolean;
}
export interface ImagePickerComponentProps {
  onImagePicked: (uri: string) => void;
}
export interface TopNavigationProps {
  backNavigation: boolean;
  companyLogo?: boolean;
  authenticatedUser?: boolean;
}
export interface QueryResponse {
  title: string;
  message: string;
  success: boolean;
}

//onboarding types
export interface OnboardingItemProps {
  id: number;
  picture: string;
  title: string;
  description: string;
}

//form props
export interface ButtonProps {
  text: string;
  onPress: () => void;
  icon?: string | JSX.Element;
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
  label: string;
  placeholder?: string;
  isTextArea?: boolean;
}

// Define a type for Response Component
export interface QueryResponse {
  title: string;
  message: string;
  success: boolean;
}

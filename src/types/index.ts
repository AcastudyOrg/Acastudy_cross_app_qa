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

// Define a type for Response Component
export interface QueryResponse {
  title: string;
  message: string;
  success: boolean;
}

import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

const ScreenSize = () => {
  if (width < 768) {
    return "mobile";
  } else if (width < 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
};

export default ScreenSize;

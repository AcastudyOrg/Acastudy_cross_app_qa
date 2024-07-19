import { ImageSourcePropType } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const screenSize = () => {
  if (width < 768) {
    return "mobile";
  } else if (width < 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
};

  export const getImageSource = (image: string | ImageSourcePropType) => {
    if (typeof image === "string") {
      return { uri: image };
    }
    return image;
  };
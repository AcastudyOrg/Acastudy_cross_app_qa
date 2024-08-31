import { ImageSourcePropType, Platform } from "react-native";
import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const isMobile =  Platform.OS === "ios" || Platform.OS === "android";

export const screenSize = () => {
  if (width < 768) {
    return "mobile";
  } else if (width < 1024) {
    return "tablet";
  } else {
    return "desktop";
  }
};

export const homeTileScreenWidth = (screenWidth: number) => {
  return screenWidth > 900 ? screenWidth * .18 : 160;
}

export const getImageSource = (image: string | ImageSourcePropType) => {
  if (typeof image === "string") {
    return { uri: image };
  }
  return image;
};

export const formatDateTime = (datetime: string): string => {
  const date = new Date(datetime);
  const options: Intl.DateTimeFormatOptions = {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
    weekday: "short",
    day: "numeric",
    month: "short",
  };
  const formattedDate = new Intl.DateTimeFormat('en-US', options).format(date);
  const [weekday, dayMonth, time] = formattedDate.split(", ");
  return `${time} | ${weekday}, ${dayMonth}`;
};

import { ImageSourcePropType } from "react-native";

export const isMobile = (screenWidth: number) => {
  return screenWidth < 768;
}

export const isTablet = (screenWidth: number) => {
  return screenWidth >= 768 && screenWidth <= 1024;
}

export const isDesktop = (screenWidth: number) => {
  return screenWidth > 1024;
}

export const isNotMobile = (screenWidth: number) => {
  return screenWidth > 768;
}

export const isNotDesktop = (screenWidth: number) => {
  return screenWidth < 1024;
}

export const textWidth = (screenWidth: number) => {
  return screenWidth > 1024 ? screenWidth * .6 : screenWidth * .7;
}

export const searchContainerWidth = (screenWidth: number) => {
  return screenWidth > 1024 ? screenWidth * .4 : screenWidth * .6;
}

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

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

export const formatChatMessageDate = (date: Date): string =>{
  const now = new Date();

  // Check if the given date is today return format: 13:45
  const isToday = now.toDateString() === date.toDateString();
  if (isToday) {
    const hours = date.getHours();
    const minutes = date.getMinutes();

    const formattedHours = hours < 10 ? `0${hours}` : hours;
    const formattedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${formattedHours}:${formattedMinutes}`;
  }
  
  // Get difference in milliseconds and convert to days
  const diffTime = now.getTime() - date.getTime();
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  // Check if the date is yesterday
  if (diffDays === 1) {
    return "Yesterday";
  }

  // Check if the date is within the last 7 days
  if (diffDays < 7 && diffDays >= 0) {
    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    return dayNames[date.getDay()];
  }

  // If the date is older than 7 days, return formatted date in DD/MM/YYYY
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const year = date.getFullYear();

  const dayFormatted = day < 10 ? `0${day}` : day;
  const monthFormatted = month < 10 ? `0${month}` : month;

  return `${dayFormatted}/${monthFormatted}/${year}`;
}
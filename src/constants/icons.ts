import { IconProps } from "../types/media";

//app important images
const homeIcon = require("../../assets/images/icons/homeActive.png");
const homeIconActive = require("../../assets/images/icons/homeActive.png");
const callsIcon = require("../../assets/images/icons/calls.png");
const chatsIcon = require("../../assets/images/icons/chats.png");
const profileIcon = require("../../assets/images/icons/profile.png");
const profileIconActive = require("../../assets/images/icons/profileActive.png");
const studyIcon = require("../../assets/images/icons/study.png");

const images: IconProps = {
  homeIcon,
  homeIconActive,
  callsIcon,
  chatsIcon,
  profileIcon,
  profileIconActive,
  studyIcon,
};

export type IconProp = {
  set: string,
  name: string,
  size: number,
  color: string,
}

export default images;

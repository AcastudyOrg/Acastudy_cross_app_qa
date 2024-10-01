import { IconSetName } from "../components/common/CustomIcon";
import { NAV_SCREEN_NAME, STRING } from "../constants/strings";

export const navTabs = [
    { name: STRING.home, link: NAV_SCREEN_NAME.HomeScreen, icon: { set: "Ionicons" as IconSetName, name: 'home' } },
    { name: STRING.study, link: NAV_SCREEN_NAME.StudyScreen, icon: { set: "Ionicons" as IconSetName, name: 'book' } },
    { name: STRING.call, link: NAV_SCREEN_NAME.CallScreen, icon: { set: "Ionicons" as IconSetName, name: 'call' } },
    { name: STRING.chat, link: NAV_SCREEN_NAME.ChatScreen, icon: { set: "Ionicons" as IconSetName, name: 'chatbubbles' } },
    { name: STRING.profile, link: NAV_SCREEN_NAME.StudentProfileScreen, icon: { set: "Ionicons" as IconSetName, name: 'person' } },
];
import { IconSetName } from "../components/common/CustomIcon";
import { NAV_SCREEN_NAME, STRING } from "../constants/strings";

export const navStudentTabs = [
    { name: STRING.home, link: NAV_SCREEN_NAME.HomeScreen, icon: { set: "Ionicons" as IconSetName, name: 'home' } },
    { name: STRING.call, link: NAV_SCREEN_NAME.CallScreen, icon: { set: "Ionicons" as IconSetName, name: 'call' } },
    { name: STRING.profile, link: NAV_SCREEN_NAME.StudentProfileScreen, icon: { set: "Ionicons" as IconSetName, name: 'person' } },
];

export const navTutorTabs = [
    { name: STRING.home, link: NAV_SCREEN_NAME.HomeScreen, icon: { set: "MaterialCommunityIcons" as IconSetName, name: 'view-dashboard' } },
    { name: STRING.call, link: NAV_SCREEN_NAME.CallScreen, icon: { set: "Ionicons" as IconSetName, name: 'call' } },
    { name: STRING.profile, link: NAV_SCREEN_NAME.TutorProfileEditebleScreen, icon: { set: "Ionicons" as IconSetName, name: 'person' } },
]
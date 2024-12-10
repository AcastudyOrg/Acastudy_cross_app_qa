import { View, Pressable, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { isPlatformIOSorAndroid } from "../../../../utils/config";
import { COLORS } from "../../../constants";
import CustomIcon from "../../common/CustomIcon";
import { STRING } from "../../../constants/strings";
import { callActionButtonsStyles } from "../../../styles/componentsStyle/sectionsStyle/call/callActionButtonsStyles";


const CallActionButtons = () => {
    return (
        <View style={callActionButtonsStyles.actionButtonsContainer}>

            <Pressable style={callActionButtonsStyles.actionButtonContent}>
                <LinearGradient colors={[COLORS.darkPurple, COLORS.purple, COLORS.darkPurple]} style={callActionButtonsStyles.actionButton}>
                    <CustomIcon set={"FontAwesome"} name={"video-camera"} size={isPlatformIOSorAndroid() ? 25 : 50} />
                </LinearGradient>
                <View style={callActionButtonsStyles.actionTextContainer}>
                    <Text style={callActionButtonsStyles.actionMainText}>{STRING.scheduleMeeting}</Text>
                    <Text style={callActionButtonsStyles.actionSubText}>{STRING.planYourMeeting}</Text>
                </View>
            </Pressable>

            <Pressable style={callActionButtonsStyles.actionButtonContent}>
                <LinearGradient colors={[COLORS.darkPurple, COLORS.purple, COLORS.darkPurple]} style={callActionButtonsStyles.actionButton}>
                    <CustomIcon set={"Ionicons"} name={"calendar-clear"} size={isPlatformIOSorAndroid() ? 25 : 50} />
                </LinearGradient>
                <View style={callActionButtonsStyles.actionTextContainer}>
                    <Text style={callActionButtonsStyles.actionMainText}>{STRING.calendar}</Text>
                    <Text style={callActionButtonsStyles.actionSubText}>{STRING.viewFullCalendar}</Text>
                </View>
            </Pressable>

            <Pressable style={callActionButtonsStyles.actionButtonContent}>
                <LinearGradient colors={[COLORS.darkPurple, COLORS.purple, COLORS.darkPurple]} style={callActionButtonsStyles.actionButton}>
                    <CustomIcon set={"MaterialIcons"} name={"video-call"} size={isPlatformIOSorAndroid() ? 25 : 50} />
                </LinearGradient>
                <View style={callActionButtonsStyles.actionTextContainer}>
                    <Text style={callActionButtonsStyles.actionMainText}>{STRING.instantMeeting}</Text>
                    <Text style={callActionButtonsStyles.actionSubText}>{STRING.startNewMeeting}</Text>
                </View>
            </Pressable>

        </View>
    );
}

export default CallActionButtons;
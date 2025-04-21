import React, { ReactNode } from "react";
import { View, Text, Pressable } from "react-native";
import { tutorHomeScreenStyle } from "@/styles/screensStyle/privateStyle/tutorHomeScreenStyle";
import CustomIcon from "@/components/common/CustomIcon";
import { COLORS } from "@/constants";
import fontFamily from "@/constants/fontFamily";

interface MetricBoardProps {
    totalHours: number;
    pendingRequests: number;
    acummulatedMoney: number;
}

export const MetricBoard: React.FC<MetricBoardProps> = ({ totalHours = 0, pendingRequests = 0, acummulatedMoney = 0 }) => {
    return (
        <View style={tutorHomeScreenStyle.verticalDevider}>
            <View style={[tutorHomeScreenStyle.horizontalDevider, { flex: 1, padding: 0 }]}>
                <MetricCard
                    label="Total Hours"
                    value={totalHours}
                    icon={<CustomIcon set="AntDesign" name="clockcircle" size={50} color={COLORS.grayWhiteText} />}
                />
                <MetricCard
                    label="Panding Requests"
                    value={pendingRequests}
                    icon={<CustomIcon set="MaterialIcons" name="live-help" size={50} color={COLORS.fullRed} />}
                />
            </View>
            <View style={{ paddingHorizontal: 10 }}>
                <MetricCard
                    label="Acummulated Money"
                    value={`R ${acummulatedMoney}`}
                    icon={<CustomIcon set="FontAwesome6" name="money-bill-trend-up" size={50} color={COLORS.lightGreen} />}
                />
            </View>
        </View>
    )
}


interface MetricCardProps {
    label: string;
    value: string | number;
    icon: ReactNode;
    onPress?: () => void;
}

const MetricCard: React.FC<MetricCardProps> = ({
    label,
    value,
    icon,
    onPress = () => { },
}) => {
    return (
        <Pressable onPress={onPress} style={{ flex: 1, backgroundColor: COLORS.white10Percent, borderRadius: 10, padding: 10, width: '100%' }}>
            <Text style={{ color: COLORS.gray60, fontSize: 18, fontFamily: fontFamily.plusJakartaBold }}>{label}</Text>
            <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                {icon}
                <Text style={{ color: COLORS.lightGray, fontSize: 64, fontFamily: fontFamily.plusJakartaBold, marginStart: "10%" }}>{value}</Text>
            </View>
        </Pressable>

    );
};
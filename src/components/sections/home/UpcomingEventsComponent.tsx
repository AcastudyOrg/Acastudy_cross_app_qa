import React from 'react'
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { COLORS, FONT, SIZE } from '../../../constants'
import { formatDateTime } from '../../../../utils/config'

const { width } = Dimensions.get('window');

type EventsProps = {
    item: {
        id: number;
        thumbnail: string;
        title: string;
        tutor: string;
        datetime: string;
        category: string;
    }
};

const UpcomingEventsComponent: React.FC<EventsProps> = ({ item }) => {
    return (
        <View style={styles.container}>
            <LinearGradient
                start={{ x: 0.2, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[COLORS.darkGrayOpacity, COLORS.transparent, COLORS.lightGrayOpacity]}
                style={styles.upcomingEventsContentContainer}>
                <View style={styles.upcomingImageContainer}>
                    <Image
                        source={{ uri: item.thumbnail }}
                        style={styles.upcomingImageItem}
                        resizeMode="cover"
                    />
                </View>

                <View style={styles.upcomingTextCardContainer}>
                    <Text
                        style={styles.upcomingTextCardTitle}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {item.title + " " + "lets see"}
                    </Text>
                    <Text style={styles.upcomingTextCardNormal}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {item.tutor}
                    </Text>
                    <Text style={styles.upcomingTextCard}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {formatDateTime(item.datetime)}
                    </Text>
                    <Text style={styles.upcomingTextCard}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        Category: {item.category}
                    </Text>
                </View>
            </LinearGradient>
        </View>
    )
}

const containerWidth = width * .18;
const styles = StyleSheet.create({
    container: {
        width: containerWidth,
        marginRight: 15,
    },
    upcomingEventsContentContainer: {
        flexDirection: 'row',
        paddingVertical: 8,
        paddingRight: 8,
        paddingLeft: 14,
        borderRadius: 5,
        gap: 7,
    },
    upcomingImageContainer: {
        flexDirection: 'column',
    },
    upcomingImageItem: {
        width: containerWidth * .22,
        height: 55,
        borderRadius: 5
    },
    upcomingTextCardContainer: {
        flexDirection: 'column',
        flex: 1,
        gap: 2,
    },
    upcomingTextCardTitle: {
        color: COLORS.white,
        fontSize: SIZE.sm,
        fontFamily: FONT.plusJakartaBold,
    },
    upcomingTextCardNormal: {
        color: COLORS.white,
        fontSize: SIZE.s,
        fontFamily: FONT.plusJakartaExtraLight,
        opacity: 0.8
    },
    upcomingTextCard: {
        color: COLORS.white,
        fontSize: SIZE.xs,
        fontFamily: FONT.plusJakartaExtraLight,
        opacity: 0.5
    },
});

export default UpcomingEventsComponent;
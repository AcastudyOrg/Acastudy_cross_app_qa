import React from 'react'
import { Image, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { COLORS } from '../../../constants'
import { formatDateTime } from '../../../../utils/config'
import { upcomingEventsComponentStyles } from '../../../styles/componentsStyle/sectionsStyle/home/upcomingEventsComponentStyle'

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
        <View style={upcomingEventsComponentStyles.container}>
            <LinearGradient
                start={{ x: 0.2, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[COLORS.darkGrayOpacity, COLORS.transparent, COLORS.lightGrayOpacity]}
                style={upcomingEventsComponentStyles.upcomingEventsContentContainer}>
                <View style={upcomingEventsComponentStyles.upcomingImageContainer}>
                    <Image
                        source={{ uri: item.thumbnail }}
                        style={upcomingEventsComponentStyles.upcomingImageItem}
                        resizeMode="cover"
                    />
                </View>

                <View style={upcomingEventsComponentStyles.upcomingTextCardContainer}>
                    <Text
                        style={upcomingEventsComponentStyles.upcomingTextCardTitle}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {item.title + " " + "lets see"}
                    </Text>
                    <Text style={upcomingEventsComponentStyles.upcomingTextCardNormal}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {item.tutor}
                    </Text>
                    <Text style={upcomingEventsComponentStyles.upcomingTextCard}
                        numberOfLines={1}
                        ellipsizeMode="tail"
                    >
                        {formatDateTime(item.datetime)}
                    </Text>
                    <Text style={upcomingEventsComponentStyles.upcomingTextCard}
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

export default UpcomingEventsComponent;
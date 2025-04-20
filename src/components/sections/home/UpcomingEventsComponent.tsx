import React from 'react';
import { Image, Pressable, Text, Touchable, View } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

import { COLORS } from '../../../constants';
import { formatDateTime, homeTileScreenWidth } from '../../../../utils/config';
import { upcomingEventsComponentStyles } from '../../../styles/componentsStyle/sectionsStyle/home/upcomingEventsComponentStyle';
import useScreenWidth from '../../../hooks/useScreenWidth';
import { TouchableOpacity } from 'react-native-gesture-handler';
import GradientButtonComponent from '@/components/common/Form/GradientButtonComponent';

type EventsProps = {
    item: {
        id: number;
        thumbnail: string;
        title: string;
        tutor: string;
        datetime: string;
        category: string;
    }
    showButton?: boolean;
};

const UpcomingEventsComponent: React.FC<EventsProps> = ({ item, showButton }) => {
    const screenWidth = useScreenWidth();
    const containerWidth = homeTileScreenWidth(screenWidth);
    return (
        <View style={[upcomingEventsComponentStyles.container, { width: containerWidth }]}>
            <LinearGradient
                start={{ x: 0.2, y: 0 }}
                end={{ x: 0, y: 1 }}
                colors={[COLORS.darkGrayOpacity, COLORS.transparent, COLORS.lightGrayOpacity]}
                style={upcomingEventsComponentStyles.upcomingEventsContentContainer}>
                <View style={{flexDirection: 'row'}}>
                    <View style={upcomingEventsComponentStyles.upcomingImageContainer}>
                        <Image
                            source={{ uri: item.thumbnail }}
                            style={[upcomingEventsComponentStyles.upcomingImageItem, { width: containerWidth * .22 }]}
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
                </View>
                
                { showButton && (
                    <GradientButtonComponent text={'Begin'} onPress={()=>{}} />
                )}
            </LinearGradient>
        </View>
    )
}

export default UpcomingEventsComponent;
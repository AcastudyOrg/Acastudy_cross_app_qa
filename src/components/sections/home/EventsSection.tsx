import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import UpcomingEventsComponent from './UpcomingEventsComponent';
import { eventsSectionStyles } from '../../../styles/componentsStyle/sectionsStyle/home/eventsSectionStyle';
import { STRING } from '../../../constants/strings';

type eventsSectionProps = {
    upcomingEventsData: {
        id: number;
        thumbnail: string;
        title: string;
        tutor: string;
        datetime: string;
        category: string;
    }[];
    showView: boolean;
};

const EventsSection: React.FC<eventsSectionProps> = ({ upcomingEventsData, showView }) => {
    const handleViewMore = () => {
        console.log('view more events')
    }

    return (
        <View style={eventsSectionStyles.upcomingMainContainer}>
            <View style={eventsSectionStyles.upcomingTextContainer}>
                <Text style={eventsSectionStyles.upcomingTitleText}>{STRING.eventTitle}</Text>
                <Text onPress={handleViewMore} style={eventsSectionStyles.upcomingActionText}>{STRING.viewMore}</Text>
            </View>

            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={eventsSectionStyles.eventsMainDataContainer}
            >
                {upcomingEventsData.map((item, i) => (
                    <View key={i} style={eventsSectionStyles.eventsContainer}>
                        <UpcomingEventsComponent item={item} />
                    </View>
                ))}
            </ScrollView>
        </View>
    );
}

export default EventsSection;
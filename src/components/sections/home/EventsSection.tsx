import React from 'react';
import { View, Text, ScrollView } from 'react-native';

import UpcomingEventsComponent from './UpcomingEventsComponent';
import { eventsSectionStyles } from '../../../styles/componentsStyle/sectionsStyle/home/eventsSectionStyle';

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
                <Text style={eventsSectionStyles.upcomingTitleText}>Upcoming events</Text>
                {showView &&(<Text onPress={handleViewMore} style={eventsSectionStyles.upcomingActionText}>View more</Text>)}
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
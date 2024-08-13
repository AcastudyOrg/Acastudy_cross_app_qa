import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient'

import { COLORS, FONT, SIZE } from '../../../constants'
import upcomingEventsData from '../../../../assets/data/home/upcomingEventsData.json'
import { formatDateTime } from '../../../../utils/config'

const UpcomingEventsComponent = () => {
    const handleViewMore = () => {
        console.log('view more events')
    }

    return (
        <View style={styles.upcomingMainContainer}>
            <View style={styles.upcomingTextContainer}>
                <Text style={styles.upcomingTitleText}>Upcoming events</Text>
                <Text onPress={handleViewMore} style={styles.upcomingActionText}>View more</Text>
            </View>

            {/* events data */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.upcomingEventsMainDataContainer}
            >
                {upcomingEventsData.map((item, i) => (
                    <LinearGradient
                        key={i}
                        start={{ x: 0.2, y: 0 }}
                        end={{ x: 0, y: 1 }}
                        colors={["#737373", COLORS.transparent, COLORS.darkBlue]}
                        style={styles.upcomingEventsContentContainer}
                    >
                        <View style={styles.upcomingImageContainer}>
                            <Image
                                source={{ uri: item.thumbnail }}
                                style={styles.upcomingImageItem}
                                resizeMode="cover"
                            />
                        </View>

                        <View style={styles.upcomingTextCardContainer}>
                            <Text style={styles.upcomingTextCardTitle}>
                                {item.title}
                            </Text>
                            <Text style={styles.upcomingTextCardNormal}>
                                {item.tutor}
                            </Text>
                            <Text style={styles.upcomingTextCard}>
                                {formatDateTime(item.datetime)}
                            </Text>
                            <Text style={styles.upcomingTextCard}>
                                Category: {item.category}
                            </Text>
                        </View>
                    </LinearGradient>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    upcomingMainContainer: {
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: Platform.OS === 'ios' || Platform.OS === 'android' ? 15 : 27,
    },
    upcomingTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    upcomingTitleText: {
        color: COLORS.white,
        fontSize: SIZE.l,
        fontFamily: FONT.interBold
    },
    upcomingActionText: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.interRegular
    },

    //event data section
    upcomingEventsMainDataContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 10,
    },
    upcomingEventsContentContainer: {
        flexDirection: 'row',
        padding: 10,
        marginRight: 10,
        borderRadius: 10,
        gap: 15,
    },
    upcomingImageContainer: {
        flexDirection: 'column',
    },
    upcomingImageItem: {
        width: 100,
        height: 80,
        borderRadius: 10
    },
    upcomingTextCardContainer: {
        flexDirection: 'column',
        gap: 8,
    },
    upcomingTextCardTitle: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.interBold
    },
    upcomingTextCardNormal: {
        color: COLORS.white,
        fontSize: SIZE.s,
        fontFamily: FONT.interRegular
    },
    upcomingTextCard: {
        color: COLORS.white,
        fontSize: SIZE.s,
        fontFamily: FONT.interRegular,
        opacity: 0.5
    },
})

export default UpcomingEventsComponent
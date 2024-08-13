import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'
import { Octicons } from '@expo/vector-icons';

import { COLORS, FONT, SIZE } from '../../../constants'
import tutorData from '../../../../assets/data/home/tutorData.json'

const TutorComponent = () => {
    const handleViewMore = () => {
        console.log('view more ')
    }

    return (
        <View style={styles.tutorMainContainer}>
            <View style={styles.tutorTextContainer}>
                <Text style={styles.tutorTitleText}>Tutors</Text>
                <Text onPress={handleViewMore} style={styles.tutorActionText}>View more</Text>
            </View>

            {/* tutor data */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.tutorMainDataContainer}
            >
                {tutorData.map((item, i) => (
                    <View
                        key={i}
                        style={styles.tutorContentContainer}
                    >
                        <View style={styles.tutorImageContainer}>
                            <Image
                                source={{ uri: item.avatar }}
                                style={styles.tutorImageItem}
                            />
                            {item.online && (
                                <Octicons
                                    name="dot-fill"
                                    size={24}
                                    color={COLORS.green}
                                    style={styles.tutorOnline}
                                />
                            )}
                        </View>

                        <View style={styles.tutorNameContainer}>
                            <Text style={styles.tutorNameItem}>{item.firstName} {item.lastName}</Text>
                            <Text style={styles.tutorSubjectItem}>{item.subject}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    tutorMainContainer: {
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: Platform.OS === 'ios' || Platform.OS === 'android' ? 15 : 27,
        marginTop: 30,
    },
    tutorTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    tutorTitleText: {
        color: COLORS.white,
        fontSize: SIZE.l,
        fontFamily: FONT.interBold
    },
    tutorActionText: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.interRegular
    },

    //tutor data section
    tutorMainDataContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 10,
    },
    tutorContentContainer: {
        gap: 15,
        width: 150,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        marginRight: 20,
        borderRadius: 10,
        backgroundColor: COLORS.darkGrayOpacity
    },
    tutorImageContainer: {
        flexDirection: 'column',
    },
    tutorImageItem: {
        width: 100,
        height: 100,
        resizeMode: 'cover',
        borderRadius: 50,
    },
    tutorOnline: {
        zIndex: 1,
        position: "absolute",
        bottom: 5,
        left: 5,
    },
    tutorNameContainer: {
        flexDirection: 'column',
        gap: 5,
    },
    tutorNameItem: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.interBold,
        textAlign: 'center',
    },
    tutorSubjectItem: {
        color: COLORS.white,
        fontSize: SIZE.s,
        fontFamily: FONT.interBold,
        textAlign: 'center',
    },
})


export default TutorComponent
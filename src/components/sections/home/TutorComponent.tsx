import React from 'react'
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import { Octicons } from '@expo/vector-icons';

import { COLORS, FONT, SIZE } from '../../../constants'

const { width } = Dimensions.get('window');

type TutorProps = {
    item: {
        firstName: string;
        lastName: string;
        avatar: string;
        subject: string;
        sessions: number;
        rating: number;
        online: boolean;
    }
};

const TutorComponent: React.FC<TutorProps> = ({ item }) => {
    return (
        <View style={styles.tutorContentContainer}>
            <View style={styles.tutorImageContainer}>
                <Image
                    source={{ uri: item.avatar }}
                    style={styles.tutorImageItem}
                />
                {item.online && (
                    <Octicons
                        name="dot-fill"
                        size={20}
                        color={COLORS.lightGreen}
                        style={styles.tutorOnline}
                    />
                )}
            </View>

            <View style={styles.tutorNameContainer}>
                <Text style={styles.tutorNameItem}>{item.firstName} {item.lastName}</Text>
                <Text style={styles.tutorSubjectItem}>{item.subject}</Text>
            </View>

            <View style={styles.bottomSection}>
                <View style={styles.sessions}>
                    <Text style={styles.sessionText}>Session</Text>
                    <Text style={styles.sessionValueText}>123</Text>
                </View>
                <View style={styles.rating}>
                    <Text style={styles.ratingText}>Rating</Text>
                    <Text style={styles.ratingValueText}>3.5</Text>
                </View>
            </View>
        </View>
    )
}

const containerWidth = width * .18;
const styles = StyleSheet.create({
    tutorContentContainer: {
        width: containerWidth,
        // padding: 10,
        paddingHorizontal: 10,
        paddingVertical: 20,
        marginRight: 15,
        borderRadius: 8,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: COLORS.lightGrayOpacity,
        gap: 15,
    },
    tutorImageContainer: {
        flexDirection: 'column',
    },
    tutorImageItem: {
        width: containerWidth * .3,
        height: containerWidth * .3,
        resizeMode: 'cover',
        borderRadius: 50,
    },
    tutorOnline: {
        zIndex: 1,
        position: "absolute",
        bottom: 5,
        left: 4,
    },
    tutorNameContainer: {
        flexDirection: 'column',
        gap: 5,
    },
    tutorNameItem: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaMedium,
        textAlign: 'center',
    },
    tutorSubjectItem: {
        color: COLORS.lightCardGray,
        fontSize: SIZE.s,
        fontFamily: FONT.plusJakartaBold,
        textAlign: 'center',
    },

    bottomSection: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },

    sessions: {
        flexDirection: 'column',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    sessionText: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaRegular,
        opacity: 0.5,
    },
    sessionValueText: {
        color: COLORS.white,
        fontSize: SIZE.sm,
        fontFamily: FONT.plusJakartaMedium,
    },

    rating: {
        flexDirection: 'column',
        paddingHorizontal: 15,
        alignItems: 'center',
    },
    ratingText: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaRegular,
        opacity: 0.5,
    },
    ratingValueText: {
        color: COLORS.white,
        fontSize: SIZE.sm,
        fontFamily: FONT.plusJakartaMedium,
    },
})


export default TutorComponent
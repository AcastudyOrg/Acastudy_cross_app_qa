import React from 'react'
import { Image, Platform, ScrollView, StyleSheet, Text, View } from 'react-native'

import subjectData from '../../../assets/data/home/subjectData.json'
import { COLORS, FONT, SIZE } from '../../constants'

const SubjectComponent = () => {
    const handleViewMore = () => {
        console.log('view more ')
    }

    return (
        <View style={styles.subjectMainContainer}>
            <View style={styles.subjectTextContainer}>
                <Text style={styles.subjectTitleText}>Subjects</Text>
                <Text onPress={handleViewMore} style={styles.subjectActionText}>View more</Text>
            </View>

            {/*  data */}
            <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                style={styles.subjectMainDataContainer}
            >
                {subjectData.map((item, i) => (
                    <View
                        key={i}
                        style={styles.subjectContentContainer}
                    >
                        <Image
                            source={{ uri: item.thumbnail }}
                            style={styles.subjectImageItem}
                            resizeMode="cover"
                        />

                        <Text style={styles.subjectTextCardTitle}>
                            {item.title}
                        </Text>
                    </View>
                ))}
            </ScrollView>
        </View>
    )
}

const styles = StyleSheet.create({
    subjectMainContainer: {
        width: '100%',
        flexDirection: 'column',
        paddingHorizontal: Platform.OS === 'ios' || Platform.OS === 'android' ? 15 : 27,
        marginTop: 30,
    },
    subjectTextContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    subjectTitleText: {
        color: COLORS.white,
        fontSize: SIZE.l,
        fontFamily: FONT.interBold
    },
    subjectActionText: {
        color: COLORS.white,
        fontSize: SIZE.m,
        fontFamily: FONT.interRegular
    },

    //subject data section
    subjectMainDataContainer: {
        width: '100%',
        flexDirection: 'row',
        marginTop: 10,
        marginRight: 10,
    },
    subjectContentContainer: {
        gap: 15,
        flexDirection: 'column',
        padding: 10,
        marginRight: 20,
        borderRadius: 10,
        backgroundColor: COLORS.darkGrayOpacity
    },
    subjectImageContainer: {
        flexDirection: 'column',
    },
    subjectImageItem: {
        width: 150,
        height: 100,
        borderRadius: 10
    },
    subjectTextCardTitle: {
        color: COLORS.white,
        fontSize: SIZE.s,
        fontFamily: FONT.interRegular,
        alignSelf: 'center'
    },
})

export default SubjectComponent
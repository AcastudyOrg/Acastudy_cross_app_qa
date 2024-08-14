import React from 'react';
import { Dimensions, Image, StyleSheet, Text, View } from 'react-native';

import { COLORS, FONT, SIZE } from '../../../constants';

const { width } = Dimensions.get('window');

type SubjectsProps = {
    item: {
        thumbnail: string;
        title: string;
    }
};
const SubjectComponent: React.FC<SubjectsProps> = ({ item }) => {
    return (
        <View style={styles.container}>
            <Image
                source={{ uri: item.thumbnail }}
                style={styles.subjectImageItem}
                resizeMode="cover"
            />
            <Text style={styles.subjectTextCardTitle}>
                {item.title}
            </Text>
        </View>
    )
}

const containerWidth = width * .18;
const styles = StyleSheet.create({
    container: {
        width: containerWidth,
        padding: 10,
        marginRight: 15,
        borderRadius: 8,
        flexDirection: 'column',
        backgroundColor: COLORS.midGrayOpacity,
        gap: 15,
    },
    subjectImageItem: {
        width: containerWidth * .9,
        height: containerWidth * .55,
        borderRadius: 5,
        alignSelf: 'center'
    },
    subjectTextCardTitle: {
        color: COLORS.lightCardGray,
        fontSize: SIZE.m,
        fontFamily: FONT.plusJakartaExtraBold,
        alignSelf: 'center'
    },
})

export default SubjectComponent
import React from 'react';
import { Image, Text, View } from 'react-native';

import { subjectComponentStyles } from '../../../styles/componentsStyle/sectionsStyle/home/subjectComponentStyle';

type SubjectsProps = {
    item: {
        thumbnail: string;
        title: string;
    }
};
const SubjectComponent: React.FC<SubjectsProps> = ({ item }) => {
    return (
        <View style={subjectComponentStyles.container}>
            <Image
                source={{ uri: item.thumbnail }}
                style={subjectComponentStyles.subjectImageItem}
                resizeMode="cover"
            />
            <Text style={subjectComponentStyles.subjectTextCardTitle}
                numberOfLines={1}
                ellipsizeMode="tail">
                {item.title}
            </Text>
        </View>
    )
}

export default SubjectComponent
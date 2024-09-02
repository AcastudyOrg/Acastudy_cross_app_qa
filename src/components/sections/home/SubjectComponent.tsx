import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { subjectComponentStyles } from '../../../styles/componentsStyle/sectionsStyle/home/subjectComponentStyle';
import { NAV_SCREEN_NAME } from '../../../constants/strings';
import { homeTileScreenWidth } from '../../../../utils/config';
import useScreenWidth from '../../../hooks/useScreenWidth';

type SubjectsProps = {
    item: {
        thumbnail: string;
        title: string;
    }
};
const SubjectComponent: React.FC<SubjectsProps> = ({ item }) => {
    const navigation = useNavigation<any>();
    const screenWidth = useScreenWidth();
    const containerWidth = homeTileScreenWidth(screenWidth);
    return (
        <View style={[subjectComponentStyles.container, { width: containerWidth }]}>
            <TouchableOpacity onPress={() => navigation.navigate(NAV_SCREEN_NAME.SubjectTopicsScreen)}>
                <Image
                    source={{ uri: item.thumbnail }}
                    style={[
                        subjectComponentStyles.subjectImageItem, {
                            width: containerWidth * .9,
                            height: containerWidth * .55,
                        }
                    ]}
                    resizeMode="cover"
                />
                <Text style={subjectComponentStyles.subjectTextCardTitle}
                    numberOfLines={1}
                    ellipsizeMode="tail">
                    {item.title}
                </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubjectComponent
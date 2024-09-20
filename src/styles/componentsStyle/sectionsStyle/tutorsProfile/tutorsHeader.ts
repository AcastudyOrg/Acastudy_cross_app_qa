import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';

export const tutorHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,
    },
    header: {
        padding: 20,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",

    },
    profileImage: {
        width: 150,
        height: 150,
        borderRadius: 100,
    },
    tutorHeaderInfo: {
        paddingLeft: 20,
        justifyContent: 'flex-start',
    },
    name: {
        fontSize: SIZE.xxl,
        fontFamily: FONT.plusJakartaBold,
        color: COLORS.white,
        marginTop: 10,
    },
    rating: {
        fontSize: SIZE.l,
        fontFamily: FONT.plusJakartaRegular,
        color: COLORS.white,
    },
    requestButton: {
        justifyContent: 'flex-start',
        paddingRight: 20,
    }
});

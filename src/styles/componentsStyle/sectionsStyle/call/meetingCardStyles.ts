import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';


const meetingCardStyles = StyleSheet.create({
    container: {
        backgroundColor: COLORS.lightGrayOpacity,
        borderRadius: 8,
        padding: 16,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginBottom: 16,
    },
    titleContainer: {
        flex: 1,
        marginRight: 16,
    },
    title: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: 'bold',
    },
    time: {
        color: COLORS.appearDirtyWhite,
        fontSize: 14,
        marginTop: 4,
    },
    threeDots: {
        width: 24,
        height: 24,
    },
    attendeesContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'flex-end',
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginRight: -8,
        borderWidth: 2,
        borderColor: COLORS.white
    },
    moreAvatars: {
        backgroundColor: COLORS.darkGray,
        justifyContent: 'center',
        alignItems: 'center',
    },
    moreAvatarsText: {
        color: COLORS.grayWhiteText,
        fontSize: 14,
    },
    joinButton: {
        width: 'auto',
        paddingHorizontal: 16,
        paddingTop: 8,
        marginLeft: 'auto',
    },
});

export default meetingCardStyles;
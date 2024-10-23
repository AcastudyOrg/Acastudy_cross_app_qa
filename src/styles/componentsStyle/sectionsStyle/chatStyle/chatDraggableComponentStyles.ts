import { StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

export default StyleSheet.create({
    container: {
        width: "100%",
        height: "98%",
        padding: 10,
        borderRadius: 10,
    },
    wrapper: {
        flex: 1,
        width: "100%",
        flexDirection: 'row',
    },
    rightSection: {
        flex: 1,
        padding: 10,
        borderRadius: 10,
        backgroundColor: COLORS.skyBlue,
    },
    divider: {
        width: 10,
        cursor: 'pointer',
    },
});

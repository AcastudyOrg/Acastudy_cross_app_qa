import { StyleSheet } from 'react-native';
import { COLORS, FONT, SIZE } from '../../../../constants';
import { isPlatformIOSorAndroid } from '../../../../../utils/config';

export const tutorHeaderStyles = StyleSheet.create({
    container: {
        flexDirection: isPlatformIOSorAndroid() ? 'column' : 'row',
        justifyContent: "space-between",
        alignItems: "center",
        paddingTop: 10,
    },
    header: {
        padding: 20,
        flexDirection: isPlatformIOSorAndroid() ? 'column' : 'row',
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
    },
    requestButtonMobileStyle:{
        backgroundColor: COLORS.white,
        padding: 10,
        borderRadius: 50,
        
        position: 'relative',
        bottom: 125,
        left: 50,
        
        shadowColor: COLORS.white,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: .5,
        shadowRadius: 8,
        elevation: 2,
    }
});

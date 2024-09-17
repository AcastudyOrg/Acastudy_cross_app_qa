import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

export const customTextInputStyles = StyleSheet.create({
    inputContainer: {
        width: "100%",
        margin: 10,
        borderRadius: 8,
        borderColor: COLORS.gray60,
        borderWidth: 1,
    },
    input: {
        flex: 1,
        padding: 5,
        color: COLORS.black,
        minHeight: 150,
        textAlignVertical: 'top',
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        ...Platform.select({
            ios: {
                borderColor: 'transparent',
                borderWidth: 0,
            },
            android: {
                borderColor: 'transparent',
                borderWidth: 0,
            },
            windows: {
                borderColor: 'transparent',
                borderWidth: 0,
            },
            macos: {
                borderColor: 'transparent',
                borderWidth: 0,
            }
        }),
    }
});
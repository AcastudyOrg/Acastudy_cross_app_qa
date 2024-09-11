import { Platform, StyleSheet } from 'react-native';
import { COLORS } from '../../../../constants';

export const customTextInput = StyleSheet.create({
    inputContainer: {
        margin: 10,
        height: 'auto',
    },
    input: {
        padding: 10,
        borderRadius: 5,
        color: COLORS.white,
        textAlignVertical: 'top',
        minHeight: 200,
        maxHeight: 500,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        ...Platform.select({
            ios: {
                borderColor: 'transparent',
                borderWidth: 0,
                // Additional iOS-specific styles
            },
            android: {
                borderColor: 'transparent',
                borderWidth: 0,
                // Additional Android-specific styles
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
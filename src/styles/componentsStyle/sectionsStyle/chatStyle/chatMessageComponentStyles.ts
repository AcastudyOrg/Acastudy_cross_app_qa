import { StyleSheet } from "react-native";
import { COLORS } from "../../../../constants";

const globalStyle = StyleSheet.create({
    MessageContainer: {
        padding: 10,
    }
});

export default StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    leftMessageContainer: {
        ...globalStyle.MessageContainer,
        backgroundColor: 'blue',
        alignSelf: 'flex-start',
    },
    rightMessageContainer: {
        ...globalStyle.MessageContainer,
        backgroundColor: 'yellow',
        alignSelf: 'flex-end',
    }
});
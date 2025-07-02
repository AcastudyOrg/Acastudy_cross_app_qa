import { COLORS, FONT, SIZE } from "@/constants";
import { warningModelStyles } from "@/styles/componentsStyle/commonStyle/modalStyle/warningModalStyles";
import { Modal, StyleSheet, TouchableOpacity, View, Text } from "react-native";

interface WarningModalProps {
    heading?: string;
    description?: string;
    onPositive?: () => void;
    positiveText?: string;
    onNegative?: () => void;
    negativeText?: string;
    visible: boolean;
}

const WarningModal = ({ heading, description, onPositive, positiveText, onNegative, negativeText, visible }: WarningModalProps) => {
    return (
        <Modal animationType="fade" transparent visible={visible}>
            <View style={warningModelStyles.container}>
                <View style={warningModelStyles.modalContainer}>
                    <View style={warningModelStyles.copyInfo}>
                        <Text style={warningModelStyles.heading}>{heading}</Text>
                        <Text style={warningModelStyles.description}>{description}</Text>
                    </View>
                    <View style={warningModelStyles.ctaButtons}>
                        <TouchableOpacity style={warningModelStyles.NegativeButton} onPress={onNegative}>
                            <Text style={warningModelStyles.btnText}>{negativeText}</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={warningModelStyles.PositiveButton} onPress={onPositive}>
                            <Text style={warningModelStyles.btnText}>{positiveText}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

export default WarningModal;
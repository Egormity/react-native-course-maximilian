import { Pressable, StyleSheet, Text } from "react-native";
import { COLORS } from "../utils/constants";

const styles = StyleSheet.create({
    buttonContainer: {
        borderRadius: 100,
        paddingVertical: 8,
        paddingHorizontal: 16,
        boxShadow: "0 6 8 rgba(0, 0, 0, 0.3)",
        margin: 4,
    },

    buttonText: {
        color: "#FFFFFF",
        textAlign: "center",
    },
});

export default function PrimaryButton({ children, onPress, btnStyle = {}, textStyle }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => ({
                ...styles.buttonContainer,
                ...btnStyle,
                backgroundColor: pressed ? COLORS.primary600 : COLORS.primary500,
            })}
        >
            <Text style={[styles.buttonText, textStyle]}>{children}</Text>
        </Pressable>
    );
}

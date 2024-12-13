import { Pressable, StyleSheet, Text } from "react-native";
import { GlobalStyles } from "../constants/styles";

const styles = StyleSheet.create({
    container: {
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
        textAlign: "center",
        fontWeight: "bold",
    },
    bgContainer: {
        backgroundColor: GlobalStyles.colors.primary500,
    },
    transparentContainer: {
        backgroundColor: "transparent",
        borderWidth: 2,
        borderColor: GlobalStyles.colors.primary200,
    },
    text: {
        fontSize: 16,
        color: GlobalStyles.colors.primary50,
    },
});

export default function Button({
    children,
    onPress,
    styleType = "bg",
    styleContainer,
    styleText,
    isFullWidth,
}) {
    // bg | transparent
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [
                pressed && { opacity: 0.75 },
                isFullWidth && { flex: 1 },
                styles.container,
                styles[`${styleType}Container`],
                styleContainer,
            ]}
        >
            <Text style={[styles.text, isFullWidth && { textAlign: "center" }, styleText]}>{children}</Text>
        </Pressable>
    );
}

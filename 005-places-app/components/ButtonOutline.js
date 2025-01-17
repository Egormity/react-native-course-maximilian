import { Pressable, StyleSheet, Text } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: COLORS.primary500,
    },
    icon: {
        marginRight: 6,
    },
    text: {
        color: COLORS.primary500,
    },
});

export default function ButtonOutline({ text, name, size = 24, color = "gray", onPress, styleContainer }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [styles.container, pressed && { opacity: 0.75 }, styleContainer]}
        >
            <Ionicons
                name={name}
                size={size}
                color={color}
                style={styles.icon}
            />
            <Text style={styles.text}>{text}</Text>
        </Pressable>
    );
}

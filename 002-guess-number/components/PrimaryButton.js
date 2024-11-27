import { Pressable, StyleSheet, Text, View } from "react-native";

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

export default function PrimaryButton({ children, onPress, btnStyle = {} }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => ({
                ...styles.buttonContainer,
                ...btnStyle,
                backgroundColor: pressed ? "#640233" : "#72063C",
            })}
        >
            <Text style={styles.buttonText}>{children}</Text>
        </Pressable>
    );
}

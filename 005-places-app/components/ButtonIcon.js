import React from "react";
import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
    container: {
        padding: 8,
        margin: 4,
        justifyContent: "center",
        alignItems: "center",
    },
});

export default function ButtonIcon({ name = "star", size = 24, color = "gray", onPress, styleContainer }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [styles.container, pressed && { opacity: 0.75 }, styleContainer]}
        >
            <Ionicons
                name={name}
                size={size}
                color={color}
            />
        </Pressable>
    );
}

import { Pressable, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const styles = StyleSheet.create({
    container: {
        borderRadius: 20,
        padding: 10,
        margin: 10,
    },
});

export default function ButtonIcon({ iconName = "add", color = "#FFF", size = 24, onPress }) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => [pressed ? { opacity: 0.75 } : {}, styles.container]}
        >
            <Ionicons
                name={iconName}
                color={color}
                size={size}
            />
        </Pressable>
    );
}

import { Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function ButtonIcon({
    onPress = () => console.log("Pressed!"),
    iconName = "star",
    color = "#FFF",
    size = 24,
}) {
    return (
        <Pressable
            onPress={onPress}
            style={({ pressed }) => ({ opacity: pressed ? 0.75 : 1 })}
        >
            <Ionicons
                name={iconName}
                size={size}
                color={color}
            />
        </Pressable>
    );
}

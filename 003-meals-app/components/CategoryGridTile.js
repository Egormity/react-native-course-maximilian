import { Pressable, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        margin: 16,
        height: 150,
        borderRadius: 8,
        boxShadow: "0 4 12 rgba(0, 0, 0, 0.3)",
        padding: 16,
        justifyContent: "center",
        textAlign: "center",
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        justifyContent: "center",
        textAlign: "center",
    },
});

export default function CategoryGridTile({ item, onPress }) {
    return (
        <Pressable
            style={({ pressed }) => [
                styles.container,
                { opacity: pressed ? 0.75 : 1, backgroundColor: item.color },
            ]}
            onPress={() => onPress()}
        >
            <Text style={styles.title}>{item.title}</Text>
        </Pressable>
    );
}

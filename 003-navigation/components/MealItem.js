import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        boxShadow: "0 4 12 rgba(0, 0, 0, 0.3)",
        padding: 10,
        margin: 20,
        borderRadius: 8,
    },
    image: {
        height: 200,
        width: 230,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 8,
    },
    details: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
});

export default function MealItem({ item, styleContainer }) {
    return (
        <Pressable
            style={({ pressed }) => [styles.container, styleContainer, { opacity: pressed ? 0.75 : 1 }]}
        >
            <Image
                source={require("../assets/Shrek.png")}
                style={styles.image}
            />
            <Text style={styles.title}>{item.title}</Text>
            <View style={styles.details}>
                <Text>{item.duration} min</Text>
                <Text>{item.complexity.toUpperCase()}</Text>
                <Text>{item.affordability.toUpperCase()}</Text>
            </View>
        </Pressable>
    );
}

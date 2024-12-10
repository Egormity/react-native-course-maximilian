import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    container: {
        gap: 10,
    },
    item: {
        backgroundColor: "#E2B497",
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
    },
});

export default function MealList({ data, styleContainer }) {
    return (
        <View style={[styles.container, styleContainer]}>
            {data.map(el => (
                <Text style={styles.item}>{el}</Text>
            ))}
        </View>
    );
}

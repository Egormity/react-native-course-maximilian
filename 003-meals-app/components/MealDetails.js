import { StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({
    details: {
        flexDirection: "row",
        alignItems: "center",
        gap: 12,
    },
});

export default function MealDetails({ item, styleContainer, styleText }) {
    return (
        <View style={[styles.details, styleContainer]}>
            <Text style={styleText}>{item.duration} min</Text>
            <Text style={styleText}>{item.complexity.toUpperCase()}</Text>
            <Text style={styleText}>{item.affordability.toUpperCase()}</Text>
        </View>
    );
}

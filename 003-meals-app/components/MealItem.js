import { useNavigation } from "@react-navigation/native";
import { Pressable, StyleSheet, Text, View } from "react-native";
import MealDetails from "./MealDetails";
import DummyImage from "./ImageDummy";

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "#FFFFFF",
        boxShadow: "0 4 12 rgba(0, 0, 0, 0.3)",
        padding: 20,
        margin: 20,
        borderRadius: 8,
    },
    title: {
        fontSize: 18,
        fontWeight: "bold",
        margin: 8,
    },
});

export default function MealItem({ item, styleContainer }) {
    const navigation = useNavigation();

    return (
        <Pressable
            style={({ pressed }) => [styles.container, styleContainer, { opacity: pressed ? 0.75 : 1 }]}
            onPress={() => navigation.navigate("MealDetails", { item: item })}
        >
            <DummyImage />
            <Text style={styles.title}>{item.title}</Text>
            <MealDetails item={item} />
        </Pressable>
    );
}

import { ScrollView, StyleSheet, Text, View } from "react-native";
import MealDetails from "../components/MealDetails";
import DummyImage from "../components/ImageDummy";
import Subtitle from "../components/Subtitle";
import MealList from "../components/MealList";
import { useLayoutEffect, useState } from "react";
import ButtonIcon from "../components/ButtonIcon";
import { useContextFavorites } from "../store/context";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
    imageContainer: {
        alignItems: "center",
    },
    title: {
        fontSize: 24,
        fontWeight: "bold",
        margin: 8,
        textAlign: "center",
        color: "#FFF",
    },
});

export default function ScreenMealDetail({ route, navigation }) {
    const { handleChange, isFavorite } = useContextFavorites();
    const item = route.params.item;

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <ButtonIcon
                    iconName={isFavorite(item.id) ? "star" : "star-outline"}
                    onPress={() => handleChange(item.id)}
                />
            ),
        });
    }, [navigation, item, handleChange, isFavorite]);

    return (
        <ScrollView style={styles.container}>
            <View style={styles.imageContainer}>
                <DummyImage />
                <Text style={styles.title}> {item.title}</Text>
                <MealDetails
                    item={item}
                    styleText={{ color: "#FFF" }}
                />
            </View>

            <Subtitle>Ingredients:</Subtitle>
            <MealList data={item.ingredients} />

            <Subtitle>Steps:</Subtitle>
            <MealList
                data={item.steps}
                styleContainer={{ marginBottom: 40 }}
            />
        </ScrollView>
    );
}

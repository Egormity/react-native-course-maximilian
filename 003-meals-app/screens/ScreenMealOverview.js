import { FlatList, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useNavigation } from "@react-navigation/native";
import { useLayoutEffect } from "react";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default function ScreenMealOverview({ route }) {
    const category = route.params.item;
    const meals = MEALS.filter(meal => meal.categoryIds.includes(category.id));

    const navigation = useNavigation();
    useLayoutEffect(() => {
        navigation.setOptions({ title: category.title });
    }, [navigation, category]);

    return (
        <FlatList
            style={styles.container}
            data={meals}
            renderItem={({ item, index }) => (
                <MealItem
                    item={item}
                    styleContainer={{ marginBottom: index === meals.length - 1 ? 50 : "unset" }}
                />
            )}
            keyExtractor={item => item.id}
        />
    );
}

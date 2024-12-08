import { FlatList, StyleSheet } from "react-native";
import { MEALS } from "../data/dummy-data";
import MealItem from "../components/MealItem";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
});

export default function ScreenMealOverview({ route }) {
    const category = route.params.category;
    const meals = MEALS.filter(meal => meal.categoryIds.includes(category.id));

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

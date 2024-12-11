import { Text } from "react-native";
import { useContextFavorites } from "../store/context";
import MealList from "../components/MealList";
import MealItem from "../components/MealItem";

export default function ScreenFavorites() {
    const { mealsFavorites } = useContextFavorites();

    console.log();

    if (mealsFavorites?.length === 0) return <Text>No favorites yet</Text>;

    return mealsFavorites.map(meal => (
        <MealItem
            key={meal.id}
            item={meal}
        />
    ));
}

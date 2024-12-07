import CategoryGridTile from "../components/CategoryGridTile";
import { CATEGORIES } from "../data/dummy-data";
import { FlatList } from "react-native";

export default function CategoriesScreen() {
    return (
        <FlatList
            data={CATEGORIES}
            renderItem={item => <CategoryGridTile item={item.item} />}
            keyExtractor={item => item.id}
            numColumns={2}
        />
    );
}

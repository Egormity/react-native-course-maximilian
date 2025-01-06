import { FlatList, StyleSheet, Text, View } from "react-native";
import ItemPlace from "./ItemPlace";
import { COLORS } from "../constants/colors";

const styles = StyleSheet.create({
    fallbackContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
    fallbackText: {
        fontSize: 18,
        color: COLORS.primary200,
    },
});

export default function ListPlaces({ data = [] }) {
    if (!data || data.length === 0)
        return (
            <View style={styles.fallbackContainer}>
                <Text style={styles.fallbackText}>No places yet</Text>
            </View>
        );

    return (
        <FlatList
            data={data}
            keyExtractor={item => item.id}
            renderItem={({ item }) => <ItemPlace item={item} />}
        />
    );
}

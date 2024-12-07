import { StyleSheet, Text, View } from "react-native";
import { COLORS } from "../utils/constants";

const styles = StyleSheet.create({
    listItem: {
        borderColor: COLORS.primary800,
        borderWidth: 1,
        padding: 12,
        marginVertical: 8,
        backgroundColor: COLORS.accent500,
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100%",
        borderRadius: 6,
    },

    itemText: {
        fontFamily: "open-sans",
        fontSize: 16,
        color: COLORS.primary800,
    },
});

export default function GuessLogItem({ index, guess }) {
    return (
        <View style={styles.listItem}>
            <Text style={styles.itemText}>#{index}</Text>
            <Text style={styles.itemText}>The guess was: {guess}</Text>
        </View>
    );
}

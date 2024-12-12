import { Pressable, StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { formatDate } from "../utils/formatDate";
import { formatCurrency } from "../utils/formatCurrency";

const styles = StyleSheet.create({
    container: {
        padding: 12,
        marginVertical: 8,
        backgroundColor: GlobalStyles.colors.primary500,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        boxShadow: "0 4 12 rgba(0, 0, 0, 0.3)",
    },
    column: {
        gap: 4,
    },
    text: {
        color: GlobalStyles.colors.primary50,
    },
    description: {
        fontSize: 16,
        fontWeight: "bold",
    },
    amount: {
        fontWeight: "bold",
        color: GlobalStyles.colors.primary500,
        backgroundColor: GlobalStyles.colors.primary50,
        padding: 12,
        borderRadius: 4,
    },
});

export default function ExpenseItem({ item }) {
    return (
        <Pressable style={styles.container}>
            <View style={styles.column}>
                <Text style={[styles.text, styles.description]}>{item.description}</Text>
                <Text style={[styles.text]}>{formatDate(item.date)}</Text>
            </View>
            <Text style={[styles.text, styles.amount]}>{formatCurrency(item.amount)}</Text>
        </Pressable>
    );
}

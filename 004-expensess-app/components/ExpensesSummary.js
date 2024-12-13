import { StyleSheet, Text, View } from "react-native";
import { GlobalStyles } from "../constants/styles";
import { formatCurrency } from "../utils/formatCurrency";

const styles = StyleSheet.create({
    container: {
        padding: 12,
        backgroundColor: GlobalStyles.colors.primary50,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        borderRadius: 8,
    },
    title: {
        fontSize: 16,
        color: GlobalStyles.colors.primary700,
    },
    amount: {
        fontSize: 16,
        color: GlobalStyles.colors.primary700,
        fontWeight: "bold",
    },
});

export default function ExpensesSummary({ title = "title", total = 0 }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.amount}>{formatCurrency(total)}</Text>
        </View>
    );
}

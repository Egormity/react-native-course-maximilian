import { StyleSheet, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../constants/styles";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        gap: 12,
    },
});

export default function ExpensesOutput({ title, data = [] }) {
    return (
        <View style={styles.container}>
            <ExpensesSummary
                title={title}
                total={data.reduce((acc, cur) => acc + cur.amount, 0)}
            />
            <ExpensesList data={data} />
        </View>
    );
}

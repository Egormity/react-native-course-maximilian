import { StyleSheet, View } from "react-native";
import ExpensesList from "./ExpensesList";
import ExpensesSummary from "./ExpensesSummary";
import { GlobalStyles } from "../constants/styles";

const DUMMY = [
    {
        id: 1,
        description: "Test",
        amount: 123,
        date: new Date(),
    },
    {
        id: 2,
        description: "Test 2",
        amount: 1.23,
        date: new Date(),
    },
    {
        id: 3,
        description: "Test 3",
        amount: 6123,
        date: new Date(),
    },
];

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 24,
        backgroundColor: GlobalStyles.colors.primary700,
        gap: 12,
    },
});

export default function ExpensesOutput({ title, data = DUMMY }) {
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

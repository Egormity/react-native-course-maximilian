import ExpensesOutput from "../components/ExpensesOutput";
import { useContextExpenses } from "../store/ContextExpenses";

function ScreenRecentExpenses() {
    const { expenses } = useContextExpenses();

    return (
        <ExpensesOutput
            data={expenses.filter(item => new Date() - item.date < 1000 * 60 * 60 * 24 * 7)}
            title={"Last 7 Days"}
        />
    );
}

export default ScreenRecentExpenses;

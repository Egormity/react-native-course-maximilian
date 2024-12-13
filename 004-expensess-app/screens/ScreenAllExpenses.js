import ExpensesOutput from "../components/ExpensesOutput";
import { useContextExpenses } from "../store/ContextExpenses";

function ScreenAllExpenses() {
    const { expenses } = useContextExpenses();

    return (
        <ExpensesOutput
            data={expenses}
            title={"All"}
        />
    );
}

export default ScreenAllExpenses;

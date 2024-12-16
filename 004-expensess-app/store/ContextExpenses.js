import { createContext, useContext, useState } from "react";

const DUMMY_DATA = [
    { id: "e1", description: "Toilet paper", amount: 94.12, date: new Date(2021, 7, 14) },
    { id: "e2", description: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    { id: "e3", description: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: "e4", description: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12) },
    { id: "e5", description: "Toilet paper", amount: 94.12, date: new Date(2021, 7, 14) },
    { id: "e6", description: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    { id: "e7", description: "Car Insurance", amount: 294.67, date: new Date(2021, 2, 28) },
    { id: "e8", description: "New Desk (Wooden)", amount: 450, date: new Date(2021, 5, 12) },
    { id: "e9", description: "Toilet paper", amount: 94.12, date: new Date(2021, 7, 14) },
    { id: "e10", description: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
    { id: "e11", description: "Car Insurance", amount: 799.49, date: new Date(2024, 12, 11) },
    { id: "e12", description: "New Desk (Wooden)", amount: 799.49, date: new Date(2024, 12, 8) },
];

const ContextExpenses = createContext({
    expenses: [],
    addExpense: expense => {},
    removeExpense: id => {},
    updateExpense: expense => {},
});

export const ExpensesContextProvider = ({ children }) => {
    const [expenses, setExpenses] = useState(DUMMY_DATA);

    const addExpense = expense =>
        setExpenses(prev => [...prev, { ...expense, id: Math.random().toString() }]);
    const removeExpense = id => setExpenses(prev => prev.filter(item => item.id !== id));
    const updateExpense = expense =>
        setExpenses(prev => prev.map(item => (item.id === expense.id ? expense : item)));

    return (
        <ContextExpenses.Provider
            value={{
                expenses,
                addExpense,
                removeExpense,
                updateExpense,
            }}
        >
            {children}
        </ContextExpenses.Provider>
    );
};

export const useContextExpenses = () => useContext(ContextExpenses);

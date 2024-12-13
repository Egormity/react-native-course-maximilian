import { FlatList } from "react-native";
import ExpenseItem from "./ExpenseItem";

export default function ExpensesList({ data }) {
    return (
        <FlatList
            data={data}
            renderItem={dataItem => <ExpenseItem item={dataItem.item} />}
            keyExtractor={item => item.id}
        />
    );
}

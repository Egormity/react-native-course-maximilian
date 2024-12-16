import { useEffect, useLayoutEffect, useState } from "react";
import { Alert, StyleSheet, Text, View } from "react-native";
import ButtonIcon from "../components/ButtonIcon";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/Button";
import { useContextExpenses } from "../store/ContextExpenses";
import Input from "../components/Input";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary800,
        padding: 20,
        gap: 20,
    },
    containerActions: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        gap: 20,
    },
    containerDelete: {
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        borderTopColor: GlobalStyles.colors.primary200,
        borderTopWidth: 2,
    },
    error: {
        color: GlobalStyles.colors.error500,
        fontSize: 20,
    },
});

function ScreenManageExpense({ route, navigation }) {
    const { addExpense, updateExpense, removeExpense } = useContextExpenses();
    const item = route.params?.item;
    const isEdit = !!item;

    const [state, setState] = useState({
        amount: { value: (item?.amount || "") + "", isValid: true },
        date: { value: (item?.date || new Date()).toISOString().slice(0, 10), isValid: true },
        description: { value: (item?.description || "") + "", isValid: true },
    });

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEdit ? "Edit Expense" : "Add Expense",
        });
    }, [navigation, isEdit]);

    const handleSubmit = () => {
        const newItem = {
            amount: +state.amount.value,
            date: new Date(state.date.value),
            description: state.description.value,
            id: item?.id,
        };

        const isValidAmount = !isNaN(newItem.amount.value) && newItem.amount.value > 0;
        const isValidDate = new Date(newItem.date.value) !== "Invalid Date";
        const isValidDescription = newItem.description.value?.length > 0;

        if (!isValidAmount || !isValidDate || !isValidDescription) {
            setState(s => ({
                ...s,
                amount: { ...s.amount, isValid: isValidAmount },
                date: { ...s.date, isValid: isValidDate },
                description: { ...s.description, isValid: isValidDescription },
            }));
        } else {
            isEdit ? updateExpense(newItem) : addExpense(newItem);
            navigation.goBack();
        }
    };

    const isValid = state.amount.isValid && state.date.isValid && state.description.isValid;

    return (
        <View style={styles.container}>
            <View>
                <View>
                    <Input
                        label="Amount"
                        isValid={state.amount.isValid}
                        textInput={{
                            keyboardType: "numeric",
                            onChangeText: v => setState(s => ({ ...s, amount: v })),
                            value: state.amount.value,
                            placeholder: "0.00",
                        }}
                    />
                    <Input
                        label="Date"
                        isValid={state.date.isValid}
                        textInput={{
                            onChangeText: v => setState(s => ({ ...s, date: v })),
                            value: state.date.value,
                            placeholder: "yyyy-mm-dd",
                            maxLength: 10,
                        }}
                    />
                </View>
                <Input
                    label="Description"
                    isValid={state.description.isValid}
                    textInput={{
                        onChangeText: v => setState(s => ({ ...s, description: v })),
                        value: state.description.value,
                        placeholder: "Description",
                        multiline: true,
                        textAlignVertical: "top",
                        minHeight: 100,
                        maxHeight: 300,
                        autoCorrect: false,
                        autoCapitalize: "none",
                    }}
                />
                {!isValid && <Text style={styles.error}>Some values are invalid</Text>}
            </View>
            <View style={styles.containerActions}>
                <Button
                    styleType="transparent"
                    onPress={() => navigation.goBack()}
                    isFullWidth={true}
                >
                    Cancel
                </Button>
                <Button
                    isFullWidth={true}
                    onPress={handleSubmit}
                >
                    {isEdit ? "Update" : "Add"}{" "}
                </Button>
            </View>
            <View style={styles.containerDelete}>
                <ButtonIcon
                    iconName="trash"
                    color={GlobalStyles.colors.error500}
                    size={36}
                    onPress={() => {
                        removeExpense(item.id);
                        navigation.goBack();
                    }}
                />
            </View>
        </View>
    );
}

export default ScreenManageExpense;

import { useLayoutEffect } from "react";
import { StyleSheet, Text, View } from "react-native";
import ButtonIcon from "../components/ButtonIcon";
import { GlobalStyles } from "../constants/styles";
import Button from "../components/Button";
import { useContextExpenses } from "../store/ContextExpenses";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: GlobalStyles.colors.primary800,
        padding: 20,
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
        marginVertical: 20,
    },
});

function ScreenManageExpense({ route, navigation }) {
    const { addExpense, updateExpense, removeExpense } = useContextExpenses();
    const item = route.params?.item;
    const isEdit = !!item;

    useLayoutEffect(() => {
        navigation.setOptions({
            title: isEdit ? "Edit Expense" : "Add Expense",
        });
    }, [navigation, isEdit]);

    return (
        <View style={styles.container}>
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
                    onPress={() => {
                        isEdit ? updateExpense(item) : addExpense(item);
                        navigation.goBack();
                    }}
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

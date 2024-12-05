import { Alert, StyleSheet, Text, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";
import { COLORS } from "../utils/constants";
import Title from "../components/Title";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";

const styles = StyleSheet.create({
    screenContainer: {
        marginTop: 50,
    },

    input: {
        fontSize: 32,
        borderBottomColor: COLORS.accent500,
        borderBottomWidth: 2,
        color: COLORS.accent500,
        marginVertical: 8,
        width: 50,
        textAlign: "center",
    },

    btnsContainer: {
        flexDirection: "row",
    },

    btn: {
        flex: 1,
    },
});

export default function StartGameScreen({ setAppState }) {
    const [value, setValue] = useState("");

    const handleReset = () => setValue("");

    const handleConfirm = () =>
        value === "" || isNaN(+value) || +value < 0 || +value > 99
            ? Alert.alert("Invalid number", "Enter a number between 0 and 99", [
                  { text: "Okay", style: "destructive", onPress: handleReset },
              ])
            : setAppState(s => ({ ...s, userNumber: +value, status: "game" }));

    return (
        <View style={styles.screenContainer}>
            <Title style={styles.title}>Guess my Number</Title>
            <Card>
                <InstructionText>Enter your number</InstructionText>
                <TextInput
                    style={styles.input}
                    maxLength={2}
                    keyboardType="number-pad"
                    autoCapitalize="none"
                    autoCorrect={false}
                    onChangeText={setValue}
                    value={value}
                />
                <View style={styles.btnsContainer}>
                    <PrimaryButton
                        btnStyle={styles.btn}
                        onPress={handleReset}
                    >
                        Reset
                    </PrimaryButton>
                    <PrimaryButton
                        btnStyle={styles.btn}
                        onPress={handleConfirm}
                    >
                        Confirm
                    </PrimaryButton>
                </View>
            </Card>
        </View>
    );
}

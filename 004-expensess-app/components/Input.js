import { StyleSheet, Text, TextInput, View } from "react-native";
import { GlobalStyles } from "../constants/styles";

const styles = StyleSheet.create({
    container: { marginVertical: 8 },
    label: { fontSize: 16, color: GlobalStyles.colors.primary100, marginBottom: 4 },
    input: { backgroundColor: GlobalStyles.colors.primary100, padding: 10, borderRadius: 8, fontSize: 20 },
    inValid: { backgroundColor: GlobalStyles.colors.error50 },
});

export default function Input({ label = "Label", textInput = {}, styleInput, isValid }) {
    return (
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, !isValid && styles.inValid, styleInput]}
                {...textInput}
            />
        </View>
    );
}

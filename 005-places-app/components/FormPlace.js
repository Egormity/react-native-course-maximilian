import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../constants/colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        gap: 10,
    },
    label: {
        fontWeight: "bold",
        color: COLORS.primary500,
        fontSize: 18,
    },
    input: {
        padding: 8,
        color: COLORS.primary500,
        borderWidth: 2,
        borderColor: COLORS.primary500,
    },
});

export default function FormPlace() {
    const [title, setTitle] = useState("");

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={value => setTitle(value)}
                />
            </View>
        </ScrollView>
    );
}

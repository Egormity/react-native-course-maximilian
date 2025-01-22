import { useState } from "react";
import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { COLORS } from "../constants/colors";
import PickerImage from "./PickerImage";
import PickerLocation from "./PickerLocation";

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
        marginBottom: 5,
    },
    input: {
        padding: 8,
        color: COLORS.primary500,
        borderWidth: 2,
        borderColor: COLORS.primary500,
        marginBottom: 10,
    },
});

export default function FormPlace() {
    const [title, setTitle] = useState("");

    return (
        <ScrollView style={styles.container}>
            <View>
                <Text style={styles.label}>Title</Text>
                <TextInput
                    style={styles.input}
                    value={title}
                    onChangeText={value => setTitle(value)}
                />
            </View>
            <PickerImage />
            <PickerLocation />
        </ScrollView>
    );
}

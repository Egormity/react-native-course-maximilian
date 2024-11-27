import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#4E0329",
        marginTop: 100,
        marginHorizontal: 24,
        padding: 16,
        borderRadius: 10,
        boxShadow: "0 6px 8 rgba(0, 0, 0, 0.3)",
        alignItems: "center",
    },

    input: {
        fontSize: 32,
        borderBottomColor: "#DDB52F",
        borderBottomWidth: 2,
        color: "#DDB52F",
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

export default function StartGameScreen() {
    return (
        <View style={styles.container}>
            <TextInput
                style={styles.input}
                maxLength={2}
                keyboardType="number-pad"
                autoCapitalize="none"
                autoCorrect={false}
            />
            <View style={styles.btnsContainer}>
                <PrimaryButton btnStyle={styles.btn}>Reset</PrimaryButton>
                <PrimaryButton btnStyle={styles.btn}>Confirm</PrimaryButton>
            </View>
        </View>
    );
}

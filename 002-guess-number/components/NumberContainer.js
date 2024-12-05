import { StyleSheet, Text } from "react-native";
import { COLORS } from "../utils/constants";

const styles = StyleSheet.create({
    container: {
        borderWidth: 2,
        borderColor: COLORS.accent500,
        marginVertical: 24,
        padding: 24,
        borderRadius: 8,
        color: COLORS.accent500,
        fontSize: 36,
        textAlign: "center",
        fontFamily: "open-sans-bold",
    },
});

export default function NumberContainer({ children }) {
    return <Text style={styles.container}>{children}</Text>;
}

import { StyleSheet, View } from "react-native";
import { COLORS } from "../utils/constants";

const styles = StyleSheet.create({
    inputContainer: {
        backgroundColor: COLORS.primary700,
        marginTop: 20,
        padding: 16,
        borderRadius: 10,
        boxShadow: "0 6px 8 rgba(0, 0, 0, 0.3)",
        alignItems: "center",
    },
});

export default function Card({ children }) {
    return <View style={styles.inputContainer}>{children}</View>;
}

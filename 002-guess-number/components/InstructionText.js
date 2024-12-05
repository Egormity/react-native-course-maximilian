import { StyleSheet, Text } from "react-native";
import { COLORS } from "../utils/constants";

const styles = StyleSheet.create({
    text: { fontSize: 24, color: COLORS.accent500, fontFamily: "open-sans" },
});

export default function InstructionText({ children }) {
    return <Text style={styles.text}>{children}</Text>;
}

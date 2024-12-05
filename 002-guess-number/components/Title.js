import { StyleSheet, Text } from "react-native";
// import { COLORS } from "../utils/constants";

const styles = StyleSheet.create({
    title: {
        fontFamily: "open-sans-bold",
        fontSize: 24,
        textAlign: "center",
        color: "white",
        borderWidth: 2,
        borderColor: "white",
        padding: 12,
    },
});

export default function Title({ children }) {
    return <Text style={styles.title}>{children}</Text>;
}

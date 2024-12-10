import { StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
    subTitle: {
        color: "#E2B497",
        padding: 8,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
        marginVertical: 8,
        borderBottomWidth: 2,
        borderBottomColor: "#E2B497",
    },
});

export default function Subtitle({ children }) {
    return <Text style={styles.subTitle}>{children}</Text>;
}

import { Image, StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image: {
        height: 200,
        width: 230,
    },
});

export default function ImageDummy() {
    return (
        <Image
            source={require("../assets/Shrek.png")}
            style={styles.image}
        />
    );
}

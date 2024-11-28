import { ImageBackground, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

export default function App() {
    return (
        <LinearGradient
            style={styles.container}
            colors={["#4E0329", "#DDb52F"]}
        >
            <ImageBackground
                source={require("./assets/images/background.png")}
                resizeMode="cover"
                style={styles.container}
                imageStyle={{ opacity: 0.15 }}
            >
                <StartGameScreen />
            </ImageBackground>
        </LinearGradient>
    );
}

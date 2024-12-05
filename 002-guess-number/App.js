import { ImageBackground, SafeAreaView, StyleSheet } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { COLORS } from "./utils/constants";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";

const styles = StyleSheet.create({
    fullContainer: {
        flex: 1,
    },

    appContainer: {
        marginHorizontal: 30,
        marginTop: 60,
        flex: 1,
    },
});

export default function App() {
    const [appState, setAppState] = useState({
        userNumber: undefined,
        status: "start",
        guessRounds: [],
    });

    const [fontsLoaded] = useFonts({
        "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
        "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
    });

    if (!fontsLoaded) return <AppLoading />;

    return (
        <LinearGradient
            style={styles.fullContainer}
            colors={[COLORS.primary700, COLORS.accent500]}
        >
            <ImageBackground
                source={require("./assets/images/background.png")}
                resizeMode="cover"
                style={styles.fullContainer}
                imageStyle={{ opacity: 0.15 }}
            >
                <SafeAreaView style={styles.appContainer}>
                    {appState.status === "start" && <StartGameScreen setAppState={setAppState} />}
                    {appState.status === "game" && (
                        <GameScreen
                            appState={appState}
                            setAppState={setAppState}
                        />
                    )}
                    {appState.status === "over" && (
                        <GameOverScreen
                            appState={appState}
                            setAppState={setAppState}
                        />
                    )}
                </SafeAreaView>
            </ImageBackground>
        </LinearGradient>
    );
}

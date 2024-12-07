import { ImageBackground, SafeAreaView, ScrollView, useWindowDimensions } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
import { COLORS } from "./utils/constants";
import GameOverScreen from "./screens/GameOverScreen";
import { useFonts } from "expo-font";
import AppLoading from "expo-app-loading";
import { StatusBar } from "expo-status-bar";

export default function App() {
    const { height, width } = useWindowDimensions();
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
        <>
            <StatusBar style="light" />

            <LinearGradient
                style={{ flex: 1 }}
                colors={[COLORS.primary700, COLORS.accent500]}
            >
                <ImageBackground
                    source={require("./assets/images/background.png")}
                    resizeMode="cover"
                    style={{ flex: 1 }}
                    imageStyle={{ opacity: 0.15 }}
                >
                    <ScrollView style={{ flex: 1 }}>
                        <SafeAreaView
                            style={{
                                flex: 1,
                                margin: 30,
                                marginTop: height > width ? 80 : 30,
                            }}
                        >
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
                    </ScrollView>
                </ImageBackground>
            </LinearGradient>
        </>
    );
}

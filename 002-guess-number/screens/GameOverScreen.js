import { Image, StyleSheet, Text, useWindowDimensions, View } from "react-native";
import Title from "../components/Title";
import { COLORS } from "../utils/constants";
import PrimaryButton from "../components/PrimaryButton";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
    },

    image: {
        borderRadius: 9999,
        borderColor: COLORS.primary800,
        borderWidth: 2,
        marginTop: 20,
    },

    text: {
        fontFamily: "open-sans",
        fontSize: 24,
        textAlign: "center",
        marginVertical: 20,
        color: COLORS.primary800,
    },

    h: {
        fontFamily: "open-sans-bold",
        color: COLORS.accent500,
    },
});

export default function GameOverScreen({ appState, setAppState }) {
    const { width, height } = useWindowDimensions();

    return (
        <View style={styles.container}>
            <Title style={{ width: "100%" }}>Game over!</Title>
            <Image
                source={require("../assets/images/success.png")}
                style={[
                    styles.image,
                    {
                        width: Math.min(width, height) * 0.85,
                        height: Math.min(width, height) * 0.85,
                    },
                ]}
            />
            {/* prettier-ignore */}
            <Text style={styles.text}>
                Your phone needed <Text style={styles.h}>{appState.guessRounds.length}</Text> rounds to guess your number <Text style={styles.h}>{appState.userNumber}</Text>
            </Text>
            <PrimaryButton
                onPress={() =>
                    setAppState(s => ({ userNumber: undefined, status: "start", guessRounds: [] }))
                }
                textStyle={{ fontSize: 18, padding: 5 }}
            >
                Start a new game
            </PrimaryButton>
        </View>
    );
}

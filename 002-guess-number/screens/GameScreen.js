import { Alert, FlatList, StyleSheet, Text, View } from "react-native";
import Title from "../components/Title";
import { useEffect, useState } from "react";
import { generateRandomNumber } from "../utils/generateRandomNumber";
import NumberContainer from "../components/NumberContainer";
import PrimaryButton from "../components/PrimaryButton";
import Card from "../components/Card";
import InstructionText from "../components/InstructionText";
import { Ionicons } from "@expo/vector-icons";
import GuessLogItem from "../components/GuessLogItem";

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: 50,
    },

    btnsContainer: {
        marginTop: 10,
        flexDirection: "row",
    },

    btn: {
        flex: 1,
    },

    listContainer: {
        flex: 1,
        marginVertical: 40,
    },
});

export default function GameScreen({ appState, setAppState }) {
    const [boundary, setBoundary] = useState({ min: 0, max: 100 });
    const [guess, setGuess] = useState();

    // d: "-" | "+"
    const nextGuessHandler = d =>
        (d === "+" && guess > appState.userNumber) || (d === "-" && guess < appState.userNumber)
            ? Alert.alert("Don't cheat", "You know the answer", [{ text: "Sorry", style: "cancel" }])
            : setBoundary(prev => (d === "+" ? { ...prev, min: guess + 1 } : { ...prev, max: guess }));

    useEffect(() => {
        const newGuess = generateRandomNumber(boundary.min, boundary.max);
        setAppState(s => ({ ...s, guessRounds: [...s.guessRounds, newGuess] }));
        newGuess === appState.userNumber ? setAppState(s => ({ ...s, status: "over" })) : setGuess(newGuess);
    }, [boundary.min, boundary.max]);

    return (
        <View style={styles.screen}>
            <Title style={styles.title}>Opponent's Guess</Title>
            <NumberContainer>{guess}</NumberContainer>
            <Card>
                <InstructionText>Higher or Lower?</InstructionText>
                {/* prettier-ignore */}
                <View style={styles.btnsContainer}>
                    <PrimaryButton btnStyle={styles.btn}onPress={() => nextGuessHandler("-")}>
                        <Ionicons name="remove" size={24} color="white"/>
                    </PrimaryButton>
                    <PrimaryButton btnStyle={styles.btn} onPress={() => nextGuessHandler("+")}>
                        <Ionicons name="add" size={24} color="white"/>
                    </PrimaryButton>
                </View>
            </Card>
            <FlatList
                style={styles.listContainer}
                data={appState.guessRounds}
                renderItem={el => (
                    <GuessLogItem
                        index={el.index + 1}
                        guess={el.item}
                    />
                )}
                keyExtractor={item => item}
            />
        </View>
    );
}

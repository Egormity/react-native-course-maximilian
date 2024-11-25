import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, FlatList, Pressable, Modal, Image } from "react-native";
import { StatusBar } from "expo-status-bar";

const styles = StyleSheet.create({
    //
    appContainer: {
        flex: 1,
        paddingTop: 50,
        paddingHorizontal: 16,
    },

    //
    goalsContainer: {
        marginTop: 8,
    },
    goalItem: {
        margin: 8,
        padding: 12,
        borderRadius: 6,
        backgroundColor: "#5E0ACC",
    },
    goalText: {
        color: "white",
    },

    //
    inputContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        gap: 16,
        backgroundColor: "#311B6B",
    },
    textInput: {
        borderWidth: 1,
        borderColor: "#E4D0FF",
        backgroundColor: "#E4D0FF",
        color: "#120438",
        borderRadius: 2,
        padding: 12,
        width: 308,
    },
    btnsContainer: {
        flexDirection: "row",
        gap: 8,
    },
    modalBtn: {
        width: 150,
    },
    image: {
        width: 100,
        height: 100,
        margin: 16,
    },
});

export default function App() {
    const [text, setText] = useState("");
    const [goals, setGoals] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <StatusBar style="light" />

            <View style={styles.appContainer}>
                <Button
                    title="Add New Goal"
                    onPress={() => setIsOpen(true)}
                    color="#5E0AFF"
                />

                <View style={styles.goalsContainer}>
                    <FlatList
                        data={goals}
                        keyExtractor={item => item.id}
                        renderItem={itemData => (
                            <Pressable
                                style={({ pressed }) => ({
                                    ...styles.goalItem,
                                    backgroundColor: pressed ? "#5E0AAA" : "#5E0ACC",
                                })}
                                onPress={() =>
                                    setGoals(state => state.filter(goal => goal.id !== itemData.item.id))
                                }
                            >
                                <Text style={styles.goalText}>{itemData.item.text}</Text>
                            </Pressable>
                        )}
                    />
                </View>
            </View>

            <Modal
                visible={isOpen}
                animationType="slide"
            >
                <View style={styles.inputContainer}>
                    <Image
                        source={require("./assets/goal.png")}
                        style={styles.image}
                    />

                    <TextInput
                        style={styles.textInput}
                        placeholder="Write down your goal"
                        onChangeText={value => setText(value)}
                        value={text}
                    />

                    <View style={styles.btnsContainer}>
                        <View style={styles.modalBtn}>
                            <Button
                                title="Cancel"
                                onPress={() => setIsOpen(false)}
                                color="#F31282"
                            />
                        </View>
                        <View style={styles.modalBtn}>
                            <Button
                                title="Add goal"
                                onPress={() => {
                                    setGoals(state => [...state, { text: text, id: Math.random() + "" }]);
                                    setIsOpen(false);
                                }}
                                color="#5E0AFF"
                            />
                        </View>
                    </View>
                </View>
            </Modal>
        </>
    );
}

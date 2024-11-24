import { Button, StyleSheet, Text, TextInput, View } from "react-native";

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    marginBottom: 24,
  },

  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: 175,
  },

  goalsContainer: {
    flex: 12,
  },
});

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.textInput}
          placeholder="Write down your goal"
        />
        <Button title="Add goal" style={styles.button} />
      </View>

      <View style={styles.goalsContainer}>
        <Text>List of your goals</Text>
      </View>
    </View>
  );
}

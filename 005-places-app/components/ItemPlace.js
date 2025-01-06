import { Image, Pressable, StyleSheet, Text, View } from "react-native";

const styles = StyleSheet.create({});

export default function ItemPlace({ item = {} }) {
    return (
        <Pressable onPress={() => console.log("TODO:")}>
            <Image source={{ uri: item.title }} />
            <View>
                <Text>Place Name</Text>
                <Text>Address</Text>
            </View>
        </Pressable>
    );
}

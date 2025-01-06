import { Text, View } from "react-native";
import ScreenAllPlaces from "./screens/ScreenAllPlaces";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import ItemPlace from "./components/ItemPlace";
import ButtonIcon from "./components/ButtonIcon";
import ScreenAddPlace from "./screens/ScreenAddPlace";
import { COLORS } from "./constants/colors";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="dark" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: COLORS.primary500 },
                        contentStyle: { backgroundColor: COLORS.gray700 },
                        headerTintColor: COLORS.gray700,
                    }}
                >
                    <Stack.Screen
                        name="ScreenAllPlaces"
                        component={ScreenAllPlaces}
                        options={({ navigation }) => ({
                            title: "All Places",
                            headerRight: ({ tintColor }) => (
                                <ButtonIcon
                                    color={tintColor}
                                    name="add"
                                    onPress={() => {
                                        navigation.navigate("ScreenAddPlace");
                                    }}
                                />
                            ),
                        })}
                    />
                    <Stack.Screen
                        name="ScreenAddPlace"
                        component={ScreenAddPlace}
                        options={{ title: "Add New Place" }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

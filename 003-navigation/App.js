import { StatusBar } from "react-native";
import ScreenCategories from "./screens/ScreenCategories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenMealOverview from "./screens/ScreenMealOverview";

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen
                        name="MealsCategories"
                        component={ScreenCategories}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={ScreenMealOverview}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ScreenManageExpense from "./screens/ScreenManageExpense";
import ScreenRecentExpenses from "./screens/ScreenRecentExpenses";
import ScreenAllExpenses from "./screens/ScreenAllExpenses";

import { GlobalStyles } from "./constants/styles";
import ButtonIcon from "./components/ButtonIcon";
import { ExpensesContextProvider } from "./store/ContextExpenses";

const Stack = createNativeStackNavigator();
const BottomTabs = createBottomTabNavigator();

function ScreenExpensesOverview() {
    return (
        <BottomTabs.Navigator
            screenOptions={({ navigation }) => ({
                headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                headerTintColor: "white",
                tabBarStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                tabBarActiveTintColor: GlobalStyles.colors.accent500,
                headerRight: ({ tintColor }) => (
                    <ButtonIcon
                        color={tintColor}
                        onPress={() => {
                            navigation.navigate("ScreenManageExpense");
                        }}
                    />
                ),
            })}
        >
            <BottomTabs.Screen
                name="ScreenRecentExpenses"
                component={ScreenRecentExpenses}
                options={{
                    title: "Recent Expenses",
                    tabBarLabel: "Recent",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="hourglass"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
            <BottomTabs.Screen
                name="ScreenAllExpenses"
                component={ScreenAllExpenses}
                options={{
                    title: "All Expenses",
                    tabBarLabel: "All Expenses",
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons
                            name="calendar"
                            size={size}
                            color={color}
                        />
                    ),
                }}
            />
        </BottomTabs.Navigator>
    );
}

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <ExpensesContextProvider>
                <NavigationContainer>
                    <Stack.Navigator
                        screenOptions={{
                            headerStyle: { backgroundColor: GlobalStyles.colors.primary500 },
                            headerTintColor: "white",
                        }}
                    >
                        <Stack.Screen
                            name="ScreenExpensesOverview"
                            component={ScreenExpensesOverview}
                            options={{ headerShown: false }}
                        />
                        <Stack.Screen
                            name="ScreenManageExpense"
                            component={ScreenManageExpense}
                            options={{
                                presentation: "modal",
                            }}
                        />
                    </Stack.Navigator>
                </NavigationContainer>
            </ExpensesContextProvider>
        </>
    );
}

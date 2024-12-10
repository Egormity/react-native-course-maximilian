import { StatusBar } from "react-native";
import ScreenCategories from "./screens/ScreenCategories";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenMealOverview from "./screens/ScreenMealOverview";
import ScreenMealDetail from "./screens/ScreenMealDetail";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ScreenFavorites from "./screens/ScreenFavorites";
import Ionicons from "@expo/vector-icons/Ionicons";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const DrawerNavigator = () => (
    <Drawer.Navigator
        screenOptions={{
            headerStyle: { backgroundColor: "#351401" },
            headerTintColor: "#fff",
            sceneStyle: { backgroundColor: "#3F2F25" },
            drawerContentStyle: { backgroundColor: "#3F2F25" },
            drawerInactiveTintColor: "#FFF",
            drawerInactiveBackgroundColor: "#3F2F25",
            drawerActiveTintColor: "#FFF",
            drawerActiveBackgroundColor: "#E4BAA1",
        }}
    >
        <Drawer.Screen
            name="MealsCategoriesDrawer"
            component={ScreenCategories}
            options={{
                title: "All meals categories",
                drawerIcon: ({ color, size }) => (
                    <Ionicons
                        name="list"
                        size={size}
                        color={color}
                    />
                ),
            }}
        />
        <Drawer.Screen
            name="Favorites"
            component={ScreenFavorites}
            options={{
                title: "Favorites",
                drawerIcon: ({ color, size }) => (
                    <Ionicons
                        name="star"
                        size={size}
                        color={color}
                    />
                ),
            }}
        />
    </Drawer.Navigator>
);

export default function App() {
    return (
        <>
            <StatusBar style="light" />
            <NavigationContainer>
                <Stack.Navigator
                    screenOptions={{
                        headerStyle: { backgroundColor: "#351401" },
                        headerTintColor: "#fff",
                        contentStyle: { backgroundColor: "#3F2F25" },
                    }}
                >
                    <Stack.Screen
                        name="MealsCategoriesStack"
                        component={DrawerNavigator}
                        options={{ headerShown: false }}
                    />
                    <Stack.Screen
                        name="MealsOverview"
                        component={ScreenMealOverview}
                        // options={obj => ({ title: obj.route.params.category.title })}
                    />
                    <Stack.Screen
                        name="MealDetails"
                        component={ScreenMealDetail}
                        // options={{ headerRight: () => <Button title="Hi!" /> }}
                    />
                </Stack.Navigator>
            </NavigationContainer>
        </>
    );
}

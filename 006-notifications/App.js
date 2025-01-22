import { Alert, View, Button, Platform } from "react-native";
import * as Notifications from "expo-notifications";
import { useEffect } from "react";

Notifications.setNotificationHandler({
    handleSuccess: async () => ({ shouldShowAlert: true }),
    handleError: async () => ({ shouldShowAlert: true }),
    handleNotification: async () => ({ shouldShowAlert: true }),
});

export default function App() {
    useEffect(() => {
        (async () => {
            const { status } = await Notifications.getPresentedNotificationsAsync();
            if (status !== "granted")
                return Alert.alert("You need to Allow notifications for this app to work");

            const registrationToken = await Notifications.getExpoPushTokenAsync();
            console.log(registrationToken);

            if (Platform.OS === "android") {
                await Notifications.setNotificationChannelAsync("default", {
                    name: "default",
                    importance: Notifications.AndroidImportance.DEFAULT,
                });
            }
        })();
    }, []);

    useEffect(() => {
        const subscription = Notifications.addNotificationReceivedListener(notification => {
            console.log(notification);
        });

        const responseSubscription = Notifications.addNotificationResponseReceivedListener(response => {
            console.log(response);
        });

        return () => {
            subscription.remove();
            responseSubscription.remove();
        };
    }, []);

    const notifyDelayed = async () => {
        const test = await Notifications.scheduleNotificationAsync({
            content: {
                title: "Hello",
                body: "World!",
                data: { data: "Here goes the data" },
            },
            trigger: { seconds: 512 },
        });
        console.log(test);
    };

    const notifyPush = async () => {
        const test = await fetch("https://exp.host/--/api/v2/push/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                to: "FIXME: MEMEME",
                title: "Hello",
                body: "World!",
            }),
        });
    };

    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <Button
                onPress={notifyDelayed}
                title="Schedule a notification"
            />
            <Button
                onPress={notifyPush}
                title="Schedule a notification"
            />
        </View>
    );
}

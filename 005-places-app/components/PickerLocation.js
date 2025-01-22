import { Alert, StyleSheet, View } from "react-native";
import ButtonOutline from "./ButtonOutline";
import { COLORS } from "../constants/colors";
import { getCurrentPositionAsync, PermissionStatus, useForegroundPermissions } from "expo-location";

const styles = StyleSheet.create({
    mapPreview: {
        gap: 16,
        backgroundColor: COLORS.primary100,
        height: 200,
        marginVertical: 10,
    },
    actions: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        gap: 10,
    },
});

export default function PickerLocation() {
    const [locationPermission, requestLocationPermission] = useForegroundPermissions();

    async function verifyPermissions() {
        if (locationPermission.status === PermissionStatus.UNDETERMINED) {
            const result = await requestPermission();
            return result.granted;
        }

        if (locationPermission.status === PermissionStatus.DENIED) {
            Alert.alert(
                "Insufficient permissions!",
                "You need to grant location  permissions to use this app."
            );
            return false;
        }

        return true;
    }

    const getLocationHandler = () => {
        const hasLocationPermission = verifyPermissions();
        if (!hasLocationPermission) return;

        const location = getCurrentPositionAsync();
        console.log(location);
    };

    const pickOnMapHandler = () => {};

    return (
        <View>
            <View style={styles.mapPreview}></View>
            <View style={styles.actions}>
                <ButtonOutline
                    name="location"
                    text="LocateUser"
                    color={COLORS.primary500}
                    onPress={getLocationHandler}
                    styleContainer={{ flex: 1 }}
                />
                <ButtonOutline
                    name="map"
                    text="Pick on the Map"
                    color={COLORS.primary500}
                    onPress={pickOnMapHandler}
                    styleContainer={{ flex: 1 }}
                />
            </View>
        </View>
    );
}

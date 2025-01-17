import { Alert, Image, Text, View } from "react-native";
import { launchCameraAsync, useCameraPermissions, PermissionStatus } from "expo-image-picker";
import { useState } from "react";
import ButtonOutline from "./ButtonOutline";

export default function PickerImage() {
    const [permissionInfo, requestPermission] = useCameraPermissions();
    const [image, setImage] = useState();

    async function requestCameraPermission() {
        if (permissionInfo.status === PermissionStatus.UNDETERMINED) {
            const result = await requestPermission();
            return result.granted;
        }

        if (permissionInfo.status === PermissionStatus.DENIED) {
            Alert.alert("Insufficient permissions!", "You need to grant camera permissions to use this app.");
            return false;
        }

        return true;
    }

    async function handleClick() {
        const status = await requestCameraPermission();
        const image = await launchCameraAsync({
            allowsEditing: true,
            aspect: [16, 5],
            quality: 0.5,
        });
        setImage(image);
    }

    return (
        <View style={{ gap: 16 }}>
            <View>
                {image ? (
                    <Image
                        source={{ uri: image?.uri }}
                        style={{ width: "100%", height: 100 }}
                    />
                ) : null}
            </View>
            <ButtonOutline
                text="Take Image"
                onPress={handleClick}
            />
        </View>
    );
}

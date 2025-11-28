import * as Location from "expo-location";
import React from "react";
import { Alert, Button, View } from "react-native";

export default function SosScreen() {
  const sendSOS = async () => {
    let loc = await Location.getCurrentPositionAsync({});
    Alert.alert("🚨 SOS envoyé", `Position: ${loc.coords.latitude}, ${loc.coords.longitude}`);
  };

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Button title="Envoyer SOS" color="red" onPress={sendSOS} />
    </View>
  );
}

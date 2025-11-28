import React, { useState } from "react";
import { Button, StyleSheet, TextInput, View } from "react-native";
import MapView, { Polyline } from "react-native-maps";

export default function DestinationScreen() {
  const [address, setAddress] = useState("");
  const [route, setRoute] = useState<any[]>([]);

  const searchRoute = () => {
    setRoute([
      { latitude: 50.62925, longitude: 3.057256 }, 
      { latitude: 50.63125, longitude: 3.067256 }, 
    ]);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Entrez une adresse"
        value={address}
        onChangeText={setAddress}
      />
      <Button title="Tracer itinéraire" onPress={searchRoute} />
      <MapView style={styles.map}>
        {route.length > 0 && (
          <Polyline
            coordinates={route}
            strokeColor="blue"
            strokeWidth={4}
          />
        )}
      </MapView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  input: { borderWidth: 1, padding: 8, margin: 10 },
  map: { flex: 1 },
});

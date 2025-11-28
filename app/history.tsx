import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";

export default function HistoryScreen() {
  const [trips, setTrips] = useState<string[]>([]);

  useEffect(() => {
    loadTrips();
  }, []);

  const loadTrips = async () => {
    try {
      const data = await AsyncStorage.getItem("trips");
      if (data) setTrips(JSON.parse(data));
    } catch (error) {
      console.error("Erreur de chargement :", error);
    }
  };

  const addTrip = async () => {
    const newTrip = `Trajet du ${new Date().toLocaleString()}`;
    const updatedTrips = [...trips, newTrip];
    setTrips(updatedTrips);
    await AsyncStorage.setItem("trips", JSON.stringify(updatedTrips));
  };

  const clearTrips = async () => {
    await AsyncStorage.removeItem("trips");
    setTrips([]);
  };

  return (
    <View style={styles.container}>
      <Button title="➕ Ajouter un trajet" onPress={addTrip} />
      <Button title="🗑️ Effacer l’historique" onPress={clearTrips} />

      <FlatList
        data={trips}
        renderItem={({ item }) => <Text style={styles.item}>{item}</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  item: { padding: 10, borderBottomWidth: 1, borderColor: "#ccc" },
});

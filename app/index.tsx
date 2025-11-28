import { router } from "expo-router";
import { Button, StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue sur SafeWalk 🚶‍♀️</Text>
      <Text>Démarrer un trajet</Text>
      <Button
        title="Voir l'historique"
        color="blue"
        onPress={() => router.push("/history")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  text: { fontSize: 20, fontWeight: "bold", marginBottom: 10 },
});

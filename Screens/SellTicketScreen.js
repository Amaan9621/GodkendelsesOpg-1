import { View, Text, TextInput, Button } from "react-native";
import styles from "../Styles/Styles"; // Import af styling

// SellTicketsScreen-komponenten giver brugeren mulighed for at oprette en billet
export default function SellTicketsScreen() {
  return (
    <View style={styles.container}>
      {/* Overskrift på skærmen */}
      <Text style={styles.title}>Sælg dine billetter</Text>

      {/* Tekstfelt til eventets navn */}
      <TextInput placeholder="Event navn" style={styles.input} />

      {/* Tekstfelt til billetprisen (numerisk tastatur åbnes) */}
      <TextInput placeholder="Pris" style={styles.input} keyboardType="numeric" />

      {/* Knap til at oprette billetten - viser en alert når man trykker */}
      <Button title="Opret billet" onPress={() => alert("Billet oprettet!")} />
    </View>
  );
}
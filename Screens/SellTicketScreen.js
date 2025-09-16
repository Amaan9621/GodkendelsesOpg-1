import { View, Text, TextInput, Button } from "react-native";
import styles from "../Styles/Styles";

export default function SellTicketsScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sælg dine billetter</Text>
      <TextInput placeholder="Event navn" style={styles.input} />
      <TextInput placeholder="Pris" style={styles.input} keyboardType="numeric" />
      <Button title="Opret billet" onPress={() => alert("Billet oprettet!")} />
    </View>
  );
}
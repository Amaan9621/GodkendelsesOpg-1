import { View, Text, FlatList } from "react-native";
import styles from "../Styles/Styles"; // Import af styling

// Liste af billetter, som vises på skærmen
const TICKETS = ["Taylor Swift", "Coldplay", "Leona Lewis", "Paramore", "Arctic Monkeys"];

// TicketListScreen viser en liste over brugerens billetter
export default function TicketListScreen() {
  return (
    <View style={styles.container}>
      <Text></Text>
      {/* Overskrift på skærmen */}
      <Text style={styles.title}>Dine billetter</Text>

      {/* FlatList bruges til at vise billetterne som en rulleliste */}
      <FlatList
        data={TICKETS} // Listen med billetter
        renderItem={({ item }) => (
          // Hver billet vises som et tekstfelt i listen
          <Text style={styles.listItem}>{item}</Text>
        )}
        // Giver hvert element en unik nøgle baseret på index
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
import { View, Text, FlatList } from "react-native";
import styles from "../Styles/Styles";

const TICKETS = ["Taylor Swift", "Coldplay", "Leona Lewis", "Paramore", "Arctic Monkeys"];

export default function TicketListScreen() {
  return (
    <View style={styles.container}>
      <Text></Text>
      <Text style={styles.title}>Dine billetter</Text>
      <FlatList
        data={TICKETS}
        renderItem={({ item }) => (
          <Text style={styles.listItem}>{item}</Text>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}
import { View, Text, Button } from "react-native";
import styles from "../Styles/Styles";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Velkommen til TicketApp</Text>
      <Button
        title="Sell Tickets"
        onPress={() => navigation.navigate("SellTickets")}
      />
      <Button
        title="Random Screen"
        onPress={() => navigation.navigate("Random")}
      />
    </View>
  );
}
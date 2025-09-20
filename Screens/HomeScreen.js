import { View, Text, Button } from "react-native"; 
import styles from "../Styles/Styles"; // Import af eksterne styles for layout og design

// HomeScreen-komponenten viser en velkomsttekst og to knapper til navigation
export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}> 
      {/* Overskrift der vises øverst på skærmen */}
      <Text style={styles.title}>Velkommen til TicketApp</Text>

      {/* Knap der sender brugeren videre til "SellTickets"-skærmen */}
      <Button
        title="Sell Tickets"
        onPress={() => navigation.navigate("SellTickets")}
      />

      {/* Knap der sender brugeren videre til "Random"-skærmen */}
      <Button
        title="Random Screen"
        onPress={() => navigation.navigate("Random")}
      />
    </View>
  );
}
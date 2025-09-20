import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// Import af de forskellige skærme i appen
import HomeScreen from "./Screens/HomeScreen";
import SellTicketsScreen from "./Screens/SellTicketScreen";
import RandomScreen from "./Screens/RandomScreen";
import TicketListScreen from "./Screens/TicketScreenList";

// Opretter en "tab navigator", som viser faner i bunden af appen
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    // NavigationContainer styrer hele navigationen i appen
    <NavigationContainer>
      {/* Tab.Navigator definerer bundmenuen med faner */}
      <Tab.Navigator>
        {/* Hver Tab.Screen er en fane, som peger på en bestemt skærm */}
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="SellTickets" component={SellTicketsScreen} />
        <Tab.Screen name="Random" component={RandomScreen} />
        <Tab.Screen name="TicketList" component={TicketListScreen} />
      </Tab.Navigator>

      {/* StatusBar tilpasser systemets statusbar (tid, wifi osv.) */}
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
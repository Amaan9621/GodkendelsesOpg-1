import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import HomeScreen from "./Screens/HomeScreen";
import SellTicketsScreen from "./Screens/SellTicketScreen";
import RandomScreen from "./Screens/RandomScreen";
import TicketListScreen from "./Screens/TicketScreenList";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="SellTickets" component={SellTicketsScreen} />
        <Tab.Screen name="Random" component={RandomScreen} />
        <Tab.Screen name="TicketList" component={TicketListScreen} />
      </Tab.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
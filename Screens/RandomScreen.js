import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from "../Styles/Styles"; // Import af fælles styling

// RandomScreen-komponenten viser en knap, der kan generere et tilfældigt tal
export default function RandomScreen() {
  // State til at gemme det tilfældige tal
  const [randomNumber, setRandomNumber] = useState(null);

  // Funktion der genererer et tilfældigt tal mellem 1 og 100
  const generateRandom = () => {
    const num = Math.floor(Math.random() * 100) + 1; // afrunder til heltal
    setRandomNumber(num); // opdaterer state med det nye tal
  };

  return (
    <View style={styles.container}>
      {/* Overskrift til skærmen */}
      <Text style={styles.title}>Random Screen 🎲</Text>

      {/* Knap til at køre funktionen generateRandom */}
      <Button title="Generer et tilfældigt tal" onPress={generateRandom} />

      {/* Viser resultatet kun hvis der er genereret et tal */}
      {randomNumber !== null && (
        <Text style={styles.result}>Dit tal: {randomNumber}</Text>
      )}
    </View>
  );
}
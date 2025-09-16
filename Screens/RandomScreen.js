import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import styles from "../Styles/Styles";

export default function RandomScreen() {
  const [randomNumber, setRandomNumber] = useState(null);

  const generateRandom = () => {
    const num = Math.floor(Math.random() * 100) + 1; // tal mellem 1 og 100
    setRandomNumber(num);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Random Screen 🎲</Text>
      <Button title="Generer et tilfældigt tal" onPress={generateRandom} />
      {randomNumber !== null && (
        <Text style={styles.result}>Dit tal: {randomNumber}</Text>
      )}
    </View>
  );
}
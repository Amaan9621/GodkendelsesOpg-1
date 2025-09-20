import { StyleSheet } from "react-native";

export default StyleSheet.create({
  // Standard container til at centrere indholdet på skærmen
  container: {
    flex: 1, // fylder hele skærmen
    alignItems: "center", // centrerer vandret
    justifyContent: "center", // centrerer lodret
    backgroundColor: "#f9f9f9", // lys baggrundsfarve
  },
  // Titel-tekst stil
  title: {
    fontSize: 22, // større tekst
    fontWeight: "bold", // gør teksten fed
    marginBottom: 20, // afstand under titlen
  },
  // Bruges til tekstfelter (TextInput)
  input: {
    borderWidth: 1, // tynd kant
    borderColor: "#ccc", // grå kant
    borderRadius: 5, // let afrundede hjørner
    padding: 10, // luft indvendigt
    marginVertical: 10, // luft over/under
    width: "80%", // fylder 80% af bredden
  },
  // Stil til liste-elementer i FlatList
  listItem: {
    fontSize: 18, // lidt større tekst
    padding: 10, // luft indvendigt
    borderBottomWidth: 1, // streg under hvert element
    borderBottomColor: "#ddd", // lys grå streg
  },
});
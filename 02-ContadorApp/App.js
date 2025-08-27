import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

export default function App() {
  const [contador, setContador] = useState(0);
  const [textCounter, setTextCounter] = useState(10);
  const [randomText, setRandomText] = useState([]);

  const handleTextCounter = () => {
      if (contador == textCounter) {
        setTextCounter(textCounter + 10);
        setRandomText([
          "Parabens, descobriu um texto",
          "Outro texto!",
          "Só tem 3 textos aqui.",
          "Ou talvez tenham mais.",
        ]);
        randomText.sort(() => Math.random() - 0.5);
      }
    
  };

  const handleAumentar = () => {
    setContador(contador + 1);
    handleTextCounter();
  };

  const handleDminimuir = () => {
    contador > 0 && setContador(contador - 1);
  };

  const handleZerar = () => {
    contador > 0 && setContador(0);
  };

  return (
    <View style={styles.container}>

      <Text style={styles.title}>{randomText[0]}</Text>

      <Text style={styles.title}>Contador</Text>
      <Text style={styles.counterText}>{contador}</Text>

      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={handleAumentar}>
          <Text style={styles.buttonText}>Aumentar</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleDminimuir}>
          <Text style={styles.buttonText}>Diminuir</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        onPress={handleZerar}
        style={[styles.button, styles.resetButton]}
      >
        <Text style={styles.resetText}>Zerar contador</Text>
      </TouchableOpacity>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E5E5CB",
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "#1A120B",
    fontSize: 35,
    fontWeight: "bold",
    marginBottom: 20,
  },
  counterText: {
    fontSize: 64,
    color: "#402E7A",
    marginBottom: 30,
  },
  button: {
    backgroundColor: "#D5CEA3",
    paddingHorizontal: 40,
    paddingVertical: 15,
    borderRadius: 10,
  },
  buttonContainer: {
    flexDirection: "row-reverse",
    marginBottom: 20,
    gap: 6,
  },
  resetButton: {
    backgroundColor: "#3C2A21",
  },
  resetText: {
    color: "#E5E5CB",
    fontSize: 20,
    fontWeight: "bold",
  },
  buttonText: {
    color: "#3C2A21",
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
  },
});

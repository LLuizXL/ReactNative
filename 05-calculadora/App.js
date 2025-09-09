import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function App() {
  const [valor, setValor] = useState("");
  const [result, setResult] = useState(0);

  const handleAdicao = (val) => {
    const valorAtual = parseFloat(valor || "0");

    const newValor = valorAtual + val;

    setResult(newValor);
  };

  const handleSub = (val) => {
    const valorAtual = parseFloat(valor || "0");

    const newValor = valorAtual - val;

    setResult(newValor);
  };

  const handleMult = (val) => {
    const valorAtual = parseFloat(valor || "0");

    const newValor = valorAtual * val;

    setResult(newValor);
  };

  const handleDiv = (val) => {
    const valorAtual = parseFloat(valor || "0");

    const newValor = valorAtual / val;

    setResult(newValor);
  };

  


  const handleNumero = (num) => {
    switch (num) {
  
      case "1":
        setValor(valor + "1");
        break;
      case "2":
        setValor(valor + "2");
        break;
      case "3":
        setValor(valor + "3");
        break;
      case "4":
        setValor(valor + "4");
        break;
      case "5":
        setValor(valor + "5");
        break;
      case "6":
        setValor(valor + "6");
        break;
      case "7":
        setValor(valor + "7");
        break;
      case "8":
        setValor(valor + "8");
        break;
      case "9":
        setValor(valor + "9");
        break;
      case "0":
        setValor(valor + "0");
        break;

      default:
        break;
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text>Calcula a dor(a)</Text>

      <View>
        <Text>{valor}</Text>
      </View>

      <View style={styles.buttonContainer}>
        <View style={styles.teclado}>
          <TouchableOpacity style={styles.button} onPress={() =>handleNumero("1")}>
            <Text style={styles.textButton}>1</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() =>handleNumero("2")}>
            <Text style={styles.textButton}>2</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() => handleNumero("3")}>
            <Text style={styles.textButton}>3</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() =>handleNumero("4")}>
            <Text style={styles.textButton}>4</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() =>handleNumero("5")}>
            <Text style={styles.textButton}>5</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() =>handleNumero("6")}>
            <Text style={styles.textButton}>6</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() =>handleNumero("7")}>
            <Text style={styles.textButton}>7</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() =>handleNumero("8")}>
            <Text style={styles.textButton}>8</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() =>handleNumero("9")}>
            <Text style={styles.textButton}>9</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button} onPress={() =>handleNumero("0")}>
            <Text style={styles.textButton}>0</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.operacao}>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>-</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>x</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.button}>
            <Text style={styles.textButton}>÷</Text>
          </TouchableOpacity>
        </View>

        <View>
          <TouchableOpacity style={styles.button}></TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#d4d4d4",
    alignItems: "center",
    justifyContent: "center",
  },
  teclado: {
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 10,
  },
  operacao: {
    flexDirection: "row",
  },
  buttonContainer: {
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#f0f0f0",
    padding: 30,
    borderRadius: 50,
  },

  textButton: {
    fontSize: 40,
    fontWeight: "condensedBold",
  },
});

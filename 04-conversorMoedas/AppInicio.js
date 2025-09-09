import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  useColorScheme,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from "react-native";

// ------------ Cotações FIXAS no código ------------ //
const cotacaoDolar = 5.42;
const cotacaoEuro = 6.37;

export default function App() {
  const [showResults, setShowResults] = useState(false);
  const [valorReal, setValorReal] = useState("");
  const [resultadoDolar, setResultadoDolar] = useState(0);
  const [resultadoEuro, setResultadoEuro] = useState(0);
  
    const handleClear = () => {
      setValorReal("");
      setResultadoDolar(0);
      setResultadoEuro(0);
      setShowResults(false);
      Keyboard.dismiss();
    };
  
  const handleChange = (text) => {
    const cleanedText = text.replace(/[^0-9.]/g, "");
    setValorReal(cleanedText);
    setShowResults(false);
  };


  const convertCurrency = () => {
    Keyboard.dismiss();

    const amountInReais = parseFloat(valorReal || "0")
    const dolarConvertido = amountInReais / cotacaoDolar;
    const euroConvertido = amountInReais / cotacaoEuro;

    setResultadoDolar(dolarConvertido.toFixed(2));
    setResultadoEuro(euroConvertido.toFixed(2));
    setShowResults(true);
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.title}>Conversor de Moedas</Text>

      <View style={styles.inputContainer}>
        <Text style={styles.inputLabel}>Valor em R$: </Text>
        <TextInput
          style={styles.input}
          placeholder="0.00"
          keyboardType="numeric"
          value={valorReal}
          onChangeText={handleChange}
        />

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.button} onPress={convertCurrency}>
            <Text style={styles.buttonText}>Converter</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.button, styles.clearButton]}
            onPress={handleClear}
          >
            <Text style={styles.buttonText}>Limpar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* card de resultados */}
      {showResults && (
        <View style={styles.card}>
          <Text style={styles.resultTitle}>Resultados da Conversão</Text>
          <Text style={styles.convertedValueText}>
            <Text style={{ fontWeight: "bold" }}>R$ {valorReal} </Text>
            <Text>equivalem a: </Text>
          </Text>

          <Text style={styles.finalResultText}>
            <Text style={{ fontWeight: "bold" }}>$</Text>
            {resultadoDolar} Dólares
          </Text>

          <Text style={styles.finalResultText}>
            <Text style={{ fontWeight: "bold" }}>€</Text>
            {resultadoEuro} Euros
          </Text>
        </View>
      )}

      {/* card de cotações fixas */}
      <View style={styles.cotacaoInfoContainer}>
        <Text style={styles.containerInfoTitle}>Cotações Fixas: </Text>
        <Text style={styles.containerInfoText}>
          1 USD = R$ {cotacaoDolar.toFixed(2)}{" "}
        </Text>
        <Text style={styles.containerInfoText}>
          1 EUR = R$ {cotacaoEuro.toFixed(2)}{" "}
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0",
    flex: 1,
    padding: 20,
    justifyContent: "center",
  },
  title: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
  },
  inputContainer: {
    backgroundColor: "#fff",
    marginVertical: 20,
    padding: 20,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 5,
  },
  input: {
    fontSize: 16,
    borderColor: "grey",
    borderWidth: 0.5,
    borderRadius: 10,
    padding: 10,
  },
  inputLabel: {
    fontSize: 16,
    marginVertical: 5,
  },
  card: {
    marginTop: 10,
    marginBottom: 25,
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 3,
  },
  buttonGroup: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 15,
  },
  button: {
    backgroundColor: "blue",
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    flex: 1,
    marginHorizontal: 5,
  },
  clearButton: {
    backgroundColor: "red",
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "condensedBold",
  },
  resultTitle: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  convertedValueText: {
    fontSize: 16,
    textAlign: "center",
    marginBottom: 5,
    color: "#555",
  },
  finalResultText: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 10,
    color: "#007bff",
  },
  cotacaoInfoContainer: {
    marginTop: 10,
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: "#eee",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.08,
    shadowRadius: 2,
    elevation: 3,
  },
  containerInfoTitle: {
    fontSize: 15,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#555",
  },
  containerInfoText: {},
});

import { useState } from "react";
import { Text, StyleSheet } from "react-native"
import {  SafeAreaView,   } from 'react-native-safe-area-context'

// Importa polyfill que habilita geração
import "react-native-get-random-values";
import {v4 as uuidv4} from "uuid";


export default function ProfileScreen(){
const [userId] = useState(uuidv4());

  return (
      <SafeAreaView style={ styles.container  }>
        <Text style={styles.text}>👤 Tela de Perfil</Text>
        <Text style={ styles.subText}>Seu ID único: {userId} </Text>
      </SafeAreaView>
);
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",

    alignItems: "center"

  },
  text: {
    fontSize: 28,
    fontWeight: "bold",
    marginBottom: 10

  },
  subText: {
    textAlign: "center",
    fontSize: 18,
    fontWeight: "normal",
    color: '#666'

  }
})

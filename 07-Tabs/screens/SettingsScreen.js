import React from 'react'
import { StyleSheet, Text } from "react-native"
import { SafeAreaView } from 'react-native-safe-area-context'


export default function SettingsScreen(){
  return (
        <SafeAreaView style={styles.container}>
          <Text style={styles.text}>AJUSTE SUAS CONFIGURAÇÕES AQUI</Text>
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

  }
})

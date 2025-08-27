//Importa os módulos necessários do React e React Native.

import { StyleSheet, Text, View } from "react-native";


//Define o componente principal a aplicação "APP"
//A palavra "export default" o torna disponivel para ser usado em outras partes da aplicação.
export default function App(){
    //O componente retorna uma estrutura de UI (Interface do Usuário) em JSX
    return (
        // 'View' é um contêiner flexível, equivalemnte a uma <div>
        <View style={styles.container}>
            {/* 'Text' é um componente para utilização de texto. */}
            <Text style={styles.title}>
                Meu Primeiro App!
            </Text>
            {/* Outro componente de texto */}
            <Text style={styles.subtitle}>Bem-vindo ao React-Native!</Text>
        </View>
    );

}

//Cria um objeto de estilos usando a API 'StyleSheet'
//Isso otimiza o desempenho e facilita a organização dos estilos

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: "#1A120B",
        alignItems: "center",
        justifyContent: "center"
    },
    title : {
        fontSize: 30,
        fontWeight: "bold",
        color: "#D5CEA3",
        marginBottom: 20
    } ,
    subtitle :{
        fontSize: 16,
        color: "#E5E5CB"
    }
})
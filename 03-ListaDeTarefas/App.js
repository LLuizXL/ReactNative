import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
      <Text style={styles.topBarTitle}>Minhas Tarefas</Text>
      <TouchableOpacity>
        <Text>🌙</Text>
      </TouchableOpacity>
      </View>


      <View style={styles.card}>

      <TextInput style={styles.input} placeholder='Adicionar nova tarefa...'/>
      <TouchableOpacity style={styles.btnAdd}>
        <Text style={styles.buttonText}>Adicionar</Text>
      </TouchableOpacity>

      </View>

      <FlatList style={styles.flatList} contentContainerStyle={styles.flatListContent} ListEmptyComponent={() => (
        <Text>Nenhuma tarefa adicionada ainda.</Text>
      )} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#e0f7fa",
    flex: 1,
    
  },

  topBar: {
    backgroundColor: "#fff",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 50,
    paddingBottom: 15,
    borderBottomWidth: 1,
    borderColor: "rgba(0,0,0,0.1)",
  },
  topBarTitle: {
    color: "#00796b",
    fontSize: 24,
    fontWeight: "bold"
    
  },
  card: {
    backgroundColor: "#fff" ,
    color: "#000",
    shadowColor: "#000",
   margin: 20,
   borderRadius: 15,
   padding: 20,
   shadowOffset: {width: 0, height: 4},
   shadowOpacity: 0.2,
   shadowRadius: 8,
   elevation: 10,
   shadowColor: "rgba(0,0,0,0.5)"
  },
  input: {
    backgroundColor: "#fcfcfc",
    color: "#333",
    borderColor: "#b0bec5",
    borderWidth: 1,
    borderRadius: 15,
    padding: 20,
    fontSize: 18,
    marginBottom: 10 
  },
  btnAdd :{
    backgroundColor: "#009688",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center"
  },
  buttonText :{
    color: "white",
    fontSize: 18,
    fontWeight: "bold"

  },
  flatListContent: {
    alignItems: "center",
    paddingBottom: 10 // Espaçamento no final da listinha hihhihihihihihi

  },
   taskItem : {
     backgroundColor: '#fff',
     color: "#333",
     borderColor: "rgba(0,0,0,0.1)",

    flexDirection: "row",
    justifyContent: 'center',
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    borderWidth: 1,
  },
  taskTextContainer: {
    flex: 1, // Perfimte que o texto ocupe o espaço dispnível
    marginRight: 10

  },
  taskText: {
    color: "#333",
    fontSize: 18,
    flexWrap: "wrap", // Permite que o texto quebre linha

  },
  completedTaskItem: {
    textDecorationLine: "line-through",
    opacity: 0.7,

  },
  deleteButton : {
    padding: 8,
    borderRadius: 5
  },
  deleteButtonText :{
  //  color: "#fff",
    fontSize: 22,
    fontWeight: "bold"
  },
  emptyListText : {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16
  },


});

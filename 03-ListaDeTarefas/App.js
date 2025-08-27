import { StatusBar } from "expo-status-bar";
import {
  Alert,
  FlatList,
  Keyboard,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
export default function App() {
  const [tasks, setTasks] = useState([]); // Estado para armazenar a lista de tarefas
  const [newTask, setNewTask] = useState(""); // Estado para o texto da nova tarefa


useEffect(() => {

const loadTasks = async () => {
try {
    const savedTasks = await AsyncStorage.getItem("tasks");
    savedTasks && setTasks(JSON.parse(savedTasks));
} catch (error) {
  console.error("Erro ao carregar tarefas: ", error);
}
}
loadTasks();
}, [])

  useEffect(() => {

    const saveTasks = async () => {

      try {
        await AsyncStorage.setItem("tasks", JSON.stringify(tasks));
      } catch (error) {

        console.error("Erro ao salvar as tasks: ", error);
      }

    };
    saveTasks();
  }, [tasks])


  const addTask = () => {
    if (newTask.length > 0) {
      //Garante que a tarefa não vai salvar vazia.
      setTasks((prevTasks) => [
        ...prevTasks,
        { id: Date.now().toString(), text: newTask.trim(), completed: false }, // Cria uma nova tarefa com ID único
      ]);
      setNewTask(""); // Limpa o campo de input
      Keyboard.dismiss();
    } else {
      Alert.alert(
        "Atenção",
        "Por favor, informe alguma meta ou tarefa na planilha."
      );

    }
  };

  const deleteTask = (id) => {
    Alert.alert(
      "COnfirmar exclusão",
      "Tem certeza que deseja excluir esta tarefa?",
      [
        { text: "Cancelar", style: "cancel" },
        {
          text: "Excluir",
          style: "destructive",
          onPress: () =>
            setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id)),
        },
      ]
    );
  };

  const completeTask = (id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const renderList = ({ item }) => (
    <View style={styles.taskItem} key={item.id}>
      <TouchableOpacity
        onPress={() => completeTask(item.id)}
        style={styles.taskTextContainer}
      >
        <Text
          style={[styles.taskText, item.completed && styles.completedTaskItem]}
        >
          {item.text}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => deleteTask(item.id)}>
        <Text style={styles.taskText}>🗑️</Text>
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.topBarTitle}>Minhas Tarefas</Text>
        <TouchableOpacity>
          <Text>🌙</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.card}>
        <TextInput
          value={newTask}
          onChangeText={setNewTask}
          onSubmitEditing={addTask}
          style={styles.input}
          placeholder="Adicionar nova tarefa..."
        />
        <TouchableOpacity style={styles.btnAdd} onPress={addTask}>
          <Text style={styles.buttonText}>Adicionar</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        style={styles.flatList}
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={renderList}
        // renderItem={({ item }) => (
        //   <View style={styles.taskItem} key={item.id}>
        //     <Text style={styles.taskText}>{item.text}</Text>
        //     <TouchableOpacity>
        //       <Text>🗑️</Text>
        //       </TouchableOpacity>
        //   </View>
        // )}
        contentContainerStyle={styles.flatListContent}
        ListEmptyComponent={() => (
          <Text style={styles.emptyListText}>
            Nenhuma tarefa adicionada ainda.
          </Text>
        )}
      />

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
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    color: "#000",
    shadowColor: "#000",
    margin: 20,
    borderRadius: 15,
    padding: 20,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
    shadowColor: "rgba(0,0,0,0.5)",
  },
  input: {
    backgroundColor: "#fcfcfc",
    color: "#333",
    borderColor: "#b0bec5",
    borderWidth: 1,
    borderRadius: 15,
    padding: 20,
    fontSize: 18,
    marginBottom: 10,
  },
  btnAdd: {
    backgroundColor: "#009688",
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  flatListContent: {
    paddingBottom: 10, // Espaçamento no final da listinha hihhihihihihihi
  },
  taskItem: {
    backgroundColor: "#fff",
    color: "#333",
    borderColor: "rgba(0,0,0,0.1)",

    flexDirection: "row",
    justifyContent: "space-between",
    borderRadius: 10,
    padding: 15,
    marginVertical: 10,
    marginHorizontal: 15,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
    borderWidth: 1,
  },
  taskTextContainer: {
    flex: 1, // Perfimte que o texto ocupe o espaço dispnível
    marginRight: 10,
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
  deleteButton: {
    padding: 8,
    borderRadius: 5,
  },
  deleteButtonText: {
    //  color: "#fff",
    fontSize: 22,
    fontWeight: "bold",
  },
  emptyListText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
  },
});

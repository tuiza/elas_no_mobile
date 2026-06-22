import { Header } from "@/components/Header2";
import { NoteCard } from "@/components/Nota";
import { Pesquisar } from "@/components/Pesquisar2";
import { colors } from "@/theme/colors";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

/* interface Note {
  id: string;
  title: string;
  description: string;
} */

export default function HomeScreen() {
  /// Lista = Array = []

  const notas = [
    {
      titulo: "Estudar React Native",
      descricao: " Teste 1",
    },
    {
      titulo: "Estudar React Native",
      descricao: " Teste 1",
    },
    {
      titulo: "Estudar React Native",
      descricao: " Teste 1",
    },
    {
      titulo: "Estudar React Native",
      descricao: " Teste 1",
    },
    {
      titulo: "Estudar React Native",
      descricao: " Teste 1",
    },
  ];

  function criarNota() {
    alert("Criar Nota");
  }

  return (
    <View style={styles.container}>
      <Header />
      <Pesquisar />

      <FlatList
        showsVerticalScrollIndicator={false}
        data={notas}
        renderItem={({ item }) => (
          <NoteCard titulo={item.titulo} descricao={item.descricao} />
        )}
      />

      <TouchableOpacity style={styles.fab} onPress={criarNota}>
        <Text style={styles.plus}>+</Text>
      </TouchableOpacity>

      {/*   <TouchableOpacity
        style={styles.fab}
        onPress={() => setModalVisible(true)}
      ></TouchableOpacity> */}

      {/* <AddNoteModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        onAddNote={addNote}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
    flex: 1,
    padding: 24,
  },
  fab: {
    position: "absolute",
    bottom: 30,
    alignSelf: "center",
    width: 70,
    height: 70,
    borderRadius: 35,
    backgroundColor: "#4DB6FF",
    justifyContent: "center",
    alignItems: "center",
  },
  plus: {
    fontSize: 35,
    color: "#fff",
  },
});

import { StatusBar } from "expo-status-bar";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
  function entrarNoGrupo() {
    alert("Bem-vinda 💜");
  }

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />

      {/* FOTO / LOGO */}
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=400",
        }}
        style={styles.image}
      />

      {/* TEXTO */}
      <Text style={styles.title}>Elas no Mobile</Text>

      <Text style={styles.description}>Aprendendo React Native do zero 🚀</Text>

      {/* CARD */}
      <View style={styles.card}>
        <Text style={styles.cardTitle}>Workshop React Native</Text>

        <Text style={styles.cardText}>Hoje vamos aprender:</Text>

        <Text>✅ Componentes</Text>
        <Text>✅ JSX</Text>
        <Text>✅ Estilos</Text>
        <Text>✅ Botões</Text>
      </View>

      {/* BOTÃO */}
      <TouchableOpacity style={styles.button} onPress={entrarNoGrupo}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF",
    alignItems: "center",
    justifyContent: "center",
    padding: 24,
  },

  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 20,
  },

  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#0C8A43",
  },

  description: {
    fontSize: 16,
    color: "#666",
    marginTop: 8,
    marginBottom: 24,
  },

  card: {
    width: "100%",
    backgroundColor: "#F7F7F7",
    padding: 20,
    borderRadius: 16,
    marginBottom: 24,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 12,
  },

  cardText: {
    marginBottom: 8,
    color: "#444",
  },

  button: {
    backgroundColor: "#E94E9A",
    width: "100%",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
  },

  buttonText: {
    color: "#FFF",
    fontSize: 18,
    fontWeight: "bold",
  },
});

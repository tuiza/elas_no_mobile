import { colors } from "@/styles/colors";
import { StyleSheet, Text, View } from "react-native";
import { IconSymbol } from "./ui/icon-symbol";

export function NoteCard({
  titulo,
  descricao,
}: {
  titulo: string;
  descricao: string;
}) {
  return (
    <View style={[styles.container, { backgroundColor: colors.pink }]}>
      <View style={styles.date}>
        <Text style={styles.day}>12</Text>

        <Text style={styles.month}>Jan</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.title}>{titulo}</Text>

        <Text style={styles.description}>{descricao}</Text>
      </View>

      <View style={styles.actions}>
        <IconSymbol name="star" color="white" />

        {/*   <Star size={18} color="#FFF" />

        <Ellipsis size={18} color="#FFF" /> */}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    borderRadius: 20,
    padding: 16,
    marginBottom: 16,
    marginTop: 20,
  },

  date: {
    width: 50,
    alignItems: "center",
  },

  day: {
    color: "#FFF",
    fontSize: 24,
    fontWeight: "700",
  },

  month: {
    color: "#FFF",
    fontSize: 12,
  },

  content: {
    flex: 1,
    paddingHorizontal: 16,
  },

  title: {
    color: "#FFF",
    fontWeight: "700",
    marginBottom: 4,
  },

  description: {
    color: "#FFF",
  },

  actions: {
    justifyContent: "space-between",
  },
});

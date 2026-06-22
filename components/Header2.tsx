import { colors } from "@/theme/colors";
import { StyleSheet, Text, View } from "react-native";
import { Avatar } from "./Avatar";
export function Header() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Notas</Text>
        <Text style={styles.texto}>Seus sonhos, suas ideias,</Text>
        <Text style={styles.text2}>seu futuro</Text>
      </View>

      <Avatar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    gap: 15,
  },
  title: {
    fontStyle: "italic",
    color: colors.bluePurple,
    fontSize: 42,
  },
  texto: {
    color: colors.textSecondary,
  },
  text2: {
    color: colors.textSecondary,
    fontWeight: "bold",
  },
});

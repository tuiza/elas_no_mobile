import { IconSymbol } from "@/components/ui/icon-symbol";
import { colors } from "@/theme/colors";
import { StyleSheet, TextInput, View } from "react-native";

export function Pesquisar() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <IconSymbol name="search" color={colors.pink} />
        <TextInput placeholder="Buscar Notas..." />
      </View>

      <IconSymbol name="filter-list" color={colors.pink} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 15,
  },
  inputContainer: {
    flex: 1,
    backgroundColor: colors.backgroundDark,
    borderRadius: 20,
    paddingHorizontal: 14,
    flexDirection: "row",
    alignItems: "center",
  },
});

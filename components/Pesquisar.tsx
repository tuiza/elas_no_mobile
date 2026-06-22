import { StyleSheet, TextInput, View } from "react-native";

export function SearchBar() {
  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        {/*     <Search size={18} color="#AAA" /> */}

        <TextInput placeholder="Buscar notas..." style={styles.input} />
      </View>
      {/* 
      <SlidersHorizontal size={22} color="#8A8A8A" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    gap: 12,
    alignItems: "center",
  },

  inputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F3F3F3",
    borderRadius: 20,
    paddingHorizontal: 14,
  },

  input: {
    flex: 1,
    padding: 12,
  },
});

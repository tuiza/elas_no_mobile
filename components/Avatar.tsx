import { Image, StyleSheet } from "react-native";

export function Avatar() {
  return (
    <Image
      source={{
        uri: "https://i.pravatar.cc/150",
      }}
      style={styles.avatar}
    />
  );
}

const styles = StyleSheet.create({
  avatar: {
    width: 44,
    height: 44,
    borderRadius: 22,
  },
});

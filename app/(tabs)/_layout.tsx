import { IconSymbol } from "@/components/ui/icon-symbol";
import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "#46B3FF",
        headerShown: false,
        tabBarStyle: {
          backgroundColor: "#fff",
          borderColor: "#fff",
        },
      }}
    >
      <Tabs.Screen
        name="home"
        options={{
          title: "Início",

          tabBarIcon: () => <IconSymbol name="house.fill" color="#46B3FF" />,
        }}
      />
      <Tabs.Screen
        name="favoritos"
        options={{
          title: "Favoritos",
          tabBarIcon: () => <IconSymbol name="star" color="#46B3FF" />,
        }}
      />
      <Tabs.Screen
        name="perfil"
        options={{
          title: "Perfil",
          tabBarIcon: () => <IconSymbol name="person" color="#46B3FF" />,
        }}
      />
    </Tabs>
  );
}

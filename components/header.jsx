import { Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import { useNavigationState } from "@react-navigation/native";

export default function Header({ navigation }) {
  const currentRouteName = useNavigationState((state) => {
    const route = state.routes[state.index];
    return route.name;
  });

  return (
    <View style={s.header}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate("Main")}
      >
        <Text
          style={[
            s.buttonText,
            currentRouteName === "Main" && s.activeButtonText,
          ]}
        >
          <Image source={require("../assets/logo.png")} style={s.logo} />
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.navigate("News")}
      >
        <Text
          style={[
            s.buttonText,
            currentRouteName === "News" && s.activeButtonText,
          ]}
        >
          News
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const s = StyleSheet.create({
  header: {
    width: "100%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 10,
    borderColor: "#0000006c",
    borderBottomWidth: 2,
  },
  buttonText: {
    fontFamily: "os-variable",
    fontSize: 25,
    color: "#000000",
    fontWeight: "900",
  },
  activeButtonText: {
    color: "#007AFF",
  },
  logo: {
    width: 100,
    objectFit: "contain",
  },
});

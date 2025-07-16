import { Feather } from "@expo/vector-icons";
import { Image, Pressable, StyleSheet, View } from "react-native";

const HeaderInner = ({ onOpen, navigation }) => {
  const handlePressLogoStyle = (pressed) => {
    return [
      {
        backgroundColor: pressed ? "lightgray" : "white",
        left: pressed ? 10 : 0,
      },
      s.logo_box,
    ];
  };

  return (
    <View style={s.header_container}>
      <Pressable
        style={({ pressed }) => handlePressLogoStyle(pressed)}
        onPress={() => navigation.navigate("Main")}
      >
        <Image source={require("../assets/logo.png")} style={s.logo} />
      </Pressable>
      <Pressable onPress={() => onOpen(true)}>
        <Feather name="menu" size={30} style={s.menu_icon} color="#fff" />
      </Pressable>
    </View>
  );
};

const s = StyleSheet.create({
  header_container: {
    width: "90%",
    height: 50,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: "#000000d7",
    overflow: "hidden",
    borderRadius: 20,
    top: 10,
  },
  logo: {
    width: 70,
    objectFit: "contain",
    maxHeight: 50,
  },
  logo_box: {
    padding: 10,
    borderRadius: 15,
    maxHeight: 30,
    justifyContent: "center",
    alignItems: "center",
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
});

export default HeaderInner;

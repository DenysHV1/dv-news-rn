import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;

const HeaderModal = ({ menuStatus, currentRouteName, navigation, onClose }) => {
  return (
    <Modal visible={menuStatus} animationType="fade" transparent={true}>
      <View style={s.overlay}>
        <Pressable style={s.close_menu} onPress={() => onClose(false)}>
          <AntDesign name="close" size={30} color="black" />
        </Pressable>

        <View style={s.modal_menu_inner}>
          <Pressable onPress={() => navigation.navigate("Main")}>
            <Text
              style={[
                s.buttonText,
                currentRouteName === "Main" && s.activeButtonText,
              ]}
            >
              Home
            </Text>
          </Pressable>
          <Pressable onPress={() => navigation.navigate("News")}>
            <Text
              style={[
                s.buttonText,
                currentRouteName === "News" && s.activeButtonText,
              ]}
            >
              News
            </Text>
          </Pressable>
        </View>
      </View>
    </Modal>
  );
};

const s = StyleSheet.create({
  close_menu: {
    alignSelf: "flex-end",
    zIndex: 999,
    top: 50,
    right: 70,
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#00000061",
  },
  modal_menu_inner: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    gap: 20,

    width: screenWidth - 100,
    maxWidth: screenWidth - 100,
    height: 500,
    maxHeight: 500,

    backgroundColor: "#fff",
    borderRadius: 20,
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

export default HeaderModal;

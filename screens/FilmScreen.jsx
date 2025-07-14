import { useNavigation, useRoute } from "@react-navigation/native";
import { View, StyleSheet, Text, Pressable } from "react-native";

export default FilmScreen = () => {
  const navigation = useNavigation();
  const {
    params: { film },
  } = useRoute();

  return (
    <View style={s.container}>
      <Text style={s.title}>{film.title}</Text>
      <Text style={s.description}>{film.description}</Text>
      <Text style={s.releaseDate}>Release: {film.releaseDate}</Text>

      <Pressable style={s.button} onPress={() => navigation.goBack()}>
        <Text style={s.buttonText}>← Back</Text>
      </Pressable>
    </View>
  );
};

const s = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f9f9f9",
    justifyContent: "center",
    alignItems: "center",
    padding: 24,
  },
  title: {
	fontFamily: "os-variable",
    fontSize: 28,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 12,
    textAlign: "center",
  },
  description: {
    fontSize: 16,
    color: "#444",
    textAlign: "center",
    marginBottom: 16,
    lineHeight: 22,
    paddingHorizontal: 12,
	fontFamily: "os-variable",
  },
  releaseDate: {
	fontFamily: "os-variable-italic",
    fontSize: 14,
    color: "#666",
    marginBottom: 30,
    fontStyle: "italic",
  },
  button: {
    paddingVertical: 12,
    paddingHorizontal: 32,
    backgroundColor: "#3b82f6",
    borderRadius: 8,
    elevation: 3,
  },
  buttonText: {
	fontFamily: "os-variable",
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});

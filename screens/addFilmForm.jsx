import { AntDesign } from "@expo/vector-icons";
import { Formik } from "formik";
import {
  Dimensions,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
  View,
  Text,
  ScrollView,
} from "react-native";

const screenWidth = Dimensions.get("window").width;

const AddFilmForm = ({ formModalStatus, setFormModalStatus, addFilm }) => {
  const initialValues = {
    title: "",
    description: "",
    posterUrl: "",
    releaseDate: "",
  };

  return (
    <Modal transparent={true} animationType="fade" visible={formModalStatus}>
      <View style={s.form_overlay}>
        <View style={s.form_inner}>
          <Pressable
            style={s.close_menu}
            onPress={() => setFormModalStatus(false)}
          >
            <AntDesign name="close" size={28} color="#333" />
          </Pressable>

          <Formik
            initialValues={initialValues}
            onSubmit={(values) => addFilm(values)}
          >
            {(props) => (
              <ScrollView contentContainerStyle={s.form_content}>
                <Text style={s.form_title}>Add New Film</Text>

                <TextInput
                  style={s.input}
                  value={props.values.title}
                  placeholder="Film Name"
                  placeholderTextColor="#999"
                  onChangeText={props.handleChange("title")}
                />

                <TextInput
                  style={s.input}
                  value={props.values.posterUrl}
                  placeholder="Film Image URL"
                  placeholderTextColor="#999"
                  onChangeText={props.handleChange("posterUrl")}
                />
                <TextInput
                  style={s.input}
                  value={props.values.releaseDate}
                  placeholder="Release Date (YYYY-MM-DD)"
                  placeholderTextColor="#999"
                  onChangeText={props.handleChange("releaseDate")}
                />
                <TextInput
                  style={[s.input, s.textArea]}
                  multiline
                  value={props.values.description}
                  placeholder="Film Description"
                  placeholderTextColor="#999"
                  onChangeText={props.handleChange("description")}
                />
                <Pressable style={s.button} onPress={props.handleSubmit}>
                  <Text style={s.buttonText}>Add Film</Text>
                </Pressable>
              </ScrollView>
            )}
          </Formik>
        </View>
      </View>
    </Modal>
  );
};

const s = StyleSheet.create({
  form_overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  form_inner: {
    width: screenWidth - 60,
    backgroundColor: "#fff",
    borderRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 25,
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 8,
    maxHeight: 550,
  },
  form_content: {
    gap: 15,
  },
  close_menu: {
    position: "absolute",
    top: 15,
    right: 15,
    zIndex: 10,
  },
  form_title: {
    fontSize: 22,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 10,
    color: "#333",
  },
  input: {
    height: 45,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    fontSize: 16,
    color: "#333",
    backgroundColor: "#f9f9f9",
  },
  textArea: {
    height: 100,
    textAlignVertical: "top",
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 10,
    alignItems: "center",
  },
  buttonText: {
    color: "#fff",
    fontWeight: "600",
    fontSize: 16,
  },
});

export default AddFilmForm;

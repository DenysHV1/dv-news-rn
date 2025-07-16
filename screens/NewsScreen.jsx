import { useState, useEffect } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
  Pressable,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import AddFilmForm from "./addFilmForm.jsx";
import { filmSchema } from "../validation/addFilmValidation.js";
import defaultData from "../testData/testData.json";
import loadingImg from "../testData/loadingImg.jpg";

const screenWidth = Dimensions.get("window").width;
const cardMargin = 9;
const numColumns = 2;
const cardWidth = (screenWidth - cardMargin * (numColumns + 1)) / numColumns;

const STORAGE_KEY = "FILM_LIST";

export default function NewsScreen() {
  const [formModalStatus, setFormModalStatus] = useState(false);
  const [dataInner, setData] = useState([]);
  const navigation = useNavigation();

  // Загрузка данных при запуске
  useEffect(() => {
    const loadFilms = async () => {
      try {
        const storedData = await AsyncStorage.getItem(STORAGE_KEY);
        if (storedData !== null) {
          setData(JSON.parse(storedData));
        } else {
          setData(defaultData); // если хранилище пустое, загружаем дефолт
        }
      } catch (err) {
        console.error("Ошибка загрузки данных из AsyncStorage:", err);
      }
    };

    loadFilms();
  }, []);

  // Сохранение данных
  const saveFilmsToStorage = async (films) => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(films));
    } catch (err) {
      console.error("Ошибка сохранения в AsyncStorage:", err);
    }
  };

  const addFilm = async (film) => {
    try {
      await filmSchema.validate(film);

      film.id = Math.random();
      const updated = [film, ...dataInner];
      setData(updated);
      await saveFilmsToStorage(updated);

      setFormModalStatus(false);
      Alert.alert("Success", "film have added");
    } catch (error) {
      Alert.alert("Ошибка", error.message);
    }
  };

  return (
    <View style={s.items_container}>
      <View>
        <Pressable
          style={s.open_form_btn}
          onPress={() => setFormModalStatus(true)}
        >
          <Ionicons name="add-circle-outline" size={27} color="#000000" />
          <Text style={s.open_form_text}>Add Film</Text>
        </Pressable>

        <AddFilmForm
          formModalStatus={formModalStatus}
          setFormModalStatus={setFormModalStatus}
          addFilm={addFilm}
        />
      </View>

      <FlatList
        contentContainerStyle={s.films_list}
        data={dataInner}
        numColumns={numColumns}
        keyExtractor={(item) => item.id?.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Film", { film: item })}
            style={[s.film_card, { width: cardWidth }]}
          >
            <Image
              style={s.poster}
              source={item.posterUrl ? { uri: item.posterUrl } : loadingImg}
            />
            <Text style={s.text}>{item.title}</Text>
            <Text style={s.text}>{item.releaseDate}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const s = StyleSheet.create({
  items_container: {
    flex: 1,
    backgroundColor: "#000",
    borderRadius: 20,
    marginTop: 20,
    marginHorizontal: 10,
    paddingHorizontal: 5,
  },
  films_list: {
    justifyContent: "center",
  },
  film_card: {
    margin: 5,
    alignItems: "center",
    borderRadius: 10,
    overflow: "hidden",
    backgroundColor: "#00005f",
  },
  poster: {
    width: "100%",
    height: 250,
    resizeMode: "cover",
  },
  text: {
    color: "white",
    padding: 5,
    textAlign: "center",
  },
  open_form_btn: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    backgroundColor: "#fff",
    maxWidth: 125,
    marginHorizontal: 10,
    marginVertical: 10,
    borderRadius: 10,
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  open_form_text: {
    color: "#000000",
    fontFamily: "os-variable",
    fontWeight: "500",
    fontSize: 18,
  },
});

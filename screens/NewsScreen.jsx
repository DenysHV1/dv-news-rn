import { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import data from "../testData/testData.json";
import loadingImg from "../testData/loadingImg.jpg";
import { useNavigation } from "@react-navigation/native";

const screenWidth = Dimensions.get("window").width;
const cardMargin = 9;
const numColumns = 2;
const cardWidth = (screenWidth - cardMargin * (numColumns + 1)) / numColumns;

export default NewsScreen = () => {
  const [dataInner, setData] = useState(data);
  const navigation = useNavigation();

  return (
    <View style={s.items_container}>
      <FlatList
        contentContainerStyle={s.films_list}
        data={dataInner}
        numColumns={numColumns}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("Film", { film: item })}
            style={[s.film_card, { width: cardWidth }]}
            key={item.id}
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
};

const s = StyleSheet.create({
  items_container: {
    flex: 1,
    marginRight: 5,
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
});
